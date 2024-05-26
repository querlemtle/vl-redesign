import { Link } from "react-router-dom";
import { cartImg } from "./../assets/images";
import styles from "./CartBtn.module.css";

const { btn, btn__img: btnImg } = styles;

export default function CartBtn() {
  return (
    <Link to="/cart" className={btn}>
      <img src={cartImg} alt="購物車按鈕" className={btnImg} />
    </Link>
  );
}
