import styles from "./Controllers.module.css";

const {
  pagination,
  pagination__control: paginationControl,
} = styles;

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

export { Pagination };
