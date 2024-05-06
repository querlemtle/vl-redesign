import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import aboutTitle from "./../assets/about-title.svg";
import talentsTitle from "./../assets/talents-title.png";
import newsTitle from "./../assets/news-page-title.svg";
import shopTitle from "./../assets/shop-title.svg";
import leftArrow from "./../assets/icons/left-arrow.svg";
import rightArrow from "./../assets/icons/right-arrow.svg";
import HanaKawa from "./../assets/HanaKawa-notail-1.png";
import candle from "./../assets/candle.png";
import TalentCard from "../components/TalentCard";
import NewsCard from "./../components/NewsCard";
import ProductCard from "./../components/ProductCard";
import logo from "./../assets/Vlive-Lab-logo-white.svg";
import pentaFlowerDeco from "./../assets/icons/penta-flower-deco.svg";
import halfArrow from "./../assets/icons/half-arrow.svg";
import styles from "./Home.module.css";

const {
  section,
  "section--x-full": sectionXFull,
  "section--bg": sectionBg,
  "section--stretch": sectionStretch,
  "section__title-container": sectionTitleContainer,
  "section__title-container--stretch": sectionTitleContainerStretch,
  "section__title--border-bottom": sectionTitleBorderBottom,
  "section__subtitle-accent": sectionSubtitleAccent,
  "section__subtitle--start": sectionSubtitleStart,
  section__content: sectionContent,
  "section__horizonal-scrolling": sectionHorizontalScrolling,
  "section__content--light": sectionContentLight,
  "section__rect-bg": sectionRectBg,
  "hint-box": hintBox,
  "hint-box__title": hintBoxTitle,
  "hint-box__text": hintBoxText,
  "scrollers-container": scrollersContainer,
  logo__text: logoText,
  btn,
  "btn--end": btnEnd,
  "btn--rect": btnRect,
  "btn--light-bg-dark-text": btnLightBgDarkText,
} = styles;

function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About */}
      <section className={`${section} ${sectionXFull} ${sectionBg}`}>
        <h1>
          <img src={aboutTitle} alt="About" />
        </h1>
        <h3 className={`${sectionContent} ${sectionContentLight}`}>
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <a href="#" className={`${btn} ${btnRect} ${btnLightBgDarkText}`}>
          查看更多
        </a>
      </section>
      {/* Talents */}
      <section className={`${section} ${sectionXFull}`}>
        <div className={sectionRectBg}></div>
        <div className={sectionTitleContainer}>
          <h1>
            <img src={talentsTitle} alt="Talents" />
          </h1>
          <h2>
            <span className={sectionSubtitleAccent}>| Vlive Lab一期生 |</span>
            冥界SCP事務所
          </h2>
        </div>
        <div className="cols-3">
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
      </section>
      {/* News */}
      <section className={section}>
        <div className={sectionTitleContainer}>
          <h1>
            <img src={newsTitle} alt="News" />
          </h1>
          <h2>帶來有關VTUBER相關的新資訊與熱門話題討論</h2>
        </div>
        <div className="cols-2">
          <NewsCard id="1" />
          <NewsCard id="2" />
        </div>
        <Link to="/news" className={`${btn} ${btnEnd}`}>
          VIEW MORE <img src={rightArrow} alt="右箭頭" />
        </Link>
      </section>
      {/* Shop */}
      <section className={`${section} ${sectionStretch}`}>
        <div className={sectionTitleContainerStretch}>
          <h1 className={sectionTitleBorderBottom}>
            <img src={shopTitle} alt="Shop" />
          </h1>
          <h2 className={sectionSubtitleStart}>
            <span className={sectionSubtitleAccent}>| 周邊&寄賣 |</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h2>
          <div className={sectionHorizontalScrolling}>
            <Link to="/shop" className={hintBox}>
              <div>
                <img src={logo} alt="Vlive Lab" />
                <p className={logoText}>未來實驗所</p>
              </div>
              <div className={hintBoxTitle}>
                <img src={pentaFlowerDeco} alt="花瓣裝飾" />
                <h3>Online Shop</h3>
                <img src={pentaFlowerDeco} alt="花瓣裝飾" />
              </div>
              <div className={hintBoxText}>
                前往商店 <img src={halfArrow} alt="箭頭" />
              </div>
            </Link>
            <ProductCard
              id="1"
              productImg={candle}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={candle}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={candle}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={candle}
              productName="香氛蠟燭70ml"
            />
          </div>
          <div className={scrollersContainer}>
            <img src={leftArrow} alt="左箭頭" />
            <img src={rightArrow} alt="右箭頭" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
