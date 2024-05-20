import heartIcon from "./../assets/icons/heart-icon.svg";
import yagamiIcon from "./../assets/icons/Yagami-chibi-icon.png";
import hanakawaIcon from "./../assets/icons/Hanakawa-chibi-icon.png";
import sandersIcon from "./../assets/icons/Sanders-chibi-icon.png";
import streamPreviewImg from "./../assets/stream-preview.png";
import ytIconNoBorder from "./../assets/icons/yt-noborder.svg";
import posterGirl from "./../assets/poster-girl.png";
import pet from "./../assets/pet.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./HomeBanner.module.css";

gsap.registerPlugin(useGSAP);

const {
  banner,
  banner__character: bannerCharacter,
  banner__accessory: bannerAccessory,
  "sidebar-left": sidebarLeft,
  "sidebar-left__title": sidebarLeftTitle,
  "sidebar-left__options": sidebarLeftOptions,
  "fb-icon": FbIcon,
  "yt-icon": YtIcon,
  "x-icon": XIcon,
  "sidebar-right": sidebarRight,
  "card-c4r2": cardC4R2,
  card__list: cardList,
  "char-icon": charIcon,
  "card-c2r4": cardC2R4,
  timestamp,
  card__img: cardImg,
} = styles;

function LeftSidebar() {
  const gsapContainer = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo(
          "[data-ani='bounce']",
          { translateY: -100 },
          { translateY: 100, duration: 0.5, ease: "back.in" }
        )
        .fromTo(
          "[data-ani='bounce']",
          { translateY: 100 },
          { translateY: 0, duration: 0.5, ease: "circ.out" }
        )
        .fromTo(
          "[data-ani='expand']",
          { height: 0, opacity: 0, transformOrigin: "top center" },
          { height: "auto", opacity: 1, duration: 0.5 }
        );
    },
    { scope: gsapContainer }
  );

  return (
    <aside className={sidebarLeft} ref={gsapContainer}>
      <div className={sidebarLeftTitle} data-ani="bounce">
        <img src={heartIcon} alt="愛心圖標" />
      </div>
      <ul className={sidebarLeftOptions} data-ani="expand">
        <li>
          <a href="https://www.facebook.com/people/Vlive-Lab/100093708878400/">
            <div className={FbIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@VliveLab/about">
            <div className={YtIcon} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/VliveLab">
            <div className={XIcon} />
          </a>
        </li>
      </ul>
    </aside>
  );
}

function RightSidebar() {
  const gsapContainer = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo(
          "[data-ani='move-upper']",
          { opacity: 0, translateY: 200 },
          { opacity: 1, translateY: 0, duration: 0.8 }
        )
        .fromTo(
          "[data-ani='move-lower']",
          { opacity: 0, translateY: 200 },
          { opacity: 1, translateY: 0, duration: 0.8 }
        );
    },
    { scope: gsapContainer }
  );

  return (
    <aside className={sidebarRight} ref={gsapContainer}>
      {/* Upper card */}
      <div className={cardC4R2} data-ani="move-upper">
        <h3>事務所夥伴</h3>
        <ul className={cardList}>
          <li>
            <a href="https://twitter.com/nochedioslobo/">
              <img
                src={yagamiIcon}
                alt="夜神遂心 X 連結"
                className={charIcon}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hanakawa0516">
              <img
                src={hanakawaIcon}
                alt="花川夢姬 X 連結"
                className={charIcon}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/@GameSeasoning66">
              <img
                src={sandersIcon}
                alt="魔王桑德斯 X 連結"
                className={charIcon}
              />
            </a>
          </li>
        </ul>
      </div>
      {/* Lower card */}
      <a href="https://www.youtube.com/watch?v=iB12MUMJ1ps">
        <div className={cardC2R4} data-ani="move-lower">
          <div>
            <img
              src={streamPreviewImg}
              alt="直播預覽封面"
              className={cardImg}
            />
          </div>
          <div>
            <img src={ytIconNoBorder} alt="youtube圖標" />
            <h3>周年特別直播</h3>
            <p>快進入待機室一起倒數！</p>
            <span className={timestamp}>2024/5/2 8:00pm</span>
          </div>
        </div>
      </a>
    </aside>
  );
}

function HomeBanner() {
  const gsapContainer = useRef();
  const { contextSafe } = useGSAP({ scope: gsapContainer });

  useGSAP(() => {
    gsap.to("[data-ani='mouse-parallax']", {
      opacity: 1,
      x: 0,
      y: 0,
    });
  });

  const mouseParallax = contextSafe((e) => {
    gsap.to("[data-ani='mouse-parallax']", {
      x: (e.pageX / window.innerWidth - 0.5) * 20,
      y: (e.pageY / window.innerHeight - 0.5) * 20,
      delay: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  return (
    <section className={banner} ref={gsapContainer}>
      <img
        src={posterGirl}
        alt="海報人物"
        className={bannerCharacter}
        onMouseMove={mouseParallax}
        data-ani="mouse-parallax"
      />
      <img
        src={pet}
        alt="寵物"
        className={bannerAccessory}
        onMouseMove={mouseParallax}
        data-ani="mouse-parallax"
      />
      <LeftSidebar />
      <RightSidebar />
    </section>
  );
}

export default HomeBanner;
