import {
  redPen,
  heartDoodle1,
  heartDoodle2,
  phone,
  blackPen,
  wire,
  midPoster,
  leftPoster,
  rightPoster,
  cardBg1,
  cardBg2,
  cardBg3,
} from "../assets/images";
import { Link } from "react-router-dom";
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
  "stack-right": stackRight,
  "cols-3": cols3,
  card,
  card__link: cardLink,
  card__body: cardBody,
  card__title: cardTitle,
  card__content: cardContent,
} = styles;

const cardData = [
  {
    title: "先進技術領域",
    content: "MMORPG、XR與Gamefi技術",
    bg: cardBg1,
    link: {
      url: "https://www.youtube.com/watch?v=8mJ3K5pXyas",
      isExternal: true,
    },
  },
  {
    title: "專業營銷分析",
    content: "話題趨勢、產業情報、幫助台V深入瞭解市場環境",
    bg: cardBg2,
    link: {
      url: "/news",
      isExternal: false,
    },
  },
  {
    title: "與VTuber零距離",
    content: "VTuber本人管理社群，與粉絲互動、回覆留言、分享生活",
    bg: cardBg3,
    link: {
      url: "https://discord.com/invite/ECAdMaTNjT",
      isExternal: true,
    },
  },
];

function Card({ title, content, bg, link, isLinkExternal }) {
  return (
    <div className={card} style={{ background: `url(${bg})` }}>
      {/* 需要以是否為外部連結條件式渲染 <Link> 或 <a>，故讓其為獨立元素，透過 CSS 擴大可點擊區域至與父層同大小 */}
      {isLinkExternal ? (
        <a href={link} className={cardLink}></a>
      ) : (
        <Link to={link} className={cardLink}></Link>
      )}
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
};

export default function About() {
  const gsapUpperContainer = useRef();
  const gsapMidContainer = useRef();

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
      gsap.from("[data-ani='fade-in']", {
        opacity: 0,
        translateY: 100,
        duration: 1,
      });
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
      <section className={kv} ref={gsapUpperContainer}>
        <h1 className={kvTitle}>探索虛擬世界的無限可能性</h1>
        <h3 className={kvContext}>
          Vlive Lab 是為了研究 VTuber 領域的未來，
          而誕生的合作型Vtuber實驗型事務所。
        </h3>
        {/* 左邊區塊 */}
        <img src={redPen} alt="紅筆" className={kvImgLt} data-ani="rotate" />
        <img src={phone} alt="手機" className={kvImgLm} data-ani="fade-in" />
        <img
          src={heartDoodle1}
          alt="愛心塗鴉1"
          className={kvImgLb}
          data-ani="fade-in"
        />
        {/* 右邊區塊 */}
        <img
          src={blackPen}
          alt="黑筆"
          className={kvImgRt}
          data-ani="rotate-reverse"
        />
        <img
          src={heartDoodle2}
          alt="愛心塗鴉2"
          className={kvImgRm}
          data-ani="fade-in"
        />
        <img src={wire} alt="線" className={kvImgRb} data-ani="fade-in" />
      </section>
      {/* 成立宗旨 */}
      <section
        className={`${section} ${bgImg} ${bgImgLight}`}
        ref={gsapMidContainer}
      >
        <div className={colsStacking}>
          <img
            src={leftPoster}
            alt="桑德斯海報"
            className={stackLeft}
            data-ani="rotate"
          />
          <img src={midPoster} alt="手機合照" className={stackMid} />
          <img
            src={rightPoster}
            alt="夢姬海報"
            className={stackRight}
            data-ani="rotate"
          />
        </div>
        <p className={slogan}>
          在這裡，我們更加重視合作夥伴、營銷分析及創新科技產品，
          為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，
          Vtuber是我們的第一小步，也是最重要的一大步。
          你努力的未來有沒有你，我們覺得很重要。
        </p>
      </section>
      {/* 服務項目 */}
      <section className={`${section} ${bgImg} ${bgImgDark}`}>
        <h3 className={sectionTitle}>Features</h3>
        <div className={cols3}>
          {cardData.map((item, i) => {
            return (
              <Card
                title={item.title}
                content={item.content}
                bg={item.bg}
                link={item.link.url}
                isLinkExternal={item.link.isExternal}
                key={i}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
