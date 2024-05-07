import { Link } from "react-router-dom";
import logo from "./../assets/Vlive-Lab-logo.svg";
import styles from "./Header.module.css";

const {
  header,
  header__brand: headerBrand,
  header__title: headerTitle,
  header__list: headerList,
  header__link: headerLink,
  "header__link--contrast": headerLinkContrast,
} = styles;

function Header() {
  return (
    <header className={header}>
      <div className={headerBrand}>
        <Link to="/">
          <img src={logo} alt="Vlive Lab" />
          <p className={headerTitle}>未來實驗所</p>
        </Link>
      </div>
      <nav>
        <ul className={headerList}>
          <li>
            <a href="#" className={headerLink}>
              About
            </a>
          </li>
          <li>
            <Link to="/talent" className={headerLink}>
              Talent
            </Link>
          </li>
          <li>
            <Link to="/shop" className={headerLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/news" className={headerLink}>
              News
            </Link>
          </li>
          <li>
            <a href="#" className={headerLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        className={`${headerLink} ${headerLinkContrast}`}
      >
        JOIN US
      </a>
    </header>
  );
}

export default Header;
