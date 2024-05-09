// Reference: https://github.com/ncoughlin/scroll-to-hash-element
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;
    // Use slice() to get the id after #
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (hash && el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
