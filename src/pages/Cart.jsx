import { sandersSticker } from "./../assets/images";
import cross from "./../assets/icons/cross.svg";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const {
  "section-center": sectionCenter,
  col,
  grid,
  section__title: sectionTitle,
  card,
  card__item: cardItem,
  "text--accent": textAccent,
  aside,
  aside__body: asideBody,
  aside__container: asideContainer,
  aside__title: asideTitle,
  aside__accent: asideAccent,
  btn,
  "btn--fill": btnFill,
  link,
} = styles;

function ItemCard() {
  return (
    <div className={card}>
      <img src={sandersSticker} alt="" />
      <div className={col}>
        <h3>魔王貼紙</h3>
        <div className={grid}>
          {/* Column */}
          <div className={`${col} ${cardItem}`}>
            <span>規格</span>
            <p>貼紙包</p>
          </div>
          {/* Column */}
          <div className={`${col} ${cardItem}`}>
            <label>數量</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <span className={textAccent}>
          預購商品預購期約14-30天不等,較難提供確切到貨時間還請見諒。
        </span>
      </div>
      <h4>
        NT$<span>200</span>
      </h4>
      <button className={btn}>
        <img src={cross} alt="刪除商品按鈕" />
      </button>
    </div>
  );
}

export default function Cart() {
  return (
    <section className={sectionCenter}>
      <h2 className={sectionTitle}>購物車內容</h2>
      <div className={grid}>
        {/* Left column: Selected products card list */}
        <div>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        {/* Right column: Confirm order */}
        <aside className={aside}>
          <div className={asideContainer}>
            <p className={asideTitle}>訂單金額確認</p>
            <div className={`${grid} ${asideBody}`}>
              <p>購物車總計</p>
              <p className={asideAccent}>
                NT$<span>200</span>
              </p>
            </div>
            <Link to="/checkout" className={`${btn} ${btnFill}`}>
              前往結帳
            </Link>
          </div>
          <Link to="/shop" className={link}>
            繼續選購
          </Link>
        </aside>
      </div>
    </section>
  );
}
