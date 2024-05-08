import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Talent from "./pages/Talent";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NewsArticle from "./pages/NewsArticle";
import ProductDetail from "./pages/ProductDetail";

// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:newsId",
        element: <NewsArticle />,
      },
      {
        path: "/talent",
        element: <Talent />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// Header and footer need to be rendered within `RouterProvider`, so <Link> can find router context
// Reference: https://stackoverflow.com/a/77977937
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
