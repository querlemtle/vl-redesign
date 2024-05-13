import heartIcon from "./../assets/icons/heart-icon.svg";
import bellIcon from "./../assets/icons/bell.svg";
import yagamiIcon from "./../assets/icons/Yagami-chibi-icon.png";
import hanakawaIcon from "./../assets/icons/Hanakawa-chibi-icon.png";
import sandersIcon from "./../assets/icons/Sanders-chibi-icon.png";
import streamPreviewImg from "./../assets/stream-preview.png";
import YtIconNoBorder from "./../assets/icons/yt-noborder.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Banner.module.css";

gsap.registerPlugin(useGSAP);

const {
  banner,
  "sidebar-left": sidebarLeft,
  "sidebar-left__title": sidebarLeftTitle,
  "sidebar-left__options": sidebarLeftOptions,
  "fb-icon": FbIcon,
  "yt-icon": YtIcon,
  "x-icon": XIcon,
  "sidebar-right": sidebarRight,
  "card-c4r2": cardC4R2,
  "float-icon": floatIcon,
  card__list: cardList,
  "char-icon": charIcon,
  "card-c2r4": cardC2R4,
  timestamp,
  card__img: cardImg,
  card__btn: cardBtn,
} = styles;

function LeftSidebar() {
  const container = useRef();
  const tl = useRef();

  useGSAP(() => {
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
  });

  return (
    <aside className={sidebarLeft} ref={container}>
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
  const container = useRef();
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
    { scope: container }
  );

  return (
    <aside className={sidebarRight} ref={container}>
      {/* Upper card */}
      <div className={cardC4R2} data-ani="move-upper">
        <img
          src={bellIcon}
          alt="小鈴鐺"
          className={floatIcon}
          data-ani="drip"
        />
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
      <div className={cardC2R4} data-ani="move-lower">
        <div>
          <img src={streamPreviewImg} alt="直播預覽封面" className={cardImg} />
        </div>
        <div>
          <img src={YtIconNoBorder} alt="youtube圖標" />
          <h3>周年特別直播</h3>
          <p>快進入待機室一起倒數！</p>
          <span className={timestamp}>2024/5/2 8:00pm</span>
        </div>
        <a
          href="https://www.youtube.com/watch?v=iB12MUMJ1ps"
          className={cardBtn}
        >
          點我前往
        </a>
      </div>
    </aside>
  );
}

function Banner() {
  return (
    <section className={banner}>
      <LeftSidebar />
      <RightSidebar />
    </section>
  );
}

export default Banner;
