"use client";
import Link from "next/link";
import styles from "./NewsArticle.module.css";
import formatDate from "@/lib/formatDate";
import getNewsTagStyle from "@/lib/getNewsTagStyle";
import PropTypes from "prop-types";

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

export default function NewsArticle({ news }) {
  return (
    <article className={article}>
      <div className={articleMeta}>
        <span className={`tag ${getNewsTagStyle(news.tag)}`}>{news.tag}</span>
        <span className={articleDate}>
          {formatDate(news.publishedAt, "num")}
        </span>
      </div>
      <h1 className={articleTitle}>{news.title}</h1>
      <div>
        <img src={news.coverImg} alt="封面圖" className={articleImg} />
      </div>
      <h3 className={articleSubtitle}>{news.description}</h3>
      <p className={articlePara}>{news.content}</p>
      <p className={articleLink}>
        資料來源：{" "}
        <a href={news.url} target="_blank" rel="noreferrer">
          {news.url}
        </a>
      </p>
      <hr />
      <div className={btn}>
        <Link href="/news?page=1" className={btnContainer}>
          <img src="/icons/left-arrow.svg" alt="向左箭頭" className={btnIcon} />
          <span>返回消息總覽</span>
        </Link>
      </div>
    </article>
  );
}

NewsArticle.propTypes = {
  news: PropTypes.object.isRequired,
};
