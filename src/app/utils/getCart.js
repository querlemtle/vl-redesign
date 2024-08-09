function isObjEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

/** getCart - 取得 localStorage 內的購物車資料 */
export default function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart || isObjEmpty(cart))
    return {
      totalQty: 0,
      data: null,
    };
  else {
    return cart;
  }
}
