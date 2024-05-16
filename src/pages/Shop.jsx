import ProductCard from "../components/ProductCard";
import candle from "./../assets/products/item_05.png";
import sticker from "./../assets/products/item_03.png";
import shirt from "./../assets/products/item_06.png";
import pin from "./../assets/products/item_04.png";
import poster from "./../assets/products/item_02.png";
import shopBanner from "./../assets/shop-banner.png";
import shipment from "./../assets/shipment.png";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";

const {
  "section-full": sectionFull,
  "section-center": sectionCenter,
  "section-cols-2": sectionCols2,
  "section-cols-3": sectionCols3,
  "title-container-row": titleContainerRow,
  title,
  link,
} = styles;

const products = [
  {
    id: "u9GwHz",
    name: "香氛蠟燭70ml",
    price: 200,
    img: candle,
  },
  {
    id: "ROh1oK",
    name: "胸章",
    price: 50,
    img: pin,
  },
  {
    id: "kwxsxr",
    name: "魔王Q貼",
    price: 100,
    img: sticker,
  },
  {
    id: "4CWkdu",
    name: "一期生T恤",
    price: 680,
    img: shirt,
  },
  { id: "3arbQF", name: "夢姬海報", price: 500, img: poster },
];

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
          {products.map((item) => {
            return (
              <ProductCard
                id={item.id}
                productImg={item.img}
                productName={item.name}
                productPrice={item.price}
                key={item.id}
              />
            );
          })}
        </div>
      </section>
      <CartBtn />
    </>
  );
}
