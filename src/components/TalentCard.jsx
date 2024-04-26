import PropTypes from "prop-types";
import cellphone from "./../assets/cellphone-frame.png";
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
        <img src={cellphone} alt="手機框" className={cardFrame} />
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
  charImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
