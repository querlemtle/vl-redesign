import newsTitle from "./../assets/news-page-title.svg";
import NewsCard from "../components/NewsCard";
import "./News.css";

export default function News() {
  return (
    <>
      <section className="section">
        Img here.
      </section>
      <section className="section__cols-2 section__bg--primary-color-light-10">
        <h1 className="section__title section__title--stretch section__title--subtitle-right">
          <img src={newsTitle} alt="News" className="section___title-img" />
        </h1>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <ul className="pagination">
          <a href="#" className="pagination__control">&#8592;</a>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">...</a></li>
          <li><a href="#">9</a></li>
          <li><a href="#">10</a></li>
          <a href="#" className="pagination__control">&#8594;</a>
        </ul>
      </section>
      <aside className="aside">
        <a href="#" className="aside__link">
          Discord banner here.
        </a>
      </aside>
    </>
  );
}
