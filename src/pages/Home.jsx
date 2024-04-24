import aboutTitle from "./../assets/about-title.png";
import heartIcon from "./../assets/heart-icon.png";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="section"></section>
      <section className="section section--bg">
        <div className="section__title">
          <img src={aboutTitle} alt="About" />
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <h3 className="section__context section__context--stroke">
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <button>More</button>
      </section>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
    </>
  );
}

export default Home;
