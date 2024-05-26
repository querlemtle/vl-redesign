// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// 時區列表：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("zh-Hans-TW", options).format(
    d
  );
  return formattedDate;
}

function formatDateLong(dateStr) {
  const d = new Date(dateStr);
  const options = {
    hour12: true,
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Taipei",
  };
  const formattedDate = new Intl.DateTimeFormat("zh-Hans-TW", options).format(
    d
  );
  return formattedDate;
}

export { formatDate, formatDateLong };
