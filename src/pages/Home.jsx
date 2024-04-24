import aboutTitle from "./../assets/about-title.png";
import heartIcon from "./../assets/heart-icon.png";
import talentsTitle from "./../assets/talents-title.png";
import newsTitle from "./../assets/news-title.png";
import shopTitle from "./../assets/shop-title.svg";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="section section--full"></section>
      <section className="section section--bg">
        <div className="section__title">
          <img src={aboutTitle} alt="About" className="section__title-text" />
          <img
            src={heartIcon}
            alt="heart-icon"
            className="section__title-icon"
          />
        </div>
        <h3 className="section__context section__context--stroke">
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <button className="section__btn section__btn--border">
          <a href="#" className="section__link">
            More
          </a>
        </button>
      </section>
      <section className="section">
        <div className="section__title">
          <img src={talentsTitle} alt="Talents" />
          <h2 className="section__subtitle">
            ｜Vlive Lab一期生｜冥界SCP事務所
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="section__title">
          <img src={newsTitle} alt="News" />
          <h2 className="section__subtitle">
            帶來有關VTUBER相關的新資訊與熱門話題討論
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="section__title">
          <img src={shopTitle} alt="Shop" />
          <h2 className="section__subtitle">
            ｜周邊&寄賣｜我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h2>
        </div>
      </section>
    </>
  );
}

export default Home;
