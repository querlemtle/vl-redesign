import ProductCard from "../components/ProductCard";
import candle from "./../assets/candle.png";
import shopBanner from "./../assets/shop-banner.png";
import shipment from "./../assets/shipment.png";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";

const productsData = [
  {
    id: "u9GwHz",
    name: "香氛蠟燭70ml",
    price: 200,
  },
  {
    id: "ROh1oK",
    name: "胸章",
    price: 50,
  },
  {
    id: "kwxsxr",
    name: "魔王Q貼",
    price: 100,
  },
  {
    id: "4CWkdu",
    name: "T恤",
    price: 680,
  },
  {
    id: "jTYgOk",
    name: "立牌",
    price: 200,
  },
  {
    id: "3arbQF",
    name: "夢姬海報",
    price: 500,
  },
  {
    id: "D0F475",
    name: "矽藻土杯墊",
    price: 100,
  },
  {
    id: "wFARMs",
    name: "夢姬飯友",
    price: 150,
  },
  {
    id: "KO3HsE",
    name: "悠遊卡貼紙",
    price: 120,
  },
];

const {
  "section-full": sectionFull,
  "section-center": sectionCenter,
  "section-cols-2": sectionCols2,
  "section-cols-3": sectionCols3,
  "title-container-row": titleContainerRow,
  title,
  link,
} = styles;

export default function Shop() {
  return (
    <>
      <section className={sectionFull}>
        <img src={shopBanner} alt="banner" />
      </section>
      <section className={`${sectionCenter} ${sectionCols2}`}>
        <a href="#" className={link}>
          <img src={shipment} alt="運送說明" />
        </a>
        <a href="#" className={link}>
          <img src={shipment} alt="運送說明" />
        </a>
      </section>
      <section className={sectionCenter}>
        <div className={titleContainerRow}>
          <h2 className={title}>商品一覽</h2>
          <p>
            共 <span>9</span> 件商品
          </p>
        </div>
        <div className={sectionCols3}>
          <ProductCard
            id="1"
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
        </div>
      </section>
      <CartBtn />
    </>
  );
}
