import aboutTitle from "./../assets/about-title.svg";
import talentsTitle from "./../assets/talents-title.png";
import newsTitle from "./../assets/news-page-title.svg";
import shopTitle from "./../assets/shop-title.svg";
import leftArrow from "./../assets/left-arrow.svg";
import rightArrow from "./../assets/right-arrow.svg";
import HanaKawa from "./../assets/HanaKawa-notail-1.png";
import candle from "./../assets/candle.png";
import TalentCard from "../components/TalentCard";
import { RectBtn, RoundBtn } from "../components/Buttons";
import NewsCard from "./../components/NewsCard";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="section section--full-y"></section>
      <section className="section section--full-x section--bg">
        <h1 className="section__title">
          <img src={aboutTitle} alt="About" />
        </h1>
        <h3 className="section__content section__content--light">
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <RectBtn text="查看更多" />
      </section>
      <section className="section">
        <div className="section__title-container">
          <h1 className="section__title">
            <img src={talentsTitle} alt="Talents" />
          </h1>
          <h2 className="section__subtitle">
            <span className="section__subtitle-accent">
              | Vlive Lab一期生 |
            </span>
            冥界SCP事務所
          </h2>
        </div>
        <div className="section__cols-3">
          <div className="section__rect-bg"></div>
          <TalentCard
            charImg={HanaKawa}
            name="花川夢姬"
            description={
              "從忘川-彼岸花剛解除封印的冥界魔龍，因為剛解除封印所以沒什麼力量，除了外表長得像魔龍，其他能力都和普通少女差不多。有使用冥界夢境的能力(產生夢境迷霧直播連線)，每天都在夢境直播中跟在世的人託夢，也常常被託夢說刮刮樂會中獎或抽抽會中，常被認識的說抽卡歐皇。"
            }
          />
          <TalentCard
            charImg={HanaKawa}
            name="花川夢姬"
            description={
              "從忘川-彼岸花剛解除封印的冥界魔龍，因為剛解除封印所以沒什麼力量，除了外表長得像魔龍，其他能力都和普通少女差不多。有使用冥界夢境的能力(產生夢境迷霧直播連線)，每天都在夢境直播中跟在世的人託夢，也常常被託夢說刮刮樂會中獎或抽抽會中，常被認識的說抽卡歐皇。"
            }
          />
          <TalentCard
            charImg={HanaKawa}
            name="花川夢姬"
            description={
              "從忘川-彼岸花剛解除封印的冥界魔龍，因為剛解除封印所以沒什麼力量，除了外表長得像魔龍，其他能力都和普通少女差不多。有使用冥界夢境的能力(產生夢境迷霧直播連線)，每天都在夢境直播中跟在世的人託夢，也常常被託夢說刮刮樂會中獎或抽抽會中，常被認識的說抽卡歐皇。"
            }
          />
        </div>
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
        <div className="section__cols-2">
          <NewsCard />
          <NewsCard />
        </div>
      </section>
      <section className="section section--stretch">
        <div className="section__title-container section__title-container--stretch">
          <h1 className="section__title section__title--left section__title--border-bottom">
            <img src={shopTitle} alt="Shop" />
          </h1>
          <h2 className="section__subtitle section__subtitle--start">
            <span className="section__subtitle-accent">| 周邊&寄賣 |</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h2>
          <div className="section__horizonal-scrolling">
            <div className="hint-box">
              <h3 className="hint-box__title">點擊前往商店頁面</h3>
              <a href="#" className="hint-box__link">
                VIEW MORE
                <div className="hint-box__icon">
                  <RoundBtn>
                    <img src={rightArrow} alt="向右滑動按鈕" />
                  </RoundBtn>
                </div>
              </a>
            </div>
            <ProductCard productImg={candle} productName="香氛蠟燭70ml" />
            <ProductCard productImg={candle} productName="香氛蠟燭70ml" />
          </div>
          <div className="section__scrollers-container">
            <RoundBtn>
              <img src={leftArrow} alt="向左滑動按鈕" />
            </RoundBtn>
            <RoundBtn>
              <img src={rightArrow} alt="向右滑動按鈕" />
            </RoundBtn>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
