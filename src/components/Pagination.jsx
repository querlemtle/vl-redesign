import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

const {
  pagination,
  pagination__control: paginationControl,
  pagination__item: paginationItem,
  active,
} = styles;

function Pagination({
  handlePagination,
  totalCount,
  currentPage,
  itemsPerPage,
}) {
  /** paginationRange - 取得分頁範圍陣列 */
  const paginationRange = Array.from(
    { length: Math.ceil(totalCount / itemsPerPage) },
    (_, i) => i + 1
  );

  const onNext = () => {
    handlePagination(currentPage + 1);
  };

  const onPrevious = () => {
    handlePagination(currentPage - 1);
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
        className={`${paginationControl} ${currentPage === 1 && "disabled"}`}
        onPointerDown={onPrevious}
      >
        &#8592;
      </li>
      {/* 顯示的分頁按鈕 */}
      {paginationRange.map((pageNum, i) => {
        return (
          <li
            className={`${paginationItem} ${currentPage === pageNum && active}`}
            key={i}
            onPointerDown={() => handlePagination(pageNum)}
          >
            {pageNum}
          </li>
        );
      })}
      {/* 下一頁按鈕 */}
      <li
        className={`${paginationControl} ${
          currentPage === lastPage && "disabled"
        }`}
        onPointerDown={onNext}
      >
        &#8594;
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  handlePagination: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
