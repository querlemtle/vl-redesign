import styles from "./Pagination.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const {
  pagination,
  pagination__control: paginationControl,
  pagination__item: paginationItem,
  active,
  disabled,
} = styles;

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  itemsPerPage,
}) {
  /** paginationRange - 取得分頁範圍陣列 */
  const paginationRange = [1, 2];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  // 頁數只有一頁時，不顯示分頁器
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={pagination}>
      {/* 前一頁按鈕 */}
      <li
        className={`${paginationControl} ${currentPage === 1 && disabled}`}
        onPointerDown={onPrevious}
      >
        &#8592;
      </li>
      {/* 顯示的分頁按鈕 */}
      {paginationRange.map((pageNumber, i) => {
        return (
          <Link
            className={`${paginationItem} ${
              currentPage === pageNumber && active
            }`}
            key={i}
            onPointerDown={() => onPageChange(pageNumber)}
            to={`/news/${pageNumber}`}
          >
            {pageNumber}
          </Link>
        );
      })}
      {/* 下一頁按鈕 */}
      <li
        className={`${paginationControl} ${
          currentPage === lastPage && disabled
        }`}
        onPointerDown={onNext}
      >
        &#8594;
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
