import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";

// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "news",
    element: <News />
  }
]);


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
