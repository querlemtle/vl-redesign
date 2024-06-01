/** getNewsTagStyle - 取得新聞文章分類標籤的 className */
function getNewsTagStyle(tagText) {
  switch (tagText) {
    case "焦點":
      return "tag--feature";
    case "情報":
      return "tag--info";
    case "活動":
      return "tag--event";
    case "分析":
      return "tag--analysis";
  }
}

export default getNewsTagStyle;
