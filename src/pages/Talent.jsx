import PropTypes from "prop-types";
import styles from "./Talent.module.css";
import { flowersDeco } from "../assets/images";
import talentsData from "./../data/talentsData";
import { formatDateLong } from "./../utils/formatDate";
import { FbIcon, XIcon, YtIcon } from "../components/IconSvgs";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const {
  banner,
  banner__title: bannerTitle,
  banner__subtitle: bannerSubtitle,
  "bg-black": bgBlack,
  mask,
  "text-stacking": textStacking,
  "bg-DoF": bgDoF,
  card,
  card__img: cardImg,
  "card__img-bg": cardImgBg,
  "card__img-portrait": cardImgPortrait,
  "card__img--right": cardImgRight,
  card__body: cardBody,
  card__context: cardContext,
  links,
  link__icon: linkIcon,
} = styles;

/** IconLinks - 社群媒體連結 */
function IconLinks({ ytLink, fbLink, xLink, size, color }) {
  return (
    <div className={links}>
      <a href={ytLink} target="_blank" rel="noreferrer" className={linkIcon}>
        <YtIcon size={size} lineFill={color} />
      </a>
      <a href={fbLink} target="_blank" rel="noreferrer" className={linkIcon}>
        <FbIcon size={size} lineFill={color} />
      </a>
      <a href={xLink} target="_blank" rel="noreferrer" className={linkIcon}>
        <XIcon size={size} lineFill={color} />
      </a>
    </div>
  );
}

IconLinks.propTypes = {
  ytLink: PropTypes.string.isRequired,
  fbLink: PropTypes.string.isRequired,
  xLink: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

/** CharBio - 角色介紹卡片 */
function CharBio({
  bgUrl,
  portraitUrl,
  logoUrl,
  charIntro,
  textColor,
  isPortraitAtRight,
  debutDate,
  ytLink,
  fbLink,
  xLink,
}) {
  const gsapContainer = useRef();
  const { contextSafe } = useGSAP({ scope: gsapContainer });

  /** mouseParallax - 滑鼠移動視差 */
  const mouseParallax = contextSafe((e) => {
    gsap.to("[data-ani='mouse-parallax']", {
      x: (e.pageX / window.innerWidth - 0.5) * 50,
      y: (e.pageY / window.innerHeight - 0.5) * 50,
      delay: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  return (
    <section
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={`${bgDoF} ${card}`}
      ref={gsapContainer}
    >
      {/* 角色圖 */}
      <div className={`${cardImg} ${isPortraitAtRight && cardImgRight}`}>
        <img src={flowersDeco} alt="flowers" className={cardImgBg} />
        <img
          src={portraitUrl}
          alt="portrait"
          className={cardImgPortrait}
          onMouseMove={mouseParallax}
          data-ani="mouse-parallax"
        />
      </div>
      {/* 角色介紹 */}
      <div style={{ color: textColor }} className={cardBody}>
        <img src={logoUrl} alt="logo" />
        <p className={cardContext}>{charIntro}</p>
        <p>
          &#9632; 初配信時間： <span>{debutDate}</span>
        </p>
        <div>
          <IconLinks
            ytLink={ytLink}
            fbLink={fbLink}
            xLink={xLink}
            size={72}
            color={textColor}
          />
        </div>
      </div>
    </section>
  );
}

CharBio.propTypes = {
  bgUrl: PropTypes.string.isRequired,
  portraitUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  charIntro: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  isPortraitAtRight: PropTypes.bool.isRequired,
  debutDate: PropTypes.string.isRequired,
  ytLink: PropTypes.string.isRequired,
  fbLink: PropTypes.string.isRequired,
  xLink: PropTypes.string.isRequired,
};

export default function Talent() {
  const container = useRef();
  // 只顯示前兩位藝人資料（因為第三位資料不全）
  const talents = talentsData.filter((talent, i) => {
    return i <= 1;
  });

  useGSAP(() => {
    gsap.to("[data-ani='clip']", {
      scrollTrigger: {
        trigger: "[data-ani='clip']",
        start: "start 10%",
        toggleActions: "play pause reverse reverse",
      },
      clipPath: "inset(1.5% round 5%)",
    });
  });

  return (
    <>
      <section className={banner} ref={container} data-ani="clip">
        <h1 className={bannerTitle}>冥界 SCP 事務所</h1>
        <h2 className={bannerSubtitle}>
          魔王、魔龍、狼執事
          <br />
          的事務所初探
        </h2>
      </section>
      {/* Video bg */}
      <section className={bgBlack}>
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/dsme7klzf/video/upload/v1716799221/ms7izc59qiucjra2xrto.mp4"
          className={mask}
        />
        <h3 className={textStacking}>
          以SCP基金會的世界觀為基礎，在該虛構宇宙中，SCP基金會是一個跨國秘密組織，負責搜尋並收容各種具有異常屬性的個體、地點或物體。VTuber們將會探索和解析不尋常的事件和對象。
          在直播中進行各種研究、調查活動，並分享新的發現和冒險。
        </h3>
      </section>
      {talents.map((talent, i) => {
        return (
          <CharBio
            key={talent.talentId}
            bgUrl={talent.images.bg}
            portraitUrl={talent.images.portrait}
            logoUrl={talent.images.logo}
            textColor={talent.color}
            // index 為偶數 => portrait @left，奇數 => portrait @right
            isPortraitAtRight={i % 2 === 0 ? false : true}
            charIntro={talent.description}
            debutDate={formatDateLong(talent.debutDate)}
            ytLink={talent.bioLinks.yt}
            fbLink={talent.bioLinks.fb}
            xLink={talent.bioLinks.x}
          />
        );
      })}
    </>
  );
}
