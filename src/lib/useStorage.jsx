import { useState } from "react";

/**
 * useStorage - 取得或更新 localStorage 的儲存值
 * @param {string} key - 鍵的名稱
 * @param {*} initValue - 預設值
 * @returns [storedValue, setValue] - 指定鍵 (key) 的對應值與更新值的函式
 */
export default function useStorage(key, initValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.log(error);
      return initValue;
    }
  });

  const setValue = (value) => {
    try {
      // 處理傳入值為函式的情況
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
