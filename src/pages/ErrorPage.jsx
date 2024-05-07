import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const {
  section,
  section__link: sectionLink
} = styles;

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className={section}>
      <h1>頁面出錯了😣</h1>
      <p>錯誤代碼：{error.status}</p>
      <Link to="/" className={sectionLink}>點我回首頁</Link>
    </div>
  );
}

export default ErrorPage;
