import Home from "@/components/Home";
import { getProducts, getNewsByPage } from "@/lib/mongodb/db";

const itemsPerPage = 6;

export default async function Page() {
  const { products } = await getProducts();
  const result = await getNewsByPage(1, itemsPerPage);
  const paginatedNews = result[0].paginatedResults;

  return <Home newsData={paginatedNews} productsData={products} />;
}
