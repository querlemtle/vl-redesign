import isObjEmpty from "./isObjEmpty";

export function getStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    if (!value || isObjEmpty(value)) {
      return initialValue;
    } else {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
  }
}

export function setStorage(key, newValue) {
  try {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  } catch (error) {
    console.error(error);
  }
}
