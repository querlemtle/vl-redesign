"use client";
import CartBtn from "@/components/CartBtn";
import Toast from "@/components/Toast";
import NoSsr from "@/components/NoSsr";
import styles from "./ProductDetails.module.css";
import { useRef, useState } from "react";
import useStorage from "@/lib/useStorage";
import PropTypes from "prop-types";

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

export default function ProductDetails({ productData }) {
  const quantitySelect = useRef();

  /** @type {string} displayImage - 預覽圖狀態 */
  const [displayImage, setDisplayImage] = useState(productData.images[0]);
  /** @type {Array} variantsList - 規格選擇列表狀態 */
  const [variantsList, setVariantsList] = useState(
    productData.variants.map((variant, i) => {
      return {
        variantId: variant.variantId,
        name: variant.name,
        selected: i === 0,
      };
    })
  );

  const [showToast, setShowToast] = useState({
    isShown: false,
    status: null,
    text: null,
  });

  const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(false);

  const [cart, setCart] = useStorage("cart", {
    totalQty: 0,
    data: null,
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
        selected: i === targetIndex,
      };
    });

    setVariantsList(newList);
  }

  function updateToast(status, text) {
    setShowToast({
      isShown: true,
      status,
      text,
    });

    setTimeout(() => {
      setShowToast({
        ...showToast,
        isShown: false,
      });
    }, 1000);
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

    setIsAddBtnDisabled(true);
    try {
      if (!cart.data) {
        // 1. cart 不存在
        setCart({
          totalQty: purchaseQty,
          data: [
            {
              productId: productData.productId,
              productName: productData.productName,
              productImage: productData.images[0],
              price: productData.price,
              variants: [
                {
                  variantId: selectedVariantId,
                  name: selectedVariantName,
                  qty: purchaseQty,
                },
              ],
            },
          ],
        });
      } else {
        // 2. cart 存在
        const targetProductIndex = cart.data.findIndex(
          (item) => item.productId === productData.productId
        );
        // 2-1. 沒有選過這項商品
        if (targetProductIndex === -1) {
          const newCart = {
            totalQty: cart.totalQty + purchaseQty,
            data: cart.data.concat([
              {
                productId: productData.productId,
                productName: productData.productName,
                productImage: productData.images[0],
                price: productData.price,
                variants: [
                  {
                    variantId: selectedVariantId,
                    name: selectedVariantName,
                    qty: purchaseQty,
                  },
                ],
              },
            ]),
          };
          setCart(newCart);
        } else {
          // 2-2. 已選過此商品
          /** @type {number} targetVariantIndex - 購物車內該商品的指定規格索引值 */
          const targetVariantIndex = cart.data[
            targetProductIndex
          ].variants.findIndex(
            (variant) => variant.variantId === selectedVariantId
          );
          if (targetVariantIndex === -1) {
            // 2-2-1. 選過這項商品，但沒有選過此規格
            const updatedProduct = {
              ...cart.data[targetProductIndex],
              variants: cart.data[targetProductIndex].variants.concat([
                {
                  variantId: selectedVariantId,
                  name: selectedVariantName,
                  qty: purchaseQty,
                },
              ]),
            };

            const newCart = {
              totalQty: cart.totalQty + purchaseQty,
              data: cart.data.map((item, i) => {
                if (i === targetProductIndex) {
                  return { ...updatedProduct };
                } else {
                  return item;
                }
              }),
            };
            setCart(newCart);
          } else {
            // 2-2-2. 選過這項商品，且有選過此規格
            const updatedProduct = {
              ...cart.data[targetProductIndex],
              variants: cart.data[targetProductIndex].variants.map(
                (variant, i) => {
                  if (i === targetVariantIndex) {
                    return { ...variant, qty: variant.qty + purchaseQty };
                  } else {
                    return variant;
                  }
                }
              ),
            };

            const newCart = {
              totalQty: cart.totalQty + purchaseQty,
              data: cart.data.map((item, i) => {
                if (i === targetProductIndex) {
                  return { ...updatedProduct };
                } else {
                  return item;
                }
              }),
            };
            setCart(newCart);
          }
        }
      }
      updateToast("success", "商品已成功加入購物車！");
    } catch (error) {
      updateToast("error", "商品加入購物車失敗");
    }
    setIsAddBtnDisabled(false);
  }

  return (
    <main className={main}>
      <NoSsr>
        <section className={grid}>
          {/* Left Column */}
          <aside>
            <div className={img}>
              <img src={displayImage} alt={productData.name} />
            </div>
            <div className={row}>
              {/* 商品預覽圖 */}
              {productData.images.map((image, i) => {
                return (
                  <img
                    key={i}
                    src={image}
                    alt={`預覽圖${i + 1}`}
                    className={`${imgS} ${img} ${clickable}`}
                    onClick={changePreviewImg}
                  />
                );
              })}
            </div>
          </aside>
          {/* Right Column */}
          <div>
            <h2 className={title}>{productData.productName}</h2>
            <h3>
              NT$<span>{productData.price}</span>
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
                        onClick={setSelectedVariant}
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
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button
                    type="button"
                    className={`${btn} ${btnFill} ${btnStretch} ${clickable} ${
                      isAddBtnDisabled && "disabled"
                    }`}
                    onClick={addToCart}
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
              {productData.details.map((point, i) => {
                return <li key={i}>{point}</li>;
              })}
            </ul>
          </div>
          <CartBtn totalQty={cart.totalQty} />
          {showToast.isShown && (
            <Toast text={showToast.text} status={showToast.status} />
          )}
        </section>
      </NoSsr>
    </main>
  );
}

ProductDetails.propTypes = {
  productsData: PropTypes.array.isRequired,
};
