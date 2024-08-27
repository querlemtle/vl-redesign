import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./NewsCard.module.css";
import getNewsTagStyle from "@/lib/getNewsTagStyle";

const {
  card,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  "card__title-container": cardTitleContainer,
  card__title: cardTitle,
  card__meta: cardMeta,
} = styles;

export default function NewsCard({ id, image, tagText, title, timestamp }) {
  return (
    <div className={card}>
      <div className={cardImgWrapper}>
        <Link href={`/news/${id}`} className="card__link">
          <img src={image} alt="文章縮圖" className={cardImg} />
        </Link>
      </div>
      <div>
        <Link href={`/news/${id}`} className="card__link">
          <div className={cardTitleContainer}>
            <span className={`tag ${getNewsTagStyle(tagText)}`}>{tagText}</span>
            <h3 className={cardTitle}>{title}</h3>
          </div>
          <span className={cardMeta}>
            文章發布於 <span className="card__date">{timestamp}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tagText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // https://stackoverflow.com/questions/39627545/react-prop-validation-for-date-objects
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};
