import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const {
  card,
  card__link: cardLink,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  card__body: cardBody,
  card__title: cardTitle,
  card__meta: cardMeta
} = styles;

export default function ProductCard({ productImg, productName, productPrice }) {
  return (
    <div className={card}>
      <a href="#" className={cardLink}>
        <div className={cardImgWrapper}>
          <img src={productImg} alt={productName} className={cardImg} />
        </div>
        <div className={cardBody}>
          <p className={cardTitle}>{productName}</p>
          {productPrice && (
            <p>
              <span className={cardMeta}>NT$ {productPrice}</span> 元
            </p>
          )}
        </div>
      </a>
    </div>
  );
}

ProductCard.propTypes = {
  isTagShown: PropTypes.bool.isRequired,
  tagText: PropTypes.string,
  // Webpack's asset module will resolve the image into a data URI
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number
};
