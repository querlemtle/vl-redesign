import { circleCheck } from "./../assets/images";
import styles from "./Toast.module.css";
import PropTypes from "prop-types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const { toast } = styles;

export default function Toast({ text, status }) {
  const toastEl = useRef();

  useGSAP(() => {
    gsap.fromTo(
      toastEl.current,
      { x: 100 },
      { x: 0, ease: "elastic.out(1, 0.5)" }
    );
  });

  return (
    <div className={toast} ref={toastEl}>
      <img src={circleCheck} alt={status} />
      <h3>{text}</h3>
    </div>
  );
}

Toast.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeline: PropTypes.object.isRequired,
};
