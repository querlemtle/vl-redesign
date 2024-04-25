import aboutTitle from "./../assets/about-title.svg";
import talentsTitle from "./../assets/talents-title.png";
import newsTitle from "./../assets/news-title.png";
import shopTitle from "./../assets/shop-title.svg";
import cellphone from "./../assets/cellphone-outline-clip.png";
import Hanakawa from "./../assets/Hanakawa-notail-1.png";
import Placeholder from "./../assets/placeholder-img.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="section section--full-y"></section>
      <section className="section section--full-x section--bg">
        <div className="section__title">
          <img src={aboutTitle} alt="About" />
        </div>
        <h3 className="section__context section__context--light">
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
        <div className="section__title-container">
          <h1 className="section__title">
            <img src={talentsTitle} alt="Talents" />
          </h1>
          <h2 className="section__subtitle">
            <span className="section__subtitle--accent">
              | Vlive Lab一期生 |
            </span>
            冥界SCP事務所
          </h2>
        </div>
        <ul className="section__cols-3">
          <li className="section__card">
            <a href="#">
              <img src={cellphone} alt="手機框" />
            </a>
          </li>
          <li className="section__card">
            <a href="#">
              <img src={cellphone} alt="手機框" />
            </a>
          </li>
          <li className="section__card">
            <a href="#">
              <img src={cellphone} alt="手機框" />
            </a>
          </li>
        </ul>
        <ul className="controller">
          <li className="controller__indicator"></li>
          <li className="controller__indicator"></li>
          <li className="controller__indicator"></li>
        </ul>
      </section>
      <section className="section">
        <div className="section__title-container">
          <h1 className="section__title">
            <img src={newsTitle} alt="News" />
          </h1>
          <h2 className="section__subtitle">
            帶來有關VTUBER相關的新資訊與熱門話題討論
          </h2>
        </div>
        <div className="section__card">
          <img src={Placeholder} alt="" className="section__img" />
          <div className="card__title-container">
            <span className="card__tag">分類標籤</span>
            <h3 className="card__title">
              文章標題預留十八個字文章標題預留十八
            </h3>
          </div>
          <div className="card__context">
            文章內文預覽預留一排文章內文預覽預留一排文章內文預覽預文章
          </div>
          <span>文章發布於 2024 / 04 / 22 </span>
        </div>
      </section>
      <section className="section section--full-x">
        <div className="section__title-container">
          <h1 className="section__title section__title--left section__title--border-bottom">
            <img src={shopTitle} alt="Shop" />
          </h1>
          <h2 className="section__subtitle">
            <span className="section__subtitle--accent">| 周邊&寄賣 |</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h2>
        </div>
      </section>
    </>
  );
}

export default Home;
