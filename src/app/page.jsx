"use client";
import Link from "next/link";
import productsData from "@/lib/data/productsData";
import talentsData from "@/lib/data/talentsData";
import newsData from "@/lib/data/newsData";
import HomeBanner from "@/components/HomeBanner";
import TalentCard from "@/components/TalentCard";
import NewsCard from "@/components/NewsCard";
import ProductCard from "@/components/ProductCard";
import formatDate from "@/lib/formatDate";
import styles from "./Home.module.css";
import { useEffect, useRef, useState, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { register } from "swiper/element/bundle";

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
  const swiperRef = useRef(null);

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
    register();

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

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  function handlePrev() {
    if (!swiperRef.current) {
      return;
    }
    swiperRef.current.swiper.slidePrev();
  }

  function handleNext() {
    if (!swiperRef.current) {
      return;
    }
    swiperRef.current.swiper.slideNext();
  }

  return (
    <>
      {/* HomeBanner */}
      <HomeBanner />
      {/* About */}
      <section className={section}>
        <h2 className={title}>
          <img src="/icons/about-heart.svg" alt="愛心" />
          <span>ABOUT</span>
        </h2>
        <div className={colorBg}>
          <p className={statement}>
            Vlive
            Lab是為了研究VTuber領域的未來，而誕生的合作型Vtuber實驗型事務所。在這裡，我們更重視合作夥伴、營銷分析及創新科技產品，為未來的Vtuber與粉絲創造更多的可能性。我們擁有MMORPG、XR與Gamefi技術，Vtuber是我們的第一小步，也是最重要的一大步。
            <br />
            你努力的未來有沒有你，我們覺得很重要。
          </p>
          <Link href="/about" className={cta}>
            <span className={ctaText}>查看更多</span>
          </Link>
        </div>
      </section>
      {/* Talents */}
      <section className={section} ref={gsapContainer}>
        <div className={twoTonesBg}>
          <img
            src="/icons/confetti-1.svg"
            alt="愛心彩帶"
            className={`${deco} ${deco1}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-2.svg"
            alt="圓形碎紙"
            className={`${deco} ${deco2}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-3.svg"
            alt="方塊碎紙"
            className={`${deco} ${deco3}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-4.svg"
            alt="圓圈彩帶"
            className={`${deco} ${deco4}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-5.svg"
            alt="方塊碎紙"
            className={`${deco} ${deco5}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-6.svg"
            alt="波浪形彩帶"
            className={`${deco} ${deco6}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-7.svg"
            alt="圓形碎紙"
            className={`${deco} ${deco7}`}
            data-ani="spread-out"
          />
          <img
            src="/icons/confetti-8.svg"
            alt="愛心彩帶"
            className={`${deco} ${deco8}`}
            data-ani="spread-out"
          />
        </div>
        <div className={titleContainer}>
          <h2>
            <img src="/talents-title.svg" alt="Talents" className={titleImg} />
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
            <img src="/news-title.svg" alt="News" className={titleImg} />
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
          <Link href="/news" className={`${btn} ${btnsContainer}`}>
            VIEW MORE{" "}
            <img
              src="/icons/right-arrow.svg"
              alt="向右箭頭"
              className={btnIcon}
            />
          </Link>
        </div>
      </section>
      {/* Shop */}
      <section>
        <div className={`${titleContainer} ${titleContainerStart}`}>
          <h2 className={titleShop}>
            <img src="/shop-title.svg" alt="Shop" className={titleImg} />
          </h2>
          <h3 className={subtitle}>
            <span className={subtileAccent}>周邊&寄賣</span>
            我們提供豐富的周邊商品，讓您輕鬆選購心儀商品。
          </h3>
        </div>
        <div className={sectionShop}>
          <Link href="/shop" className={shopHintBox}>
            <div>
              <img src="/Vlive-Lab-logo-white.svg" alt="Vlive Lab" />
              <p className={logoText}>未來實驗所</p>
            </div>
            <div className={hintboxTitle}>
              <img src="/icons/penta-flower-deco.svg" alt="花瓣裝飾" />
              <h3>Online Shop</h3>
              <img src="/icons/penta-flower-deco.svg" alt="花瓣裝飾" />
            </div>
            <div className={hintboxGuide}>
              前往商店 <img src="/icons/half-arrow.svg" alt="箭頭" />
            </div>
          </Link>
          <div className={shopGrid}>
            <swiper-container
              ref={swiperRef}
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
