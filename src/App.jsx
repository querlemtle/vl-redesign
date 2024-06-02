import { HashRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
// Lazy loading routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const Talent = lazy(() => import("./pages/Talent"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

import { ScrollToTop } from "./utils/ScrollToPosition";
import { Suspense, lazy } from "react";

// GitHub pages 只能使用 HashRouter，參見：https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <div className="App">
        <Suspense fallback={<Loading></Loading>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/news" element={<News />} />
            <Route path="/article/:newsId" element={<NewsArticle />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
