import { newsTitle, newsBanner, discordBanner } from "../assets/images";
import NewsCard from "../components/NewsCard";
import { Pagination } from "../components/Controllers";
import styles from "./News.module.css";

const {
  banner,
  banner__img: bannerImg,
  section__title: sectionTitle,
  "section__bg": sectionBg,
  aside,
} = styles;

export default function News() {
  return (
    <>
      <section className={banner}>
        <img src={newsBanner} alt="News page banner" className={bannerImg} />
      </section>
      <section className={sectionBg}>
        <h1
          className={sectionTitle}
        >
          <img src={newsTitle} alt="News" />
        </h1>
        <div className="grid-news">
          <NewsCard id="1" />
          <NewsCard id="2" />
          <NewsCard id="3" />
          <NewsCard id="4" />
        </div>
        <Pagination />
      </section>
      <aside className={aside}>
        <a href="https://discord.gg/ECAdMaTNjT" className="aside__link">
          <img src={discordBanner} alt="加入 Vlive Lab 官方 Discord" />
        </a>
      </aside>
    </>
  );
}
