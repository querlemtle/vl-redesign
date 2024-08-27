// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// 時區列表：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

/**
 * formatDate - 轉換時間格式
 * @param {string} dateStr - 可轉換的時間字串
 * @param {string} optionStr - 格式選項字串
 * */
export default function formatDate(dateStr, optionStr) {
  const d = new Date(dateStr);
  let options;
  switch (optionStr) {
    case "short12":
      options = {
        hourCycle: "h12",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Taipei",
      };
      break;
    case "num":
      options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      break;
    default:
      options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      break;
  }
  const formattedDate = new Intl.DateTimeFormat("zh-Hans-TW", options).format(
    d
  );
  return formattedDate;
}
