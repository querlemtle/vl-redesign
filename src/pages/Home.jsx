import { Link } from "react-router-dom";
import {
  aboutHeart,
  talentsTitle,
  newsTitle,
  shopTitle,
  confetti1,
  confetti2,
  confetti3,
  confetti4,
  confetti5,
  confetti6,
  confetti7,
  confetti8,
  pentaFlowerDeco,
  rightArrow,
  halfArrow,
  whiteLogo,
} from "../assets/images";
import productsData from "./../data/productsData";
import talentsData from "./../data/talentsData";
import newsData from "../data/newsData";
import HomeBanner from "./../components/HomeBanner";
import TalentCard from "./../components/TalentCard";
import NewsCard from "../components/NewsCard";
import ProductCard from "../components/ProductCard";
import { formatDate } from "../utils/formatDate";
import styles from "./Home.module.css";
import { useEffect, useRef, useState, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const {
  section,
  "section--news": sectionNews,
  "section--shop": sectionShop,
  talents__grid: talentsGrid,
  deco,
  "deco--1": deco1,
  "deco--2": deco2,
  "deco--3": deco3,
  "deco--4": deco4,
  "deco--5": deco5,
  "deco--6": deco6,
  "deco--7": deco7,
  "deco--8": deco8,
  "two-tones-bg": twoTonesBg,
  "color-bg": colorBg,
  "title-container": titleContainer,
  "title-container--start": titleContainerStart,
  title__img: titleImg,
  title,
  "title--shop": titleShop,
  subtitle,
  "subtitle-accent": subtileAccent,
  cta,
  cta__text: ctaText,
  statement,
  logo__text: logoText,
  shop__hintbox: shopHintBox,
  shop__grid: shopGrid,
  hintbox__title: hintboxTitle,
  hintbox__guide: hintboxGuide,
  btn,
  btn__icon: btnIcon,
  swipe__left: swipeLeft,
  swipe__right: swipeRight,
  "btns-container": btnsContainer,
  "btns-container--swipe": btnsContainerSwipe,
} = styles;

export default function Home() {
  const filteredNews = newsData.filter((_, i) => i <= 1);
  const [displayNews, setDisplayNews] = useState(filteredNews);

  const gsapContainer = useRef();
  const sliderContainer = useRef(null);

  useGSAP(
    () => {
      gsap.from("[data-ani='spread-out']", {
        top: "80%",
        left: "50%",
        opacity: 0,
        scrollTrigger: {
          trigger: gsapContainer.current,
          start: "start bottom",
          toggleActions: "play pause pause reset",
        },
      });
    },
    { scope: gsapContainer }
  );

  useEffect(() => {
    const params = {
      navigation: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        `,
      ],
    };

    Object.assign(sliderContainer.current, params);
    sliderContainer.current.initialize();
  }, []);

  function handlePrev() {
    if (!sliderContainer.current) {
      return;
    }
    sliderContainer.current.swiper.slidePrev();
  }

  function handleNext() {
    if (!sliderContainer.current) {
      return;
    }
    sliderContainer.current.swiper.slideNext();
  }

  return (
    <>
      {/* HomeBanner */}
      <HomeBanner />
      {/* About */}
      <section className={section}>
        <h2 className={title}>
          <img src={aboutHeart} alt="愛心" />
          <span>ABOUT</span>
        </h2>
        <div className={colorBg}>
          <p className={statement}>
            Vlive
            Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
            <br />
            你努力的未來有沒有你，我們覺得很重要。
          </p>
          <Link to="/about" className={cta}>
            <span className={ctaText}>查看更多</span>
          </Link>
        </div>
      </section>
      {/* Talents */}
      <section className={section} ref={gsapContainer}>
        <div className={twoTonesBg}>
          <img
            src={confetti1}
            alt="愛心彩帶"
            className={`${deco} ${deco1}`}
            data-ani="spread-out"
          />
          <img
            src={confetti2}
            alt="圓形碎紙"
            className={`${deco} ${deco2}`}
            data-ani="spread-out"
          />
          <img
            src={confetti3}
            alt="方塊碎紙"
            className={`${deco} ${deco3}`}
            data-ani="spread-out"
          />
          <img
            src={confetti4}
            alt="圓圈彩帶"
            className={`${deco} ${deco4}`}
            data-ani="spread-out"
          />
          <img
            src={confetti5}
            alt="方塊碎紙"
            className={`${deco} ${deco5}`}
            data-ani="spread-out"
          />
          <img
            src={confetti6}
            alt="波浪形彩帶"
            className={`${deco} ${deco6}`}
            data-ani="spread-out"
          />
          <img
            src={confetti7}
            alt="圓形碎紙"
            className={`${deco} ${deco7}`}
            data-ani="spread-out"
          />
          <img
            src={confetti8}
            alt="愛心彩帶"
            className={`${deco} ${deco8}`}
            data-ani="spread-out"
          />
        </div>
        <div className={titleContainer}>
          <h2>
            <img src={talentsTitle} alt="Talents" className={titleImg} />
          </h2>
          <h3 className={subtitle}>
            <span className={subtileAccent}>Vlive Lab一期生 </span>
            冥界SCP事務所
          </h3>
        </div>
        <div className={talentsGrid}>
          {talentsData.map((talent) => {
            return (
              <TalentCard
                link={talent.bioLinks.yt}
                charImg={talent.images.phonePic}
                logo={talent.images.logoLight}
                name={talent.zhName}
                key={talent.enName}
              />
            );
          })}
        </div>
      </section>
      {/* News */}
      <section className={`${section} ${sectionNews}`}>
        <div className={titleContainer}>
          <h2>
            <img src={newsTitle} alt="News" className={titleImg} />
          </h2>
          <h3 className={subtitle}>帶來有關VTUBER相關的新資訊與熱門話題討論</h3>
        </div>
        <div className="news__grid">
          {/* 顯示前兩筆資料 */}
          {displayNews.map((news) => {
            return (
              <NewsCard
                key={news.newsId}
                id={news.newsId}
                tagText={news.tag}
                title={news.title}
                image={news.coverImg}
                timestamp={formatDate(news.publishedAt)}
              />
            );
          })}
          <Link to="/news" className={`${btn} ${btnsContainer}`}>
            VIEW MORE{" "}
            <img src={rightArrow} alt="向右箭頭" className={btnIcon} />
          </Link>
        </div>
      </section>
      {/* Shop */}
      <section>
        <div className={`${titleContainer} ${titleContainerStart}`}>
          <h2 className={titleShop}>
            <img src={shopTitle} alt="Shop" className={titleImg} />
          </h2>
          <h3 className={subtitle}>
            <span className={subtileAccent}>周邊&寄賣</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h3>
        </div>
        <div className={sectionShop}>
          <Link to="/shop" className={shopHintBox}>
            <div>
              <img src={whiteLogo} alt="Vlive Lab" />
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
          <div className={shopGrid}>
            <swiper-container
              ref={sliderContainer}
              init="false"
              slides-per-view="3"
              space-between="20"
              navigation="true"
              navigation-prev-el={swipeLeft}
              navigation-next-el={swipeRight}
              breakpoints={JSON.stringify({
                0: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
              })}
            >
              {productsData.map((item) => {
                return (
                  <Fragment key={`frag-${item.productId}`}>
                    <swiper-slide key={`slide-${item.productId}`}>
                      <ProductCard
                        productId={item.productId}
                        productImg={item.images[0]}
                        productName={item.productName}
                        productPrice={item.price}
                        key={item.productId}
                      />
                    </swiper-slide>
                  </Fragment>
                );
              })}
            </swiper-container>
          </div>
        </div>
        <div className={`${btnsContainer} ${btnsContainerSwipe}`}>
          <div className={swipeLeft} onClick={handlePrev}></div>
          <div className={swipeRight} onClick={handleNext}></div>
        </div>
      </section>
    </>
  );
}
