import PropTypes from "prop-types";
import "./Buttons.css";

function RectBtn({ text }) {
  return (
    <button className="btn btn--rect btn--light-bg-dark-text">
      <a href="#" className="btn__link">
        {text}
      </a>
    </button>
  );
}

RectBtn.propTypes = {
  text: PropTypes.string.isRequired
};

function RoundBtn({ children }) {
  return <button className="btn btn--round btn--border">{children}</button>;
}

RoundBtn.propTypes = {
  children: PropTypes.element.isRequired
};

export { RectBtn, RoundBtn };
