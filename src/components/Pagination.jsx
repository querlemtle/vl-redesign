import styles from "./Pagination.module.css";
import Link from "next/link";
import PropTypes from "prop-types";

const {
  pagination,
  pagination__control: paginationControl,
  pagination__item: paginationItem,
  active,
} = styles;

export default function Pagination({ page, totalCount, itemsPerPage }) {
  /** paginationRange - 取得分頁範圍陣列 */
  const paginationRange = Array.from(
    { length: Math.ceil(totalCount / itemsPerPage) },
    (_, i) => i + 1
  );

  const lastPage = paginationRange.length;

  // 頁數只有一頁時，不顯示分頁器
  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={pagination}>
      {/* 前一頁按鈕 */}
      <Link
        href={`/news?page=${page - 1 < 1 ? 1 : page - 1}`}
        className={`${paginationControl} ${page === 1 && "disabled"}`}
      >
        &#8592;
      </Link>
      {/* 顯示的分頁按鈕 */}
      {paginationRange.map((pageNum, i) => {
        return (
          <Link
            key={i}
            href={`/news?page=${pageNum}`}
            className={`${paginationItem} ${page === pageNum && active}`}
          >
            {pageNum}
          </Link>
        );
      })}
      {/* 下一頁按鈕 */}
      <Link
        href={`news?page=${page + 1 > lastPage ? lastPage : page + 1}`}
        className={`${paginationControl} ${page === lastPage && "disabled"}`}
      >
        &#8594;
      </Link>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
