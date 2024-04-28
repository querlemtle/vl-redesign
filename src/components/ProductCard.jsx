import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const {
  card,
  card__link: cardLink,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  card__title: cardTitle,
} = styles;

export default function ProductCard({ productImg, productName }) {
  return (
    <div className={card}>
      <a href="#" className={cardLink}>
        <div className={cardImgWrapper}>
          <img src={productImg} alt={productName} className={cardImg} />
        </div>
        <p className={cardTitle}>{productName}</p>
      </a>
    </div>
  );
}

ProductCard.propTypes = {
  // Webpack's asset module will resolve the image into a data URI
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};
