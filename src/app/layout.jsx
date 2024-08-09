import PropTypes from "prop-types";
import Script from "next/script";
import { Noto_Sans_TC } from "next/font/google";
import "@/app/reset.css";
import "@/app/index.css";
import "@/app/global.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Vlive Lab – 未來實驗所",
  description:
    "Vlive Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。",
};

const notoSansTC = Noto_Sans_TC({ preload: false });

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
        <title>Vlive Lab – 未來實驗所</title>
      </head>
      <body className={notoSansTC.className} suppressHydrationWarning>
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
