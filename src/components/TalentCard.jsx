import PropTypes from "prop-types";
import styles from "./TalentCard.module.css";

const {
  card__link: cardLink,
  card__frame: cardFrame,
  card__img: cardImg,
  "card__content-container": cardContentContainer,
  card__title: cardTitle,
  card__content: cardContent
} = styles;

export default function TalentCard({ charImg, name, description }) {
  return (
    <div className="card">
      <a href="#" className={cardLink}>
        <div className={cardFrame} />
        <img src={charImg} alt={name} className={cardImg} />
        <div className={cardContentContainer}>
          <div className="card__logo">Logo</div>
          <h3 className={cardTitle}>{name}</h3>
          <p className={cardContent}>{description}</p>
        </div>
      </a>
    </div>
  );
}

TalentCard.propTypes = {
  // Webpack's asset module will resolve the image into a data URI
  charImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};