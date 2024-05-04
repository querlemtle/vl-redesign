import { Link } from "react-router-dom";
import logo from "./../assets/Vlive-Lab-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/">
          <img src={logo} alt="Vlive Lab" />
          <p className="header__title">未來實驗所</p>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <Link to="/talent" className="header__link">
              Talent
            </Link>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Shop
            </a>
          </li>
          <li className="header__item">
            <Link to="/news" className="header__link">
              News
            </Link>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        className="header__btn header__btn--fill header__link header__link--contrast"
      >
        JOIN US
      </a>
    </header>
  );
}

export default Header;
