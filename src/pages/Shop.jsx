import { shipment, event } from "./../assets/images";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import CartBtn from "../components/CartBtn";
import styles from "./Shop.module.css";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  placeholder,
} from "@cloudinary/react";

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
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsme7klzf",
    },
  });

  const shopBanner = cld.image("ddk4c4dhatecgvvpv3ht");

  return (
    <>
      <section className={banner}>
        <AdvancedImage
          alt="商店封面"
          cldImg={shopBanner}
          plugins={[placeholder()]}
        />
      </section>
      <section className={`${grid} ${gridInstruction}`}>
        <a href="https://vtuberonline.com/events/">
          <img src={shipment} alt="運送說明" />
        </a>
        <a href="https://vtuberonline.com/events/">
          <img src={event} alt="滿額送贈品" />
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
      <CartBtn />
    </>
  );
}
