import PropTypes from "prop-types";
import styles from "./Talent.module.css";
import {
  talentVid,
  sandersBg,
  hanakawaBg,
  sandersPortrait,
  hanakawaPortrait,
  sandersLogo,
  hanakawaLogo,
  flowersDeco,
} from "../assets/images";
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

function IconLinks({ ytLink, fbLink, xLink, size, color }) {
  return (
    <div className={links}>
      <a href={ytLink} className={linkIcon}>
        <YtIcon size={size} lineFill={color} />
      </a>
      <a href={fbLink} className={linkIcon}>
        <FbIcon size={size} lineFill={color} />
      </a>
      <a href={xLink} className={linkIcon}>
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

function CharBio({
  bgUrl,
  portraitUrl,
  logoUrl,
  charIntro,
  textColor,
  isPortraitAtRight,
  timestamp,
  ytLink,
  fbLink,
  xLink,
}) {
  const gsapContainer = useRef();
  const { contextSafe } = useGSAP({ scope: gsapContainer });

  // 滑鼠移動視差
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
        <img
          src={flowersDeco}
          alt="flowers"
          className={cardImgBg}
        />
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
          &#9632; 初配信時間： <span>{timestamp}</span>
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
  timestamp: PropTypes.string.isRequired,
  ytLink: PropTypes.string.isRequired,
  fbLink: PropTypes.string.isRequired,
  xLink: PropTypes.string.isRequired,
};

export default function Talent() {
  const container = useRef();

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
        <video muted autoPlay loop src={talentVid} className={mask} />
        <h3 className={textStacking}>
          以SCP基金會的世界觀為基礎，在該虛構宇宙中，SCP基金會是
          一個跨國秘密組織，負責搜尋並收容各種具有異常屬性的個體、
          地點或物體。VTuber們將會探索和解析不尋常的事件和對象。
          在直播中進行各種研究、調查活動，並分享新的發現和冒險。
        </h3>
      </section>
      <CharBio
        bgUrl={sandersBg}
        portraitUrl={sandersPortrait}
        logoUrl={sandersLogo}
        charIntro="桑德斯是一位遊戲開發者，長期在遊戲業不得志。某次他熱心地替別的專案幫忙，卻反遭設局陷害，這對他造成巨大的打擊，他的陰暗人格「桑德斯·闇」就此誕生。這個人格是一個想要毀滅世界的魔王，他曾經因此想過要引爆地心，甚至是毀滅太陽，看人類在絕望中滅亡…"
        textColor="#fff"
        isPortraitAtRight={false}
        timestamp="2023/7/16 7:00PM"
        ytLink="https://www.youtube.com/@GameSeasoning"
        fbLink="https://www.facebook.com/GameSeasoning/"
        xLink="https://twitter.com/GameSeasoning66"
      />
      <CharBio
        bgUrl={hanakawaBg}
        portraitUrl={hanakawaPortrait}
        logoUrl={hanakawaLogo}
        charIntro="從忘川-彼岸花剛解除封印的冥界魔龍，因為剛解除封印所以沒什麼力量，除了外表長得像魔龍，其他能力都和普通少女差不多。有使用冥界夢境的能力(產生夢境迷霧直播連線)，每天都在夢境直播中跟在世的人託夢，也常常被託夢說刮刮樂或抽獎會中獎，常被認識的說抽卡歐皇。"
        textColor="#112e44"
        isPortraitAtRight={true}
        timestamp="2023/10/10 7:00PM"
        ytLink="https://www.youtube.com/@hanakawa0516"
        fbLink="https://www.facebook.com/profile.php?id=100094968534135"
        xLink="https://twitter.com/hanakawa0516"
      />
    </>
  );
}
