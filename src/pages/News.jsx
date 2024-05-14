import newsTitle from "./../assets/news-page-title.svg";
import NewsBanner from "./../assets/animated-news.webp";
import tempDiscordBanner from "./../assets/temp-discord-banner.png";
import NewsCard from "../components/NewsCard";
import { Pagination } from "../components/Controllers";
import styles from "./News.module.css";

const {
  banner,
  banner__img: bannerImg,
  "section-cols-2": sectionCols2,
  section__title: sectionTitle,
  "section__bg--primary-color-light-10": sectionBgPrimaryColorLight10,
  aside,
} = styles;

export default function News() {
  return (
    <>
      <section className={banner}>
        <img src={NewsBanner} alt="News page banner" className={bannerImg} />
      </section>
      <section className={sectionBgPrimaryColorLight10}>
        <h1
          className={sectionTitle}
        >
          <img src={newsTitle} alt="News" />
        </h1>
        <div className={sectionCols2}>
          <NewsCard id="1" />
          <NewsCard id="2" />
          <NewsCard id="3" />
          <NewsCard id="4" />
        </div>
        <Pagination />
      </section>
      <aside className={aside}>
        <a href="https://discord.gg/ECAdMaTNjT" className="aside__link">
          <img src={tempDiscordBanner} alt="加入 Vlive Lab 官方 Discord" />
        </a>
      </aside>
    </>
  );
}
