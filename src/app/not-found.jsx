"use client";
import Link from "next/link";
import styles from "./ErrorPage.module.css";

const { section, section__link: sectionLink } = styles;

function NotFound() {
  return (
    <div className={section}>
      <h2>頁面出錯了😣</h2>
      <Link href="/" className={sectionLink}>
        點我回首頁
      </Link>
    </div>
  );
}

export default NotFound;
