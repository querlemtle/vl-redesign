import {
  hanakawaSticker,
  hanakawaPoster,
  hanakawaPosterStyle1,
  hanakawaPosterStyle2,
  sandersSticker,
  pin,
  candle,
  shirt,
  hanakawaAcrylicStand,
  yagamiAcrylicStand,
  sandersAcrylicStand,
} from "./../assets/images";

const productsData = [
  {
    id: "wFARMs",
    name: "夢姬飯友",
    price: 150,
    images: [hanakawaSticker],
    details: ["尺寸：6cm"],
  },
  {
    id: "3arbQF",
    name: "夢姬海報",
    price: 500,
    images: [hanakawaPoster, hanakawaPosterStyle1, hanakawaPosterStyle2],
    details: ["尺寸：50cm x 80cm"],
  },
  {
    id: "kwxsxr",
    name: "魔王Q貼",
    price: 100,
    images: [sandersSticker],
    details: ["7 張貼紙"],
  },
  {
    id: "ROh1oK",
    name: "胸章",
    price: 50,
    images: [pin],
    details: ["尺寸：5.5cm"],
  },
  {
    id: "u9GwHz",
    name: "香氛蠟燭",
    price: 200,
    images: [candle],
    details: [
      "款式：狼煙-深淵薄荷(狼執事 夜神遂心) / 龍芯-彼岸玫瑰(魔龍 花川夢姬) / 魔域-地獄沉木(魔王 桑德斯闇)",
      "內容物：70ml",
    ],
  },
  {
    id: "4CWkdu",
    name: "一期生T恤",
    price: 680,
    images: [shirt],
    details: ["尺寸：S / M / L / XL / 3XL", "材質：純棉"],
  },
  {
    id: "jTYgOk",
    name: "夢姬立牌",
    price: 200,
    images: [hanakawaAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
  {
    id: "KO3HsE",
    name: "夜神立牌",
    price: 200,
    images: [yagamiAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
  {
    id: "kdlh8M",
    name: "桑德斯立牌",
    price: 200,
    images: [sandersAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
];

export default productsData;
