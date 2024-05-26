import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Reference: https://github.com/ncoughlin/scroll-to-hash-element
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

/*
React-router 換頁時會保留卷軸位置，需要另外設定回到頁面頂端
參考這篇 (https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition) 嘗試很多方法：
1. 如果使用 data router，可以嘗試 ScrollRestoration (https://reactrouter.com/en/main/components/scroll-restoration)，但此專案無效
2. react-router v6 不能用 useHistory
3. 此專案使用 window.scrollTo(0, 0) 或 document.documentElement.scrollTo(0, 0) 都無效
4. document.querySelector('#root').scrollIntoView(true) 頁面雖然會上滑，但無法完全置頂；另外改設在 <body> 無效
5. 最後改用 scrollTo 並設在 <body> 上才達到置頂效果
*/
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.querySelector("body").scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export { ScrollToAnchor, ScrollToTop };
