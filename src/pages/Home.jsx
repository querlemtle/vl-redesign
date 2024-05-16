import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import aboutTitle from "./../assets/about-title.svg";
import talentsTitle from "./../assets/talents-title.svg";
import newsTitle from "./../assets/news-page-title.svg";
import shopTitle from "./../assets/shop-title.svg";
import phoneHanakawa from "./../assets/phone-hanakawa.png";
import phoneSanders from "./../assets/phone-sanders.png";
import phoneYagami from "./../assets/phone-yagami.png";
import hanakawaLogo from "./../assets/talents/hanakawa-logo-light.png";
import sandersLogo from "./../assets/talents/sanders-logo-light.png";
import yagamiLogo from "./../assets/talents/Yagami-logo-light.png";
import candle from "./../assets/products/item_05.png";
import sticker from "./../assets/products/item_03.png";
import shirt from "./../assets/products/item_06.png";
import pin from "./../assets/products/item_04.png";
import TalentCard from "../components/TalentCard";
import NewsCard from "./../components/NewsCard";
import ProductCard from "./../components/ProductCard";
import LeftArrow from "./../assets/icons/left-arrow.svg";
import RightArrow from "./../assets/icons/right-arrow.svg";
import logo from "./../assets/Vlive-Lab-logo-white.svg";
import pentaFlowerDeco from "./../assets/icons/penta-flower-deco.svg";
import halfArrow from "./../assets/icons/half-arrow.svg";
import styles from "./Home.module.css";
import confetti1 from "./../assets/icons/confetti-1.svg";
import confetti2 from "./../assets/icons/confetti-2.svg";
import confetti3 from "./../assets/icons/confetti-3.svg";
import confetti4 from "./../assets/icons/confetti-4.svg";
import confetti5 from "./../assets/icons/confetti-5.svg";
import confetti6 from "./../assets/icons/confetti-6.svg";
import confetti7 from "./../assets/icons/confetti-7.svg";
import confetti8 from "./../assets/icons/confetti-8.svg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const {
  section,
  "section-x-full": sectionXFull,
  "section-bg-img": sectionBgImg,
  "section-auto-cols": sectionAutoCols,
  "section-cols-3": sectionCols3,
  deco,
  "deco--1": deco1,
  "deco--2": deco2,
  "deco--3": deco3,
  "deco--4": deco4,
  "deco--5": deco5,
  "deco--6": deco6,
  "deco--7": deco7,
  "deco--8": deco8,
  "section--horizonal-scrolling": sectionHorizontalScrolling,
  "two-tones-bg": twoTonesBg,
  "title-container": titleContainer,
  "title-container--right": titleContainerRight,
  "title--border-bottom": titleBorderBottom,
  "subtitle-accent": subtileAccent,
  "link-white-bg-primary-text": linkWhiteBgPrimaryText,
  statement,
  logo__text: logoText,
  "hori-scrolling__hintbox": horiScrollingHintbox,
  hintbox__title: hintboxTitle,
  hintbox__guide: hintboxGuide,
  btn,
  "btns-container--end": btnsContainerEnd,
} = styles;

function Home() {
  const scrollXContainer = useRef();

  const scrollLeft = (ref) => {
    ref.current.scrollLeft -= 100;
  };

  const scrollRight = (ref) => {
    ref.current.scrollLeft += 100;
  };

  const gsapContainer = useRef();

  const talentsData = [
    {
      charImg: phoneSanders,
      logo: sandersLogo,
      name: "桑德斯.闇",
    },
    {
      charImg: phoneHanakawa,
      logo: hanakawaLogo,
      name: "花川夢姬",
    },
    {
      charImg: phoneYagami,
      logo: yagamiLogo,
      name: "夜神遂心",
    },
  ];

  const products = [
    {
      id: "u9GwHz",
      name: "香氛蠟燭70ml",
      price: 200,
      img: candle,
    },
    {
      id: "ROh1oK",
      name: "胸章",
      price: 50,
      img: pin,
    },
    {
      id: "kwxsxr",
      name: "魔王Q貼",
      price: 100,
      img: sticker,
    },
    {
      id: "4CWkdu",
      name: "一期生T恤",
      price: 680,
      img: shirt,
    },
  ];

  useGSAP(
    () => {
      gsap.from("[data-ani='spread-out']", {
        top: "80%",
        left: "50%",
        scrollTrigger: {
          trigger: gsapContainer.current,
          start: "start bottom",
          toggleActions: "play pause pause reset",
        },
      });
    },
    { scope: gsapContainer }
  );

  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About */}
      <section className={`${section} ${sectionXFull} ${sectionBgImg}`}>
        <h1>
          <img src={aboutTitle} alt="About" />
        </h1>
        <h3 className={statement}>
          Vlive
          Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
          <br />
          你努力的未來有沒有你，我們覺得很重要。
        </h3>
        <Link to="/about" className={linkWhiteBgPrimaryText}>
          查看更多
        </Link>
      </section>
      {/* Talents */}
      <section className={section} ref={gsapContainer}>
        <div className={twoTonesBg}>
          <img
            src={confetti1}
            alt="紅心"
            className={`${deco} ${deco1}`}
            data-ani="spread-out"
          />
          <img
            src={confetti2}
            alt="紫圓"
            className={`${deco} ${deco2}`}
            data-ani="spread-out"
          />
          <img
            src={confetti3}
            alt="綠方塊"
            className={`${deco} ${deco3}`}
            data-ani="spread-out"
          />
          <img
            src={confetti4}
            alt="藍圈"
            className={`${deco} ${deco4}`}
            data-ani="spread-out"
          />
          <img
            src={confetti5}
            alt="黃方塊"
            className={`${deco} ${deco5}`}
            data-ani="spread-out"
          />
          <img
            src={confetti6}
            alt="紫波浪"
            className={`${deco} ${deco6}`}
            data-ani="spread-out"
          />
          <img
            src={confetti7}
            alt="粉圓"
            className={`${deco} ${deco7}`}
            data-ani="spread-out"
          />
          <img
            src={confetti8}
            alt="粉紅心"
            className={`${deco} ${deco8}`}
            data-ani="spread-out"
          />
        </div>
        <div className={titleContainer}>
          <h1>
            <img src={talentsTitle} alt="Talents" />
          </h1>
          <h2>
            <span className={subtileAccent}>| Vlive Lab一期生 |</span>
            冥界SCP事務所
          </h2>
        </div>
        <div className={sectionCols3}>
          {talentsData.map((talent) => {
            return (
              <TalentCard
                charImg={talent.charImg}
                logo={talent.logo}
                name={talent.name}
                key={talent.name}
              />
            );
          })}
        </div>
      </section>
      {/* News */}
      <section className={section}>
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
        <Link to="/news" className={`${btn} ${btnsContainerEnd}`}>
          VIEW MORE <img src={RightArrow} alt="向右箭頭" />
        </Link>
      </section>
      {/* Shop */}
      <section>
        <div>
          <div className={`${titleContainer} ${titleContainerRight}`}>
            <h1 className={titleBorderBottom}>
              <img src={shopTitle} alt="Shop" />
            </h1>
            <h2>
              <span className={subtileAccent}>| 周邊&寄賣 |</span>
              我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
            </h2>
          </div>
          <div className={sectionHorizontalScrolling} ref={scrollXContainer}>
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
            {products.map((item) => {
              return (
                <ProductCard
                  id={item.id}
                  productImg={item.img}
                  productName={item.name}
                  productPrice={item.price}
                  key={item.id}
                />
              );
            })}
          </div>
          <div className={btnsContainerEnd}>
            <img
              src={LeftArrow}
              alt="向左箭頭"
              onPointerDown={() => scrollLeft(scrollXContainer)}
              className={btn}
            />
            <img
              src={RightArrow}
              alt="向右箭頭"
              onPointerDown={() => scrollRight(scrollXContainer)}
              className={btn}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
