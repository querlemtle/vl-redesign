import logo from "./../assets/Vlive-Lab-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Vlive Lab logo" className="header__img" />
        <p className="header__title">未來實驗室</p>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Talent
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Shop
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              News
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="header__cta">JOIN US</button>
    </header>
  );
}

export default Header;
