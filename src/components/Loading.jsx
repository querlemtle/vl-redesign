import { loadingAnimation } from "./../../public/images";
import styles from "./Loading.module.css";

const { loading } = styles;

export default function Loading() {
  return (
    <div className={loading}>
      <img src={loadingAnimation.src} width={320} height={117} alt="載入中" />
      <p>載入中...</p>
    </div>
  );
}
