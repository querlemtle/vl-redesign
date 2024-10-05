"use client";
import NewsCard from "@/components/NewsCard";
import formatDate from "@/lib/formatDate";
import Pagination from "./Pagination";
import styles from "./NewsOverview.module.css";
import PropTypes from "prop-types";

const {
  banner,
  banner__img: bannerImg,
  section__title: sectionTitle,
  section__img: sectionImg,
  section__bg: sectionBg,
  aside,
  aside__link: asideLink,
} = styles;

export default function NewsOverview({ news, totalCount, page, itemsPerPage }) {
  return (
    <>
      <section className={banner}>
        <img
          src="https://res.cloudinary.com/dsme7klzf/image/upload/v1717078041/x0dueo3tlmhagltntq5h.png"
          alt="最新消息封面圖"
          className={bannerImg}
        />
      </section>
      <section className={sectionBg}>
        <h2 className={sectionTitle}>
          <img src="/news-title.svg" alt="News" className={sectionImg} />
        </h2>
        <div className="news__grid">
          {news.map((news) => {
            return (
              <NewsCard
                key={news.newsId}
                id={news.newsId}
                tagText={news.tag}
                title={news.title}
                image={news.coverImg}
                timestamp={formatDate(news.publishedAt, "num")}
              />
            );
          })}
        </div>
        <Pagination
          page={page}
          totalCount={totalCount}
          itemsPerPage={itemsPerPage}
        ></Pagination>
      </section>
      <aside className={aside}>
        <a
          href="https://discord.gg/ECAdMaTNjT"
          target="_blank"
          rel="noreferrer"
          className={asideLink}
        >
          <img
            src="/news/discord-banner.png"
            alt="加入 Vlive Lab 官方 Discord"
          />
        </a>
      </aside>
    </>
  );
}

NewsOverview.propTypes = {
  news: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
