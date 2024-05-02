import placeholder from "./../assets/news-placeholder.png";
import styles from "./NewsArticle.module.css";
import LeftArrow from "./../assets/left-arrow.svg";
import RightArrow from "./../assets/right-arrow.svg";

const {
  article,
  article__meta: articleMeta,
  article__tag: articleTag,
  article__date: articleDate,
  article__title: articleTitle,
  article__img: articleImg,
  article__subtitle: articleSubtitle,
  article__link: articleLink,
  article__para: articlePara,
  controller,
  controller__row: controllerRow,
  controller__icon: controllerIcon
} = styles;

export default function NewsArticle() {
  return (
    <article className={article}>
      <div className={articleMeta}>
        <span className={articleTag}>活動</span>
        <span className={articleDate}>2024/02/01</span>
      </div>
      <h1 className={articleTitle}>
        「龍送吉祥，群龍獻福」新年活動將於 2 月 8
        日（四）小年夜舉行！邀您一同共享新春喜悅
      </h1>
      <div>
        <img src={placeholder} alt="活動宣傳圖" className={articleImg} />
      </div>
      <h3 className={articleSubtitle}>12 位龍 Vtuber 齊來賀龍年</h3>
      <p className={articlePara}>
        靜遠其夢不成秋雨從今，水夫子終之吹知杯別，國一杯酒江流靜以為西出來惜大涕淚，佳十里澹？水無情將軍亦，大三千里
        帆秋月難難於到天，美酒鬢自好風人一，獨夜何月常夜飛，九重西依隔月照，深燭文一處處聞荊？看敢翻疑夢前日落，消息
        從，南山，愛相見水陰陰家草昭陽殿來，夢隨流水岳陽遠，落仙。城南稀時晚分之斯文，垂楊天事來遠：家明夕夜深音書絕
        言，古故關鳥子孤落葉⋯曙色年年重有五十春秋月寒食鳳凰，城南在故園待夜半知生長路。兒獨夜下秋一雁魂冷愁人白首，
        大冥陽鴛鴦堂前斜：得明月日出，天事十里黃春色妾朝朝，思何時君王帝暗。
        <br />
        靜遠其夢不成秋雨從今，水夫子終之吹知杯別，國一杯酒江流靜以為西出來惜大涕淚，佳十里澹？水無情將軍亦，大三千里
        帆秋月難難於到天，美酒鬢自好風人一，獨夜何月常夜飛，九重西依隔月照，深燭文一處處聞荊？看敢翻疑夢前日落，消息
        大冥陽鴛鴦堂前斜：得明月日出，天事十里黃春色妾朝朝，思何時君王帝暗。
      </p>
      <p className={articlePara}>
        靜遠其夢不成秋雨從今，水夫子終之吹知杯別，國一杯酒江流靜以為西出來惜大涕淚，佳十里澹？水無情將軍亦，大三千里
        帆秋月難難於到天，美酒鬢自好風人一，獨夜何月常夜飛，九重西依隔月照，深燭文一處處聞荊？看敢翻疑夢前日落，消息
        大冥陽鴛鴦堂前斜：得明月日出，天事十里黃春色妾朝朝，思何時君王帝暗。
      </p>
      <p className={articleLink}>
        資料來源：{" "}
        <a href="https://www.youtube.com/watch?v=AYIcGeeLMMA">
          菈菲雅拉活動宣傳影片
        </a>
      </p>
      <hr />
      <div className={controller}>
        <a href="#" className={controllerRow}>
          <LeftArrow className={controllerIcon} />
          上一篇
        </a>
        <a href="#" className={controllerRow}>
          下一篇
          <RightArrow className={controllerIcon} />
        </a>
      </div>
    </article>
  );
}
