import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logoImg from "./../assets/Vlive-Lab-logo.svg";
import ScrollToAnchor from "./../utils/ScrollToAnchor";
import styles from "./Header.module.css";

gsap.registerPlugin(useGSAP);

const {
  header,
  header__brand: headerBrand,
  header__title: headerTitle,
  hamburger,
  hamburger__bar: hamburgerBar,
  nav,
  nav__list: navList,
  nav__link: navLink,
  cta,
} = styles;

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const container = useRef();
  const tl = useRef();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo("[data-ani='scroll']", { height: 0 }, { height: "auto" })
        .reverse();
    },
    { scope: container }
  );

  return (
    <header className={header} ref={container}>
      {/* Logo */}
      <div className={headerBrand}>
        <NavLink to="/">
          <img src={logoImg} alt="Vlive Lab" />
          <p className={headerTitle}>未來實驗所</p>
        </NavLink>
      </div>
      <nav className={nav} data-ani="scroll">
        <ul className={navList}>
          <li>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/talent" className={navLink}>
              Talent
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={navLink}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={navLink}>
              News
            </NavLink>
          </li>
          <li>
            <ScrollToAnchor />
            <NavLink to="#footer" className={navLink}>
              Contact
            </NavLink>
          </li>
        </ul>
        <a href="https://vtuberonline.com/" className={cta}>
          VTuber Online
        </a>
      </nav>
      <button
        type="button"
        className={hamburger}
        aria-label="menu"
        aria-controls="navigation"
        tabIndex={0}
        onPointerDown={toggleMenu}
      >
        <div className={hamburgerBar}></div>
        <div className={hamburgerBar}></div>
        <div className={hamburgerBar}></div>
      </button>
    </header>
  );
}

export default Header;
