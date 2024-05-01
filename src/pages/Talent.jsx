import styles from "./Talent.module.css";

const {
  banner,
  banner__title: bannerTitle,
  banner__subtitle: bannerSubtitle,
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
    </>
  );
}
