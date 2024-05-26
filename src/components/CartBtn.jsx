import { Link } from "react-router-dom";
import { cartImg } from "./../assets/images";
import styles from "./CartBtn.module.css";

const {
  "btn--fixed": btnFixed
} = styles;

export default function CartBtn() {
  return (
    <Link to="/cart" className={btnFixed}>
      <img src={cartImg} alt="購物車按鈕" />
    </Link>
  );
}
