import styles from "./NewsArticle.module.css";
import { LeftArrow, RightArrow } from "../components/IconSvgs";
import newsData from "../data/newsData";
import { formatDate } from "../utils/formatDate";
import { useParams } from "react-router-dom";
import { useState } from "react";
import getNewsTagStyle from "../utils/getNewsTagStyle";

const {
  article,
  article__meta: articleMeta,
  article__date: articleDate,
  article__title: articleTitle,
  article__img: articleImg,
  article__subtitle: articleSubtitle,
  article__link: articleLink,
  article__para: articlePara,
  controller,
  controller__row: controllerRow,
  controller__icon: controllerIcon,
} = styles;

export default function NewsArticle() {
  const { newsId } = useParams();
  const selectedNews = newsData.filter((news) => news.newsId === newsId);
  const [newsContent, setNewsContent] = useState({ ...selectedNews[0] });

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
        <img src={newsContent.coverImg} alt="封面圖" className={articleImg} />
      </div>
      <h3 className={articleSubtitle}>{newsContent.description}</h3>
      <p className={articlePara}>{newsContent.content}</p>
      <p className={articleLink}>
        資料來源： <a href={newsContent.url}>{newsContent.url}</a>
      </p>
      <hr />
      <div className={controller}>
        <a href="#" className={controllerRow}>
          <LeftArrow size={36} lineFill="#2d5993" className={controllerIcon} />
          上一篇
        </a>
        <a href="#" className={controllerRow}>
          下一篇
          <RightArrow size={36} lineFill="#2d5993" className={controllerIcon} />
        </a>
      </div>
    </article>
  );
}
