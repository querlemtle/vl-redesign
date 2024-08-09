"use client";
import Link from "next/link";
import styles from "./Cart.module.css";
import PropTypes from "prop-types";
import { useState, Fragment, useEffect } from "react";
import getCart from "@/app/utils/getCart";

const {
  "section-center": sectionCenter,
  col,
  grid,
  "grid--wrap": gridWrap,
  section__title: sectionTitle,
  card,
  card__item: cardItem,
  "text--accent": textAccent,
  aside,
  aside__body: asideBody,
  aside__container: asideContainer,
  aside__title: asideTitle,
  aside__accent: asideAccent,
  btn,
  "btn--fill": btnFill,
  link,
  msg,
} = styles;

/** EmptyCartMsg - 購物車為空時的提示訊息 */
function EmptyCartMsg() {
  return (
    <div className={msg}>
      <h3>購物車中還沒有任何商品！</h3>
      <Link href="/shop" className={`${btn} ${btnFill}`}>
        前往選購
      </Link>
    </div>
  );
}

/** ItemCard - 目前選購的商品卡片元件 */
function ItemCard({
  productId,
  productImage,
  productName,
  price,
  variants,
  deleteItem,
}) {
  /**
   * sumProductPrice - 計算單項商品總價
   * @param {number} price - 商品單價
   * @param {Array} orderList - 該商品所有款式的陣列資料
   * */
  function sumProductPrice(price, orderList) {
    if (!orderList || orderList.length === 0) {
      return;
    }
    let sum = 0;
    for (const item of orderList) {
      sum += price * item.qty;
    }
    return sum;
  }

  return (
    <div className={card}>
      <img src={productImage} alt={productName} />
      <div className={col}>
        <h3>{productName}</h3>
        <div className={`${grid} ${gridWrap}`}>
          {variants.map((variant) => {
            return (
              <Fragment key={variant.variantId}>
                {/* Column */}
                <div className={`${col} ${cardItem}`}>
                  <span>規格</span>
                  <p>{variant.name}</p>
                </div>
                {/* Column */}
                <div className={`${col} ${cardItem}`}>
                  <span>數量</span>
                  <p>{variant.qty}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
        <span className={textAccent}>
          商品預購期約14-30天不等，較難提供確切到貨時間還請見諒。
        </span>
      </div>
      <h4>
        NT$<span>{sumProductPrice(price, variants)}</span>
      </h4>
      <button
        type="button"
        className={btn}
        onClick={() => deleteItem(productId)}
      >
        <img src="/icons/cross.svg" alt="刪除商品按鈕" />
      </button>
    </div>
  );
}

ItemCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  variants: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default function Cart() {
  const [cart, setCart] = useState(() => getCart());
  const [totalPrice, setTotalPrice] = useState(() => sumTotalPrice(cart.data));

  /** sumTotalPrice - 計算購物車內商品總價 */
  function sumTotalPrice(data) {
    if (!data) {
      return 0;
    }

    let sum = 0;
    for (const product of data) {
      product.variants.forEach(
        (variant) => (sum += product.price * variant.qty)
      );
    }
    return sum;
  }

  /** deleteItem - 刪除購物車內指定商品並更新總價 */
  function deleteItem(targetId) {
    const newCartData = cart.data.filter((item) => item.productId !== targetId);

    let newTotalQty = 0;
    for (const product of newCartData) {
      product.variants.forEach((variant) => (newTotalQty += variant.qty));
    }

    const newCart = {
      totalQty: newTotalQty,
      data: newCartData,
    };

    window.localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setTotalPrice(sumTotalPrice(newCartData));
  }

  return (
    <section className={sectionCenter}>
      <h2 className={sectionTitle}>購物車內容</h2>
      {cart.totalQty === 0 ? (
        <EmptyCartMsg />
      ) : (
        <div className={grid}>
          {/* Left column - 已選擇商品列表 */}
          <div>
            {cart.data.map((item) => {
              return (
                <ItemCard
                  key={item.productId}
                  {...item}
                  deleteItem={deleteItem}
                />
              );
            })}
          </div>
          {/* Right column - 確認總價與下單 */}
          <aside className={aside}>
            <div className={asideContainer}>
              <p className={asideTitle}>訂單金額確認</p>
              <div className={`${grid} ${asideBody}`}>
                <p>購物車總計</p>
                <p className={asideAccent}>
                  NT$<span>{totalPrice}</span>
                </p>
              </div>
              <Link href="/checkout" className={`${btn} ${btnFill}`}>
                前往結帳
              </Link>
            </div>
            <Link href="/shop" className={link}>
              繼續選購
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
