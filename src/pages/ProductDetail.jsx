import {
  hanakawaPoster as preview0,
  hanakawaPosterSize1 as preview1,
  hanakawaPosterSize2 as preview2,
} from "./../assets/images";
import CartBtn from "../components/CartBtn";
import Toast from "../components/Toast";
import styles from "./ProductDetails.module.css";

const {
  grid,
  row,
  tag,
  title,
  img,
  "img--s": imgS,
  list,
  "list-square": listSquare,
  list__title: listTitle,
  sublist,
  "sublist--between": sublistBetween,
  btn,
  "btn--fillbg": btnFillbg,
  "btn--border": btnBorder,
  "btn--stretch": btnStretch,
  divider,
  select,
  clickable,
} = styles;

export default function ProductDetail() {
  return (
    <section className={grid}>
      {/* Left Col */}
      <aside>
        <div className={img}>
          <img src={preview0} alt="預覽圖1" />
        </div>
        <div className={row}>
          <img
            src={preview0}
            alt="預覽圖1"
            className={`${imgS} ${img} ${clickable}`}
          />
          <img
            src={preview1}
            alt="預覽圖2"
            className={`${imgS} ${img} ${clickable}`}
          />
          <img
            src={preview2}
            alt="預覽圖3"
            className={`${imgS} ${img} ${clickable}`}
          />
        </div>
      </aside>
      {/* Right Col */}
      <div>
        <span className={tag}>期間限定</span>
        <h2 className={title}>貢緞布掛軸(花川夢姬)</h2>
        <h3>
          NT$<span>800</span>
        </h3>
        <ul className={list}>
          <li>
            <p className={listTitle}>規格</p>
            <ul className={sublist}>
              <li className={`${btn} ${btnFillbg} ${clickable}`}>凝視</li>
              <li className={`${btn} ${btnBorder} ${clickable}`}>坐姿</li>
            </ul>
          </li>
          <li>
            <p className={listTitle}>數量</p>
            <div className={`${sublist} ${sublistBetween}`}>
              <select className={select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button
                className={`${btn} ${btnFillbg} ${btnStretch} ${clickable}`}
              >
                加入購物車
              </button>
            </div>
          </li>
        </ul>
        <h4 className={`${divider} ${listTitle}`}>購買須知</h4>
        <ul className={listSquare}>
          <li>該商品為客製化商品，下單後不可取消。敬請於下單前確認。</li>
          <li>
            待付費確認完成後，系統才會開始處理您的訂單，約7個工作天內出貨。
          </li>
        </ul>
        <h4 className={`${divider} ${listTitle}`}>商品詳情</h4>
        <ul className={listSquare}>
          <li>尺寸: 9X9公分</li>
          <li>材質: 壓克力</li>
        </ul>
      </div>
      <CartBtn />
      {/* <Toast /> */}
    </section>
  );
}
