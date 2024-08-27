"use client";
import styles from "./Toast.module.css";
import PropTypes from "prop-types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const {
  toast,
  toast__icon: toastIcon,
  "toast__icon--success": toastIconSuccess,
  "toast__icon--error": toastIconError,
} = styles;

export default function Toast({ text, status }) {
  const toastEl = useRef();
  /** mapStatusClass - 根據狀態映射對應的 className */
  function mapStatusClass(status) {
    switch(status) {
      case "success":
        return toastIconSuccess;
      case "error":
        return toastIconError;
    }
  }

  useGSAP(() => {
    gsap.fromTo(
      toastEl.current,
      { x: 100 },
      { x: 0, ease: "elastic.out(1, 0.5)" }
    );
  });

  return (
    <div className={toast} ref={toastEl}>
      <div className={`${toastIcon} ${mapStatusClass(status)}`}></div>
      <h3>{text}</h3>
    </div>
  );
}

Toast.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
