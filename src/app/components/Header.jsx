"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const [closed, setClosed] = useState(true);
  const router = useRouter();
  const toggleMenu = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useEffect(() => {
    setClosed(!closed);
    console.log("route change with dependency", router.pathname);
  }, [router]);

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
        <Link href="/">
          <img src="/Vlive-Lab-logo.svg" alt="Vlive Lab" />
          <p className={headerTitle}>未來實驗所</p>
        </Link>
      </div>
      <nav className={nav} data-ani="scroll">
        <ul className={navList}>
          <li>
            <Link href="/about" className={navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/talent" className={navLink}>
              Talent
            </Link>
          </li>
          <li>
            <Link href="/shop" className={navLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/news" className={navLink}>
              News
            </Link>
          </li>
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
