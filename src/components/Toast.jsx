import { circleCheck } from "./../assets/images";
import styles from "./Toast.module.css";

const { toast } = styles;

export default function Toast() {
  return (
    <div className={toast}>
      <img src={circleCheck} alt="success" />
      <h3>商品已成功加入購物車!</h3>
    </div>
  );
}
