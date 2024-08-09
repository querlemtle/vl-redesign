"use client";
import NewsCard from "@/app/components/NewsCard";
import newsData from "@/app/data/newsData";
import { formatDate } from "@/app/utils/formatDate";
import { useState, useMemo } from "react";
import Pagination from "@/app/components/Pagination";
import styles from "./News.module.css";

const {
  banner,
  banner__img: bannerImg,
  section__title: sectionTitle,
  section__img: sectionImg,
  section__bg: sectionBg,
  aside,
  aside__link: asideLink,
} = styles;

/** @type {number} itemsPerPage - 每頁顯示資料數 */
const itemsPerPage = 6;

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentNewsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return newsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  function handlePagination(page) {
    setCurrentPage(page);
    document.querySelector("body").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
          {currentNewsData.map((news) => {
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
        <Pagination
          handlePagination={handlePagination}
          totalCount={newsData.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </section>
      <aside className={aside}>
        <a
          href="https://discord.gg/ECAdMaTNjT"
          target="_blank"
          rel="noreferrer"
          className={asideLink}
        >
          <img src="/news/discord-banner.png" alt="加入 Vlive Lab 官方 Discord" />
        </a>
      </aside>
    </>
  );
}
