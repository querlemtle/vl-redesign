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
  banner: banner,
  grid,
  "grid--instruction": gridInstruction,
  "grid--products": gridProducts,
  "title-container-row": titleContainerRow,
  title,
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
      <section className={banner}>
        <img src={shopBanner} alt="banner" />
      </section>
      <section className={`${grid} ${gridInstruction}`}>
        <a href="#">
          <img src={shipment} alt="運送說明" />
        </a>
        <a href="#">
          <img src={shipment} alt="運送說明" />
        </a>
      </section>
      <section className={grid}>
        <div className={titleContainerRow}>
          <h2 className={title}>商品一覽</h2>
          <p>
            共 <span>9</span> 件商品
          </p>
        </div>
        <div className={gridProducts}>
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
