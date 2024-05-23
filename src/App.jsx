import { HashRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Talent from "./pages/Talent";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ScrollToTop } from "./utils/ScrollToPosition";

// GitHub pages 只能使用 HashRouter，參見：https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
