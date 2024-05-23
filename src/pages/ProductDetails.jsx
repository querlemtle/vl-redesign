import CartBtn from "../components/CartBtn";
import Toast from "../components/Toast";
import styles from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";

const {
  main,
  grid,
  row,
  title,
  img,
  "img--s": imgS,
  list,
  "list-square": listSquare,
  list__title: listTitle,
  sublist,
  "sublist--between": sublistBetween,
  btn,
  "btn--fillbg": btnFillbg,
  "btn--border": btnBorder,
  "btn--stretch": btnStretch,
  divider,
  select,
  clickable,
} = styles;

export default function ProductDetails() {
  const { productId } = useParams();
  // 取得目標商品資料，解構至新物件
  const targetProduct = productsData.filter((item) => item.id === productId);
  const [productDetails, setProductDetails] = useState({ ...targetProduct[0] });
  const [displayImage, setDisplayImage] = useState(productDetails.images[0]);

  function changePreviewImg(event) {
    setDisplayImage(event.target.src);
  }

  function showToast() {}

  return (
    <main className={main}>
      <section className={grid}>
        {/* Left Col */}
        <aside>
          <div className={img}>
            <img src={displayImage} alt={productDetails.name} />
          </div>
          <div className={row}>
            {/* 商品預覽圖 */}
            {productDetails.images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt={`預覽圖${i + 1}`}
                  className={`${imgS} ${img} ${clickable}`}
                  onPointerDown={changePreviewImg}
                />
              );
            })}
          </div>
        </aside>
        {/* Right Col */}
        <div>
          <h2 className={title}>{productDetails.name}</h2>
          <h3>
            NT$<span>{productDetails.price}</span>
          </h3>
          <ul className={list}>
            <li>
              <p className={listTitle}>規格</p>
              <ul className={sublist}>
                <li className={`${btn} ${btnFillbg} ${clickable}`}>凝視</li>
                <li className={`${btn} ${btnBorder} ${clickable}`}>坐姿</li>
              </ul>
            </li>
            <li>
              <p className={listTitle}>數量</p>
              <div className={`${sublist} ${sublistBetween}`}>
                <select className={select}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button
                  className={`${btn} ${btnFillbg} ${btnStretch} ${clickable}`}
                >
                  加入購物車
                </button>
              </div>
            </li>
          </ul>
          <h4 className={`${divider} ${listTitle}`}>購買須知</h4>
          <ul className={listSquare}>
            <li>該商品為客製化商品，下單後不可取消。敬請於下單前確認。</li>
            <li>
              待付費確認完成後，系統才會開始處理您的訂單，約7個工作天內出貨。
            </li>
          </ul>
          <h4 className={`${divider} ${listTitle}`}>商品詳情</h4>
          <ul className={listSquare}>
            {productDetails.details.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </ul>
        </div>
        <CartBtn />
        {/* <Toast /> */}
      </section>
    </main>
  );
}
