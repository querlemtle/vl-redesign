import { shipment, event } from "./../assets/images";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";
import getCart from "../utils/getCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  const cart = getCart();
  return (
    <>
      <section className={banner}>
        <LazyLoadImage
          effect="blur"
          alt="商店封面"
          src="https://res.cloudinary.com/dsme7klzf/image/upload/v1717077492/ddk4c4dhatecgvvpv3ht.png"
        />
      </section>
      <section className={`${grid} ${gridInstruction}`}>
        <a
          href="https://vtuberonline.com/events/"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "0.6s" },
            }}
            src={shipment}
            alt="運送說明"
          />
        </a>
        <a
          href="https://vtuberonline.com/events/"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "0.6s" },
            }}
            width={600}
            src={event}
            alt="滿額送贈品"
          />
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
                  productId={item.productId}
                  productImg={item.images[0]}
                  productName={item.productName}
                  productPrice={item.price}
                  key={item.productId}
                />
              );
            })}
          </div>
        </div>
      </section>
      <CartBtn totalQty={cart.totalQty} />
    </>
  );
}
