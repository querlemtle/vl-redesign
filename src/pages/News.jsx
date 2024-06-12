import { newsTitle, discordBanner } from "../assets/images";
import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData";
import { formatDate } from "../utils/formatDate";
import { useState, useMemo } from "react";
import Pagination from "../components/Pagination";
import styles from "./News.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const {
  banner,
  banner__img: bannerImg,
  section__title: sectionTitle,
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
        <LazyLoadImage
          effect="blur"
          src="https://res.cloudinary.com/dsme7klzf/image/upload/v1717078041/x0dueo3tlmhagltntq5h.png"
          alt="最新消息封面圖"
          className={bannerImg}
        />
      </section>
      <section className={sectionBg}>
        <h1 className={sectionTitle}>
          <img src={newsTitle} alt="News" />
        </h1>
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
          <img src={discordBanner} alt="加入 Vlive Lab 官方 Discord" />
        </a>
      </aside>
    </>
  );
}
