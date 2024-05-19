// Reference: https://github.com/ncoughlin/scroll-to-hash-element
import { useLayoutEffect, useEffect } from "react";
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

/* React-router 換頁時會保留卷軸位置，需要另外設定回到頁面頂端，參考：
https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

export { ScrollToAnchor, ScrollToTop };
