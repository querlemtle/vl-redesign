import {
  heartIcon,
  yagamiIcon,
  hanakawaIcon,
  sandersIcon,
  pet,
  streamPreviewImg,
  ytIconNoBorder,
} from "./../assets/images";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./HomeBanner.module.css";

gsap.registerPlugin(useGSAP);

const {
  banner,
  banner__bg: bannerBg,
  banner__accessory: bannerAccessory,
  "sidebar-left": sidebarLeft,
  "sidebar-left__title": sidebarLeftTitle,
  "sidebar-left__options": sidebarLeftOptions,
  "fb-icon": FbIcon,
  "yt-icon": YtIcon,
  "x-icon": XIcon,
  "sidebar-right": sidebarRight,
  "card-upper": cardUpper,
  card__title: cardTitle,
  card__list: cardList,
  "char-icon": charIcon,
  "card-lower": cardLower,
  timestamp,
  card__img: cardImg,
} = styles;

/** talentsLink - 藝人連結與圖示 */
const talentsLink = [
  {
    url: "https://twitter.com/nochedioslobo/",
    icon: yagamiIcon,
    name: "夜神遂心",
  },
  {
    url: "https://twitter.com/hanakawa0516",
    icon: hanakawaIcon,
    name: "花川夢姬",
  },
  {
    url: "https://twitter.com/@GameSeasoning66",
    icon: sandersIcon,
    name: "魔王桑德斯",
  },
];

/** brandLinks - 事務所相關社群連結 */
const brandLinks = [
  {
    url: "https://www.facebook.com/people/Vlive-Lab/100093708878400/",
    icon: FbIcon,
  },
  {
    url: "https://www.youtube.com/@VliveLab/about",
    icon: YtIcon,
  },
  {
    url: "https://twitter.com/VliveLab",
    icon: XIcon,
  },
];

/** 左側邊欄 */
function LeftSidebar() {
  const gsapContainer = useRef();
  const tl = useRef();

  /** 左側動畫序列 */
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
        {brandLinks.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <div className={link.icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

/** 右側邊欄 */
function RightSidebar() {
  const gsapContainer = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo(
          "[data-ani='move-upper']",
          { translateY: 200, scale: 0 },
          { translateY: 0, scale: 1, duration: 0.8 }
        )
        .fromTo(
          "[data-ani='move-lower']",
          { translateY: 200, scale: 0 },
          { translateY: 0, scale: 1, duration: 0.8 }
        );
    },
    { scope: gsapContainer }
  );

  return (
    <aside className={sidebarRight} ref={gsapContainer}>
      {/* Upper card */}
      <div className={cardUpper} data-ani="move-upper">
        <h3 className={cardTitle}>事務所夥伴</h3>
        <ul className={cardList}>
          {talentsLink.map((talent) => {
            return (
              <li key={talent.name}>
                <a href={talent.url} target="_blank" rel="noreferrer">
                  <img
                    src={talent.icon}
                    alt={`${talent.name} X 連結`}
                    className={charIcon}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Lower card */}
      <a
        href="https://www.youtube.com/watch?v=iB12MUMJ1ps"
        target="_blank"
        rel="noreferrer"
      >
        <div className={cardLower} data-ani="move-lower">
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

  /** 動畫：進入畫面 */
  useGSAP(() => {
    gsap.to("[data-ani~='move-in']", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.9,
    });
  });

  /** 滑鼠移動視差 */
  const mouseParallax = contextSafe((e) => {
    gsap.to("[data-ani~='mouse-parallax']", {
      x: (e.pageX / window.innerWidth - 0.5) * 100,
      y: (e.pageY / window.innerHeight - 0.5) * 100,
      delay: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  return (
    <section className={banner} ref={gsapContainer}>
      <video
        muted
        autoPlay
        loop
        src="https://res.cloudinary.com/dsme7klzf/video/upload/v1716911786/s6dsepyl8zikmdcfwjak.mp4"
        alt="背景"
        preload="auto"
        className={bannerBg}
      />
      <img
        src={pet}
        alt="寵物"
        className={bannerAccessory}
        data-ani="move-in mouse-parallax"
        onMouseMove={mouseParallax}
      />
      <LeftSidebar />
      <RightSidebar />
    </section>
  );
}

export default HomeBanner;
