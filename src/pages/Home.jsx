import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import aboutTitle from "./../assets/about-title.svg";
import talentsTitle from "./../assets/talents-title.png";
import newsTitle from "./../assets/news-page-title.svg";
import shopTitle from "./../assets/shop-title.svg";
import { LeftArrow, RightArrow } from "../components/IconSvgs";
import HanaKawa from "./../assets/HanaKawa-notail-1.png";
import productImg from "./../assets/products/item_05.png";
import TalentCard from "../components/TalentCard";
import NewsCard from "./../components/NewsCard";
import ProductCard from "./../components/ProductCard";
import logo from "./../assets/Vlive-Lab-logo-white.svg";
import pentaFlowerDeco from "./../assets/icons/penta-flower-deco.svg";
import halfArrow from "./../assets/icons/half-arrow.svg";
import styles from "./Home.module.css";

const {
  section,
  "section-center": sectionCenter,
  "section-x-full": sectionXFull,
  "section-bg-img": sectionBgImg,
  "section-auto-cols": sectionAutoCols,
  "section--horizonal-scrolling": sectionHorizontalScrolling,
  "two-tones-bg": twoTonesBg,
  "title-container": titleContainer,
  "title-container--start": titleContainerStart,
  "title--border-bottom": titleBorderBottom,
  "subtitle-accent": subtileAccent,
  "link-white-bg-primary-text": linkWhiteBgPrimaryText,
  "text-white": textWhite,
  logo__text: logoText,
  "hori-scrolling__hintbox": horiScrollingHintbox,
  "hintbox__title": hintboxTitle,
  "hintbox__guide": hintboxGuide,
  btn,
  "btn--end": btnEnd,
} = styles;

function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About */}
      <section className={`${section} ${sectionXFull} ${sectionBgImg}`}>
        <h1>
          <img src={aboutTitle} alt="About" />
        </h1>
        <h3 className={textWhite}>
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <a href="#" className={linkWhiteBgPrimaryText}>
          查看更多
        </a>
      </section>
      {/* Talents */}
      <section className={`${section} ${sectionCenter}`}>
        <div className={twoTonesBg}></div>
        <div className={titleContainer}>
          <h1>
            <img src={talentsTitle} alt="Talents" />
          </h1>
          <h2>
            <span className={subtileAccent}>| Vlive Lab一期生 |</span>
            冥界SCP事務所
          </h2>
        </div>
        <div className={sectionAutoCols}>
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
      <section>
        <div className={titleContainer}>
          <h1>
            <img src={newsTitle} alt="News" />
          </h1>
          <h2>帶來有關VTUBER相關的新資訊與熱門話題討論</h2>
        </div>
        <div className={sectionAutoCols}>
          <NewsCard id="1" />
          <NewsCard id="2" />
        </div>
        <Link to="/news" className={`${btn} ${btnEnd}`}>
          VIEW MORE <RightArrow lineFill="#2d5993" />
        </Link>
      </section>
      {/* Shop */}
      <section>
        <div className={`${titleContainer} ${titleContainerStart}`}>
          <h1 className={titleBorderBottom}>
            <img src={shopTitle} alt="Shop" />
          </h1>
          <h2>
            <span className={subtileAccent}>| 周邊&寄賣 |</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h2>
          <div className={sectionHorizontalScrolling}>
            <Link to="/shop" className={horiScrollingHintbox}>
              <div>
                <img src={logo} alt="Vlive Lab" />
                <p className={logoText}>未來實驗所</p>
              </div>
              <div className={hintboxTitle}>
                <img src={pentaFlowerDeco} alt="花瓣裝飾" />
                <h3>Online Shop</h3>
                <img src={pentaFlowerDeco} alt="花瓣裝飾" />
              </div>
              <div className={hintboxGuide}>
                前往商店 <img src={halfArrow} alt="箭頭" />
              </div>
            </Link>
            <ProductCard
              id="1"
              productImg={productImg}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={productImg}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={productImg}
              productName="香氛蠟燭70ml"
            />
            <ProductCard
              id="1"
              productImg={productImg}
              productName="香氛蠟燭70ml"
            />
          </div>
          <div className={`${btn} ${btnEnd}`}>
            <LeftArrow lineFill="#2d5993" />
            <RightArrow lineFill="#2d5993" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
