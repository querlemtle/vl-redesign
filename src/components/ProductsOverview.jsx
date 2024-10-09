"use client";
import ProductCard from "@/components/ProductCard";
import CartBtn from "@/components/CartBtn";
import NoSsr from "@/components/NoSsr";
import styles from "./ProductsOverview.module.css";
import useStorage from "@/lib/useStorage";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const instructions = [
  {
    src: "/shop/shipment.png",
    alt: "運送說明",
  },
  {
    href: "/shop/event.png",
    alt: "滿額送贈品",
  },
];

const {
  banner,
  bg,
  grid,
  "grid--instruction": gridInstruction,
  "grid--products": gridProducts,
  "title-container-row": titleContainerRow,
  title,
} = styles;

export default function ProductsOverview({ productsData, placeholderCover }) {
  const [cart, setCart] = useStorage("cart", {
    totalQty: 0,
    data: null,
  });

  return (
    <>
      <section className={banner}>
        <CldImage
          width={1439}
          height={594}
          alt="商店封面"
          src="ddk4c4dhatecgvvpv3ht"
          placeholder="blur"
          blurDataURL={placeholderCover.placeholder}
        />
      </section>
      <section className={`${grid} ${gridInstruction}`}>
        {instructions.map((item, i) => {
          return (
            <a
              key={i}
              href="https://vtuberonline.com/events/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={600}
                height={294}
                src={item.src}
                alt={item.alt}
              />
            </a>
          );
        })}
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
      <NoSsr>
        <CartBtn totalQty={cart.totalQty} />
      </NoSsr>
    </>
  );
}
