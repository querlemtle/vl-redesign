import { loadingIcon } from "../assets/images";
import styles from "./Loading.module.css";

const { loading } = styles;

export default function Loading() {
  return (
    <div className={loading}>
      <img src={loadingIcon} alt="loading-icon" />
      <p>載入中...</p>
    </div>
  );
}
