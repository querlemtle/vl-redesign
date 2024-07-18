import { Link } from "react-router-dom";
import { cartImg } from "./../../public/images";
import PropTypes from "prop-types";
import styles from "./CartBtn.module.css";

const { btn, btn__img: btnImg, btn__info: btnInfo } = styles;

export default function CartBtn({ totalQty }) {
  /**
   * filterDisplayQty - 數量超過 99 時，顯示 99+ 避免爆版
   * @param {number} qty - 購物車內商品總數量
   * @return {string} 處理後顯示於畫面的數量字串
   * */
  function filterDisplayQty(qty) {
    if (!qty) {
      return;
    } else if (qty > 99) {
      return "99+";
    } else {
      return String(qty);
    }
  }

  return (
    <Link to="/cart" className={btn}>
      <img src={cartImg.src} alt="購物車按鈕" className={btnImg} />
      {/* totalQty 為 0 時，不顯示 */}
      {totalQty ? (
        <div className={btnInfo}>{filterDisplayQty(totalQty)}</div>
      ) : null}
    </Link>
  );
}

CartBtn.propTypes = {
  totalQty: PropTypes.number.isRequired,
};
