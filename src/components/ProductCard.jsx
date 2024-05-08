import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const {
  card,
  card__link: cardLink,
  "card__img-wrapper": cardImgWrapper,
  card__img: cardImg,
  card__body: cardBody,
  card__title: cardTitle,
  card__meta: cardMeta,
} = styles;

export default function ProductCard({ id, productImg, productName, productPrice }) {
  return (
    <div className={card}>
      <Link to={`/shop/${id}`} className={cardLink}>
        <div className={cardImgWrapper}>
          <img src={productImg} alt={productName} className={cardImg} />
        </div>
        <div className={cardBody}>
          <p className={cardTitle}>{productName}</p>
          {productPrice && (
            <p>
              <span className={cardMeta}>NT${productPrice}</span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  // Webpack's asset module will resolve the image into a data URI
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number,
};
