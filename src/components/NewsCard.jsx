import Placeholder from "./../assets/placeholder-img.jpg";
import styles from "./NewsCard.module.css";
const {
  card,
  ["card__title-container"]: cardTitleContainer,
  ["card__timestamp"]: cardTimeStamp,
} = styles;

export default function NewsCard() {
  return (
    <div className={card}>
      <img src={Placeholder} alt="" className="card__img" />
      <div className={cardTitleContainer}>
        <span className="card__tag">分類標籤</span>
        <h3 className="card__title">文章標題預留十八個字文章標題預留十八</h3>
      </div>
      <div className="card__context">
        文章內文預覽預留一排文章內文預覽預留一排文章內文預覽預文章
      </div>
      <span className={cardTimeStamp}>文章發布於 2024 / 04 / 22 </span>
    </div>
  );
}
