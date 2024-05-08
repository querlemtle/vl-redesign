import styles from "./Talent.module.css";
import talentVid from "./../assets/talent-video-banner.mp4";

const {
  banner,
  banner__title: bannerTitle,
  banner__subtitle: bannerSubtitle,
  "bg-black": bgBlack,
  mask,
  "text-white": textWhite
} = styles;

export default function Talent() {
  return (
    <>
      <section className={banner}>
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
        <h3 className={textWhite}>
          以SCP基金會的世界觀為基礎，在該虛構宇宙中，SCP基金會是
          一個跨國秘密組織，負責搜尋並收容各種具有異常屬性的個體、
          地點或物體。VTuber們將會探索和解析不尋常的事件和對象。
          在直播中進行各種研究、調查活動，並分享新的發現和冒險。
        </h3>
      </section>
    </>
  );
}
