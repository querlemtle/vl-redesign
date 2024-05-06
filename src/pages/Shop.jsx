import ProductCard from "../components/ProductCard";
import candle from "./../assets/candle.png";
import tempBanner from "./../assets/temp-banner.png";
import shipment from "./../assets/shipment.png";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";

const {
  items__list: itemsList,
  "title-container-row": titleContainerRow,
  title,
} = styles;

export default function Shop() {
  return (
    <>
      <section>
        <img src={tempBanner} alt="banner" />
      </section>
      <section className="cols-2">
        <a href="#">
          <img src={shipment} alt="" />
        </a>
        <a href="#">
          <img src={shipment} alt="" />
        </a>
      </section>
      <section>
        <div className={titleContainerRow}>
          <h2 className={title}>商品一覽</h2>
          <p>
            共 <span>9</span> 件商品
          </p>
        </div>
        <div className={`cols-3 ${itemsList}`}>
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
