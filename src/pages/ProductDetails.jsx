import CartBtn from "../components/CartBtn";
import Toast from "../components/Toast";
import styles from "./ProductDetails.module.css";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import productsData from "../data/productsData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
  const targetProduct = productsData.find(
    (item) => item.productId === productId
  );

  if(!targetProduct) {
    return <ErrorPage />;
  }

  const [productDetails, setProductDetails] = useState({ ...targetProduct });
  /** @type {string} displayImage - 預覽圖狀態 */
  const [displayImage, setDisplayImage] = useState(productDetails.images[0]);
  /** @type {Array} variantsList - 規格選擇列表狀態 */
  const [variantsList, setVariantsList] = useState(
    productDetails.variants.map((variant, i) => {
      return {
        variantId: variant.variantId,
        name: variant.name,
        selected: i === 0 ? true : false,
      };
    })
  );
  const [displayToast, setDisplayToast] = useState(false);
  const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(false);
  const [tl, setTl] = useState();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  });

  function changePreviewImg(event) {
    setDisplayImage(event.target.src);
  }

  function setSelectedVariant(event) {
    const targetIndex = variantsList.findIndex((variant) => {
      return variant.name === event.target.textContent;
    });

    const newList = variantsList.map((variant, i) => {
      return {
        variantId: variant.variantId,
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
    /** @type {Object} SelectedVariant - 選擇的規格 */
    const selectedVariant = variantsList.find((variant) => variant.selected);
    /** @type {string} selectedVariantId - 選擇的規格 id */
    const selectedVariantId = selectedVariant.variantId;
    /** @type {string} selectedVariantName - 選擇的規格名稱 */
    const selectedVariantName = selectedVariant.name;
    /** @type {number} purchaseQty - 選擇的數量 */
    const purchaseQty = Number(quantitySelect.current.value);
    /** @type {?Array} cart - 購物車內容 */
    const cart = JSON.parse(window.localStorage.getItem("cart"));

    try {
      setIsAddBtnDisabled(true);
      if (!cart) {
        // 1. cart 不存在
        window.localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              productId: targetProduct.productId,
              productName: targetProduct.productName,
              productImage: targetProduct.images[0],
              price: targetProduct.price,
              variants: [
                {
                  variantId: selectedVariantId,
                  name: selectedVariantName,
                  qty: purchaseQty,
                },
              ],
            },
          ])
        );
      } else {
        // 2. cart 存在
        const targetProductIndex = cart.findIndex(
          (item) => item.productId === targetProduct.productId
        );
        // 2-1. 沒有選過這項商品
        if (targetProductIndex === -1) {
          const newCart = cart.concat([
            {
              productId: targetProduct.productId,
              productName: targetProduct.productName,
              productImage: targetProduct.images[0],
              price: targetProduct.price,
              variants: [
                {
                  variantId: selectedVariantId,
                  name: selectedVariantName,
                  qty: purchaseQty,
                },
              ],
            },
          ]);
          window.localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
          // 2-2. 已選過此商品
          /** @type {number} targetVariantIndex - 購物車內該商品的指定規格索引值 */
          const targetVariantIndex = cart[
            targetProductIndex
          ].variants.findIndex(
            (variant) => variant.variantId === selectedVariantId
          );
          if (targetVariantIndex === -1) {
            // 2-2-1. 選過這項商品，但沒有選過此規格
            const updatedVariants = cart[targetProductIndex].variants.concat([
              {
                variantId: selectedVariantId,
                name: selectedVariantName,
                qty: purchaseQty,
              },
            ]);

            const updatedProduct = {
              ...cart[targetProductIndex],
              variants: updatedVariants,
            };

            const newCart = cart.map((item, i) => {
              if (i === targetProductIndex) {
                return { ...updatedProduct };
              } else {
                return item;
              }
            });

            window.localStorage.setItem("cart", JSON.stringify(newCart));
          } else {
            // 2-2-2. 選過這項商品，且有選過此規格
            const updatedVariants = cart[targetProductIndex].variants.map(
              (variant, i) => {
                if (i === targetVariantIndex) {
                  return { ...variant, qty: variant.qty + purchaseQty };
                } else {
                  return variant;
                }
              }
            );

            const updatedProduct = {
              ...cart[targetProductIndex],
              variants: updatedVariants,
            };

            const newCart = cart.map((item, i) => {
              if (i === targetProductIndex) {
                return { ...updatedProduct };
              } else {
                return item;
              }
            });

            window.localStorage.setItem("cart", JSON.stringify(newCart));
          }
        }
      }
      showToast();
    } catch (error) {
      // console.error(error);
    }
    setIsAddBtnDisabled(false);
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
                  disabled={isAddBtnDisabled}
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
        {/* TODO: 怎麼動態傳 text & status */}
        {displayToast && (
          <Toast timeline={tl} text="商品已成功加入購物車!" status="success" />
        )}
      </section>
    </main>
  );
}
