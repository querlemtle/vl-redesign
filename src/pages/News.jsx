import { newsTitle, newsBanner, discordBanner } from "../assets/images";
import NewsCard from "../components/NewsCard";
import { Pagination } from "../components/Controllers";
import newsData from "../data/newsData";
import { formatDate } from "../utils/formatDate";
import styles from "./News.module.css";

const {
  banner,
  banner__img: bannerImg,
  section__title: sectionTitle,
  section__bg: sectionBg,
  aside,
} = styles;

export default function News() {
  return (
    <>
      <section className={banner}>
        <img src={newsBanner} alt="News page banner" className={bannerImg} />
      </section>
      <section className={sectionBg}>
        <h1 className={sectionTitle}>
          <img src={newsTitle} alt="News" />
        </h1>
        <div className="grid-news">
          {newsData.map((news) => {
            return (
              <NewsCard
                key={news.newsId}
                id={news.newsId}
                tagText={news.tag}
                title={news.title}
                image={news.coverImg}
                timestamp={formatDate(news.publishedAt)}
              />
            );
          })}
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
