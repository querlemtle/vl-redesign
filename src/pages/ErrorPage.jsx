import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="section">
      <h1 className="section__title">頁面出錯了😣</h1>
      <p className="section__content">錯誤代碼：{error.status}</p>
    </div>
  );
}

export default ErrorPage;
