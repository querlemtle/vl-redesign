import PropTypes from "prop-types";
import styles from "./TalentCard.module.css";

const {
  card__link: cardLink,
  card__img: cardImg,
  card__cover: cardCover,
  card__logo: cardLogo,
} = styles;

export default function TalentCard({ charImg, logo, name }) {
  return (
    <div className="card">
      <a href="#" className={cardLink}>
        <img src={charImg} alt={name} className={cardImg} />
        <div className={cardCover}>
          <img src={logo} alt={name} className={cardLogo} />
        </div>
      </a>
    </div>
  );
}

TalentCard.propTypes = {
  // Webpack's asset module will resolve the image into a data URI
  charImg: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
