import PropTypes from "prop-types";
import "./Buttons.css";

function RectBtn({ text }) {
  return (
    <a href="#" className="btn btn--rect btn--light-bg-dark-text">
      {text}
    </a>
  );
}

RectBtn.propTypes = {
  text: PropTypes.string.isRequired
};

function RoundBtn({ children }) {
  return <button type="button" className="btn btn--round btn--border">{children}</button>;
}

RoundBtn.propTypes = {
  children: PropTypes.element.isRequired
};

export { RectBtn, RoundBtn };
