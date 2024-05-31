import styles from "./Pagination.module.css";

const { pagination, pagination__control: paginationControl } = styles;

function Pagination() {
  return (
    <ul className={pagination}>
      {false && (
        <a href="#" className={paginationControl}>
          &#8592;
        </a>
      )}
      <li>
        <a href="#">1</a>
      </li>
      <a href="#" className={paginationControl}>
        &#8594;
      </a>
    </ul>
  );
}

export default Pagination;