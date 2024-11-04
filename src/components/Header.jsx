"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PropTypes from "prop-types";
import useMediaQuery from "@/lib/useMediaQuery";
import useActiveNav from "@/lib/useActiveNav";
import styles from "./Header.module.css";

const {
  header,
  header__brand: headerBrand,
  header__title: headerTitle,
  hamburger,
  hamburger__bar: hamburgerBar,
  "hamburger__bar--cw": hamburgerBarCw,
  "hamburger__bar--acw": hamburgerBarAcw,
  "hamburger__bar--hide": hamburgerBarHide,
  nav,
  "nav--active": navActive,
  nav__list: navList,
  nav__link: navLink,
  "nav__link--active": navLinkActive,
  cta,
  cta__text: ctaText,
} = styles;

const linkList = [
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/talent",
    text: "Talent",
  },
  {
    href: "/shop",
    text: "Shop",
  },
  {
    href: "/news?page=1",
    text: "News",
  },
];

function NavLink({ href, text, checkActiveNav }) {
  return (
    <li>
      <Link
        href={href}
        className={`${navLink} ${checkActiveNav(href) ? navLinkActive : ""}`}
      >
        {text}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checkActiveNav: PropTypes.func.isRequired,
};

function Header() {
  const isMobile = useMediaQuery("(width < 1024px)");
  const [isMenuActive, setIsMenuActive] = useState(!isMobile);
  const pathname = usePathname();
  const checkActiveNav = useActiveNav();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // 手機版換頁時關閉選單
  useEffect(() => {
    setIsMenuActive(!isMobile);
  }, [pathname]);

  return (
    <header className={header}>
      {/* Logo */}
      <div className={headerBrand}>
        <Link href="/">
          <img src="/Vlive-Lab-logo.svg" alt="Vlive Lab" />
          <p className={headerTitle}>未來實驗所</p>
        </Link>
      </div>
      {isMenuActive && (
        <nav className={`${nav} ${isMenuActive && navActive}`}>
          <ul className={navList}>
            {linkList.map((link, i) => (
              <NavLink
                checkActiveNav={checkActiveNav}
                href={link.href}
                text={link.text}
                key={i}
              />
            ))}
          </ul>
          <Link
            href="https://vtuberonline.com/"
            className={cta}
            target="_blank"
            rel="noreferrer"
          >
            <span className={ctaText}>VTuber Online</span>
          </Link>
        </nav>
      )}
      <button
        type="button"
        className={hamburger}
        aria-label="menu"
        aria-controls="navigation"
        tabIndex={0}
        onClick={toggleMenu}
      >
        <div
          className={`${hamburgerBar} ${isMenuActive && hamburgerBarCw}`}
        ></div>
        <div
          className={`${hamburgerBar} ${isMenuActive && hamburgerBarAcw}`}
        ></div>
        <div
          className={`${hamburgerBar} ${isMenuActive && hamburgerBarHide}`}
        ></div>
      </button>
    </header>
  );
}

export default Header;
