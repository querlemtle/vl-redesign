"use client";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const {
  section,
  kv,
  kv__title: kvTitle,
  kv__accent: kvAccent,
  kv__mark: kvMark,
  kv__context: kvContext,
  "kv__img--lt": kvImgLt,
  "kv__img--lm": kvImgLm,
  "kv__img--lb": kvImgLb,
  "kv__img--rt": kvImgRt,
  "kv__img--rm": kvImgRm,
  "kv__img--rb": kvImgRb,
  section__title: sectionTitle,
  "bg-img": bgImg,
  "bg-img--light": bgImgLight,
  "bg-img--dark": bgImgDark,
  slogan,
  "cols-stacking": colsStacking,
  "stack-left": stackLeft,
  "stack-mid": stackMid,
  "floating-heart": floatingHeart,
  "stack-right": stackRight,
  grid,
  card,
  card__link: cardLink,
  card__body: cardBody,
  card__title: cardTitle,
  card__content: cardContent,
  card__logo: cardLogo,
} = styles;

const cardData = [
  {
    title: "先進技術領域",
    content: "MMORPG、XR與Gamefi技術",
    bg: "/about/card-1.png",
    link: {
      url: "https://www.youtube.com/watch?v=8mJ3K5pXyas",
      isExternal: true,
    },
    hasLogo: true,
  },
  {
    title: "專業營銷分析",
    content: "話題趨勢、產業情報、幫助台V深入瞭解市場環境",
    bg: "/about/card-2.png",
    link: {
      url: "/news",
      isExternal: false,
    },
    hasLogo: false,
  },
  {
    title: "與VTuber零距離",
    content: "VTuber本人管理社群，與粉絲互動、回覆留言、分享生活",
    bg: "/about/card-3.png",
    link: {
      url: "https://discord.com/invite/ECAdMaTNjT",
      isExternal: true,
    },
    hasLogo: false,
  },
];

// Features
function Card({ title, content, bg, link, isLinkExternal, hasLogo }) {
  return (
    <div className={card} style={{ background: `center / cover url(${bg})` }}>
      {isLinkExternal ? (
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className={cardLink}
        ></Link>
      ) : (
        <Link href={link} className={cardLink}></Link>
      )}
      {hasLogo && <img src="" alt="youtube" className={cardLogo} />}
      <div className={cardBody}>
        <p className={cardContent}>{content}</p>
        <p className={cardTitle}>-{title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isLinkExternal: PropTypes.bool.isRequired,
  hasLogo: PropTypes.bool.isRequired,
};

export default function About() {
  const gsapUpperContainer = useRef();
  const gsapMidContainer = useRef();
  const { contextSafe } = useGSAP({ scope: gsapMidContainer });

  const showHeart = contextSafe((event) => {
    gsap.fromTo(
      "[data-ani='float-up']",
      {
        // 22px 為愛心圖案寬/高度的一半，讓圖案從滑鼠中間出現
        x: event.clientX - 22,
        y: event.clientY - 22,
        opacity: 1,
      },
      {
        x: event.clientX - 22,
        y: event.clientY - 22 - 50,
        opacity: 0,
        delay: 0.2,
        overwrite: "auto",
      }
    );
  });

  useGSAP(
    () => {
      gsap.from("[data-ani='rotate']", {
        rotate: 15,
        duration: 1,
      });
    },
    { scope: gsapUpperContainer }
  );

  useGSAP(
    () => {
      gsap.from("[data-ani='rotate-reverse']", {
        rotate: -15,
        duration: 1,
      });
    },
    { scope: gsapUpperContainer }
  );

  useGSAP(
    () => {
      gsap.from("[data-ani='slide-in']", {
        opacity: 0,
        translateY: 100,
        duration: 1,
      });
    },
    { scope: gsapUpperContainer }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-ani='fade-in']",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5 }
      );
    },
    { scope: gsapUpperContainer }
  );

  useGSAP(
    () => {
      gsap.from("[data-ani='rotate']", {
        rotate: 0,
        scrollTrigger: {
          trigger: "[data-ani='rotate']",
          scrub: 1,
        },
      });
    },
    { scope: gsapMidContainer }
  );

  return (
    <>
      {/* 事務所介紹 */}
      <section className={kv} ref={gsapUpperContainer} id="intro">
        <h1 className={kvTitle}>
          探索虛擬世界的
          <span className={kvAccent}>
            無限可能
            <img
              src="/about/mark-circle.png"
              alt="重點標記"
              className={kvMark}
              data-ani="fade-in"
            />
          </span>
          性
        </h1>
        <h3 className={kvContext}>
          Vlive Lab 是為了研究 VTuber 領域的未來，
          而誕生的合作型Vtuber實驗型事務所。
        </h3>
        {/* 左邊區塊 */}
        <img
          src="/about/red-pen.png"
          alt="紅筆"
          className={kvImgLt}
          data-ani="rotate"
        />
        <img
          src="/about/phone.png"
          alt="手機"
          className={kvImgLm}
          data-ani="slide-in"
        />
        <img
          src="/about/heart-doodle-1.png"
          alt="愛心塗鴉1"
          className={kvImgLb}
          data-ani="slide-in"
        />
        {/* 右邊區塊 */}
        <img
          src="/about/black-pen.png"
          alt="黑筆"
          className={kvImgRt}
          data-ani="rotate-reverse"
        />
        <img
          src="/about/heart-doodle-2.png"
          alt="愛心塗鴉2"
          className={kvImgRm}
          data-ani="slide-in"
        />
        <img
          src="/about/wire.png"
          alt="線"
          className={kvImgRb}
          data-ani="slide-in"
        />
      </section>
      {/* 成立宗旨 */}
      <section
        className={`${section} ${bgImg} ${bgImgLight}`}
        ref={gsapMidContainer}
        id="mission"
      >
        <div className={colsStacking}>
          <img
            src="/about/poster-sanders.png"
            alt="桑德斯海報"
            className={stackLeft}
            data-ani="rotate"
          />
          <div className={stackMid}>
            <img
              src="/icons/heart.svg"
              alt="愛心"
              className={floatingHeart}
              data-ani="float-up"
            />
            <img
              src="/about/group-cellphone.png"
              alt="手機合照"
              onClick={showHeart}
            />
          </div>
          <img
            src="/about/poster-hanakawa.png"
            alt="夢姬海報"
            className={stackRight}
            data-ani="rotate"
          />
        </div>
        <p className={slogan}>
          在這裡，我們更加重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          你努力的未來有沒有你，我們覺得很重要。
        </p>
      </section>
      {/* 服務項目 */}
      <section className={`${section} ${bgImg} ${bgImgDark}`} id="services">
        <h3 className={sectionTitle}>Features</h3>
        <div className={grid}>
          {cardData.map((item, i) => {
            return (
              <Card
                title={item.title}
                content={item.content}
                bg={item.bg}
                link={item.link.url}
                isLinkExternal={item.link.isExternal}
                hasLogo={item.hasLogo}
                key={i}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
