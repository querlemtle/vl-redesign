import Placeholder from "./../assets/news-placeholder.png";
import styles from "./NewsCard.module.css";

const {
  card,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  "card__title-container": cardTitleContainer,
  card__tag: cardTag,
  card__title: cardTitle,
  "card__content-container": cardConentContainer,
  card__content: cardContent,
  card__meta: cardMeta,
} = styles;

export default function NewsCard() {
  return (
    <div className={card}>
      <div className={cardImgWrapper}>
        <a href="#" className="card__link">
          <img src={Placeholder} alt="文章縮圖" className={cardImg} />
        </a>
      </div>
      <div className={cardConentContainer}>
        <a href="#" className="card__link">
          <div className={cardTitleContainer}>
            <span className={cardTag}>分類標籤</span>
            <h3 className={cardTitle}>
              年度 Vtubers 夏季嘉年華即將在 7 月 20 日登場
            </h3>
          </div>
          <p className={cardContent}>
            文章內文預覽預留一排文章內文預覽預留一排文章內文預覽預文章文章內文預覽預留一排文章內文預覽預留一排文章內文預覽預文章
          </p>
          <span className={cardMeta}>
            文章發布於 <span className="card__date">2024/04/22</span>
          </span>
        </a>
      </div>
    </div>
  );
}
