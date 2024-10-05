import { cache } from "react";
import clientPromise from "./connect";

let client, db, products, news;

/**
 * initDb - 連接資料庫
 */
async function initDb() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db(process.env.DB_NAME);
    products = await db.collection("products");
    news = await db.collection("news");
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
}

/**
 * getNewsByPage - 取得指定分頁的新聞文章
 * @param {number} page - 頁碼
 * @param {number} itemsPerPage - 每頁資料數
 * @returns 該分頁文章陣列，及總文章數
 */
export const getNewsByPage = cache(async (page = 1, itemsPerPage = 6) => {
  try {
    if (!news) await initDb();
    const pipeline = [
      {
        $facet: {
          // Fetch the paginated results
          paginatedResults: [
            { $sort: { publishedAt: -1 } },
            { $skip: (page - 1) * itemsPerPage },
            { $limit: itemsPerPage },
            { $unset: "_id" },
          ],
          // Count the number of documents
          totalCount: [{ $count: "total" }],
        },
      },
    ];

    const result = await news.aggregate(pipeline).toArray();

    return result;
  } catch (error) {
    return { error: "Fail to fetch news data." };
  }
});

/**
 * getNewsById - 取得單一文章內容
 * @param {string} id - 文章 id (newsId)
 * @returns 文章物件陣列
 */
export const getNewsById = cache(async (id) => {
  try {
    if (!news) await initDb();
    const result = await news
      .find({ newsId: id })
      .map((item) => {
        return {
          ...item,
          _id: item._id.toString(),
        };
      })
      .toArray();
    return { news: result };
  } catch (error) {
    return { error: "Fail to fetch news data." };
  }
});

/**
 * getProducts - 取得商品資料
 * @returns 商品資料物件陣列
 */
export const getProducts = cache(async () => {
  try {
    if (!products) await initDb();
    const result = await products
      .find({})
      .map((item) => ({
        ...item,
        _id: item._id.toString(),
      }))
      .toArray();
    return { products: result };
  } catch (error) {
    return { error: "Fail to fetch products data." };
  }
});

/**
 * getProductById - 取得單一商品詳情
 * @param {string} id － 商品 id (productId)
 * @returns 商品資料物件陣列
 */
export const getProductById = cache(async (id) => {
  try {
    if (!products) await initDb();
    const result = await products
      .find({ productId: id })
      .map((item) => ({
        ...item,
        _id: item._id.toString(),
      }))
      .toArray();
    return { product: result };
  } catch (error) {
    return { error: "Fail to fetch products data." };
  }
});
