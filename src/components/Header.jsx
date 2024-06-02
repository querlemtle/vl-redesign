import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { colorLogo } from "./../assets/images";
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
  cta__text: ctaText,
} = styles;

function Header() {
  const gsapContainer = useRef();
  const tl = useRef();

  const toggleMenu = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .add("start")
        .to(
          "[data-ani='rotate-down']",
          {
            translateY: "0.5rem",
            rotate: 45,
            duration: 0.1,
          },
          "start"
        )
        .to(
          "[data-ani='rotate-reverse']",
          { rotate: -45, duration: 0.1 },
          "start"
        )
        .to("[data-ani='hide']", { opacity: 0, duration: 0.1 }, "start")
        .fromTo("[data-ani='scroll']", { height: 0 }, { height: "auto" })
        .reverse();
    },
    { scope: gsapContainer }
  );

  return (
    <header className={header} ref={gsapContainer}>
      {/* Logo */}
      <div className={headerBrand}>
        <Link to="/">
          <img src={colorLogo} alt="Vlive Lab" />
          <p className={headerTitle}>未來實驗所</p>
        </Link>
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
        </ul>
        <a
          href="https://vtuberonline.com/"
          className={cta}
          target="_blank"
          rel="noreferrer"
        >
          <span className={ctaText}>VTuber Online</span>
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
        <div className={hamburgerBar} data-ani="rotate-down"></div>
        <div className={hamburgerBar} data-ani="rotate-reverse"></div>
        <div className={hamburgerBar} data-ani="hide"></div>
      </button>
    </header>
  );
}

export default Header;
