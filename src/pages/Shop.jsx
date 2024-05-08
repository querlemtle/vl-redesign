import ProductCard from "../components/ProductCard";
import candle from "./../assets/candle.png";
import tempBanner from "./../assets/temp-bg.png";
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

export default function Shop() {
  return (
    <>
      <section className={sectionFull}>
        <img src={tempBanner} alt="banner" />
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
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
            productImg={candle}
            productName="香氛蠟燭70ml"
            productPrice={200}
          />
          <ProductCard
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
