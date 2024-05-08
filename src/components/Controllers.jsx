import styles from "./Controllers.module.css";

const {
  controllers,
  controller__indicator: controllerIndicator,
  pagination,
  pagination__control: paginationControl
} = styles;

function Slider() {
  return (
    <ul className={controllers}>
      <li className={controllerIndicator}></li>
      <li className={controllerIndicator}></li>
      <li className={controllerIndicator}></li>
    </ul>
  );
}

function Pagination() {
  return (
    <ul className={pagination}>
      <a href="#" className={paginationControl}>
        &#8592;
      </a>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">...</a>
      </li>
      <li>
        <a href="#">9</a>
      </li>
      <li>
        <a href="#">10</a>
      </li>
      <a href="#" className={paginationControl}>
        &#8594;
      </a>
    </ul>
  );
}

export { Slider, Pagination };
