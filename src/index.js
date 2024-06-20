import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import "./index.css";
import "./global.css";
import { register } from "swiper/element/bundle";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
