import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404";
import App from "./App";
import "./reset.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
