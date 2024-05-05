import { Link } from "react-router-dom";
import cartImg from "./../assets/cart.png";
import "./CartBtn.css";

export default function CartBtn() {
  return (
    <Link to="/" className="btn--fixed">
      <img src={cartImg} alt="購物車按鈕" />
    </Link>
  );
}
