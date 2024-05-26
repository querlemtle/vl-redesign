import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { newsPlaceholder } from "./../assets/images";
import styles from "./NewsCard.module.css";

const {
  card,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  "card__title-container": cardTitleContainer,
  card__tag: cardTag,
  card__title: cardTitle,
  card__meta: cardMeta,
} = styles;

export default function NewsCard({ id }) {
  return (
    <div className={card}>
      <div className={cardImgWrapper}>
        <Link to={`/news/${id}`} className="card__link">
          <img src={newsPlaceholder} alt="文章縮圖" className={cardImg} />
        </Link>
      </div>
      <div>
        <Link to={`/news/${id}`} className="card__link">
          <div className={cardTitleContainer}>
            <span className={cardTag}>分類標籤</span>
            <h3 className={cardTitle}>
              年度 Vtubers 夏季嘉年華即將在 7 月 20 日登場
            </h3>
          </div>
          <span className={cardMeta}>
            文章發布於 <span className="card__date">2024/04/22</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
};
