import CartBtn from "../components/CartBtn";
import Toast from "../components/Toast";
import styles from "./ProductDetails.module.css";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";

const {
  main,
  grid,
  row,
  title,
  img,
  "img--s": imgS,
  list,
  "list-square": listSquare,
  list__title: listTitle,
  sublist,
  "sublist--between": sublistBetween,
  btn,
  "btn--fill": btnFill,
  "btn--border": btnBorder,
  "btn--stretch": btnStretch,
  divider,
  select,
  clickable,
} = styles;

export default function ProductDetails() {
  const { productId } = useParams();
  const quantitySelect = useRef();
  // 取得目標商品資料，解構至新物件
  const targetProduct = productsData.filter(
    (item) => item.productId === productId
  );
  const [productDetails, setProductDetails] = useState({ ...targetProduct[0] });
  /** @type {string} displayImage - 預覽圖狀態 */
  const [displayImage, setDisplayImage] = useState(productDetails.images[0]);
  /** @type {Array} variantsList - 規格選擇列表狀態 */
  const [variantsList, setVariantsList] = useState(
    productDetails.variants.map((variant, i) => {
      return {
        id: variant.variantId,
        name: variant.name,
        selected: i === 0 ? true : false,
      };
    })
  );
  const [displayToast, setDisplayToast] = useState(false);

  function changePreviewImg(event) {
    setDisplayImage(event.target.src);
  }

  function setSelectedVariant(event) {
    const targetIndex = variantsList.findIndex((variant) => {
      return variant.name === event.target.textContent;
    });

    const newList = variantsList.map((variant, i) => {
      return {
        id: variant.variantId,
        name: variant.name,
        selected: i === targetIndex ? true : false,
      };
    });

    setVariantsList(newList);
  }

  function showToast() {
    setDisplayToast(true);

    setTimeout(() => {
      setDisplayToast(false);
    }, 1500);
  }

  function addToCart(event) {
    event.preventDefault();
    /** @type {string} variantName - 選擇的規格名稱 */
    /** @type {number} purchaseQty - 選擇的數量 */
    const { name: variantName } = variantsList.find(
      (variant) => variant.selected
    );
    const purchaseQty = Number(quantitySelect.current.value);
    /** @type {?Array} cart - 購物車內容 */
    const cart = JSON.parse(window.localStorage.getItem("cart"));
    try {
      if (!cart) {
        window.localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              productId: targetProduct[0].productId,
              variant: variantName,
              quantity: purchaseQty,
            }
          ])
        );
      } else {
        const targetIndex = cart.findIndex(
          (item) => item.productId === targetProduct[0].productId
        );
        const newCart = cart.map((item, i) => {
          return i === targetIndex
            ? {
              productId: targetProduct[0].productId,
              variant: variantName,
              quantity: item.quantity + purchaseQty,
            }
            : { ...item };
        });
        window.localStorage.setItem("cart", JSON.stringify(newCart));
      }
      showToast();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className={main}>
      <section className={grid}>
        {/* Left Col */}
        <aside>
          <div className={img}>
            <img src={displayImage} alt={productDetails.name} />
          </div>
          <div className={row}>
            {/* 商品預覽圖 */}
            {productDetails.images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt={`預覽圖${i + 1}`}
                  className={`${imgS} ${img} ${clickable}`}
                  onPointerDown={changePreviewImg}
                />
              );
            })}
          </div>
        </aside>
        {/* Right Col */}
        <div>
          <h2 className={title}>{productDetails.productName}</h2>
          <h3>
            NT$<span>{productDetails.price}</span>
          </h3>
          <ul className={list}>
            <li>
              <p className={listTitle}>規格</p>
              <ul className={sublist}>
                {variantsList.map((variant) => {
                  return (
                    <li
                      key={variant.name}
                      className={`${btn} ${clickable} ${
                        variant.selected ? btnFill : btnBorder
                      }`}
                      onPointerDown={setSelectedVariant}
                    >
                      {variant.name}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <p className={listTitle}>數量</p>
              <div className={`${sublist} ${sublistBetween}`}>
                <select
                  name="quantity"
                  className={select}
                  title="選擇購買數量"
                  ref={quantitySelect}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button
                  type="button"
                  className={`${btn} ${btnFill} ${btnStretch} ${clickable}`}
                  onPointerDown={addToCart}
                >
                  加入購物車
                </button>
              </div>
            </li>
          </ul>
          <h4 className={`${divider} ${listTitle}`}>購買須知</h4>
          <ul className={listSquare}>
            <li>該商品為客製化商品，下單後不可取消。敬請於下單前確認。</li>
            <li>
              待付費確認完成後，系統才會開始處理您的訂單，約7個工作天內出貨。
            </li>
          </ul>
          <h4 className={`${divider} ${listTitle}`}>商品詳情</h4>
          <ul className={listSquare}>
            {productDetails.details.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </ul>
        </div>
        <CartBtn />
        {displayToast && <Toast />}
      </section>
    </main>
  );
}
