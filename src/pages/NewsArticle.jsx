import styles from "./NewsArticle.module.css";
import { leftArrow } from "../assets/images";
import newsData from "../data/newsData";
import { formatDate } from "../utils/formatDate";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import getNewsTagStyle from "../utils/getNewsTagStyle";
import ErrorPage from "./ErrorPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const {
  article,
  article__meta: articleMeta,
  article__date: articleDate,
  article__title: articleTitle,
  article__img: articleImg,
  article__subtitle: articleSubtitle,
  article__link: articleLink,
  article__para: articlePara,
  btn,
  btn__container: btnContainer,
  btn__icon: btnIcon,
} = styles;

export default function NewsArticle() {
  const { newsId } = useParams();
  const selectedNews = newsData.find((news) => news.newsId === newsId);
  const [newsContent, setNewsContent] = useState({ ...selectedNews });

  if(!selectedNews) {
    return <ErrorPage />;
  }

  return (
    <article className={article}>
      <div className={articleMeta}>
        <span className={`tag ${getNewsTagStyle(newsContent.tag)}`}>
          {newsContent.tag}
        </span>
        <span className={articleDate}>
          {formatDate(newsContent.publishedAt)}
        </span>
      </div>
      <h1 className={articleTitle}>{newsContent.title}</h1>
      <div>
        <LazyLoadImage effect="blur" src={newsContent.coverImg} alt="封面圖" className={articleImg} />
      </div>
      <h3 className={articleSubtitle}>{newsContent.description}</h3>
      <p className={articlePara}>{newsContent.content}</p>
      <p className={articleLink}>
        資料來源：{" "}
        <a href={newsContent.url} target="_blank" rel="noreferrer">
          {newsContent.url}
        </a>
      </p>
      <hr />
      <div className={btn}>
        <Link to="/news" className={btnContainer}>
          <img src={leftArrow} alt="向左箭頭" className={btnIcon} />
          <span>返回消息總覽</span>
        </Link>
      </div>
    </article>
  );
}
