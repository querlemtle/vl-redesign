import newsTitle from "./../assets/news-page-title.svg";
import tempNewsBanner from "./../assets/temp-news-banner.png";
import tempDiscordBanner from "./../assets/temp-discord-banner.png";
import NewsCard from "../components/NewsCard";
import { Pagination } from "../components/Controllers";
import styles from "./News.module.css";

const {
  banner,
  section__title: sectionTitle,
  "section__title--subtitle-right": sectionTitleSubtitleRight,
  "section__title--stretch": sectionTitleStretch,
  "section__bg--primary-color-light-10": sectionBgPrimaryColorLight10,
  aside,
} = styles;

export default function News() {
  return (
    <>
      <section className={banner}>
        <img src={tempNewsBanner} alt="News page banner" />
      </section>
      <section className={`cols-2 ${sectionBgPrimaryColorLight10}`}>
        <h1
          className={`${sectionTitle} ${sectionTitleSubtitleRight} ${sectionTitleStretch}`}
        >
          <img src={newsTitle} alt="News" />
        </h1>
        <NewsCard id="1" />
        <NewsCard id="2" />
        <NewsCard id="3" />
        <NewsCard id="4" />
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
