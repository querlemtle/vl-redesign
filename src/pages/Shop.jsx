import { shopBanner, shipment } from "./../assets/images";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";

const {
  banner,
  bg,
  grid,
  "grid--instruction": gridInstruction,
  "grid--products": gridProducts,
  "title-container-row": titleContainerRow,
  title,
} = styles;

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
      <section className={bg}>
        <div className={grid}>
          <div className={titleContainerRow}>
            <h2 className={title}>商品一覽</h2>
            <p>
              共 <span>{productsData.length}</span> 件商品
            </p>
          </div>
          <div className={gridProducts}>
            {productsData.map((item) => {
              return (
                <ProductCard
                  id={item.id}
                  productImg={item.images[0]}
                  productName={item.name}
                  productPrice={item.price}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <CartBtn />
    </>
  );
}
