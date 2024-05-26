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
    productId: "wFARMs",
    productName: "夢姬飯友",
    price: 150,
    variants: [
      {
        variantId: "wFARMs_0",
        name: "湯匙",
      },
    ],
    images: [hanakawaSticker],
    details: ["尺寸：6cm"],
  },
  {
    productId: "3arbQF",
    productName: "夢姬海報",
    price: 500,
    variants: [
      {
        variantId: "3arbQF_0",
        name: "凝視",
      },
      {
        variantId: "3arbQF_1",
        name: "坐姿",
      },
    ],
    images: [hanakawaPoster, hanakawaPosterStyle1, hanakawaPosterStyle2],
    details: ["尺寸：50cm x 80cm"],
  },
  {
    productId: "kwxsxr",
    productName: "魔王Q貼",
    price: 100,
    variants: [
      {
        variantId: "kwxsxr_0",
        name: "日常表情包",
      },
    ],
    images: [sandersSticker],
    details: ["7 張貼紙"],
  },
  {
    productId: "ROh1oK",
    productName: "胸章",
    price: 50,
    variants: [
      {
        variantId: "ROh1oK_0",
        name: "VTuber Online",
      },
      {
        variantId: "ROh1oK_1",
        name: "魔王",
      },
      {
        variantId: "ROh1oK_2",
        name: "小黑皮",
      },
      {
        variantId: "ROh1oK_3",
        name: "狼執事",
      },
      {
        variantId: "ROh1oK_4",
        name: "魔龍",
      },
    ],
    images: [pin],
    details: ["尺寸：5.5cm"],
  },
  {
    productId: "u9GwHz",
    productName: "香氛蠟燭",
    price: 200,
    variants: [
      {
        variantId: "u9GwHz_0",
        name: "深淵薄荷",
      },
      {
        variantId: "u9GwHz_1",
        name: "彼岸玫瑰",
      },
      {
        variantId: "u9GwHz_2",
        name: "地獄沉木",
      },
    ],
    images: [candle],
    details: [
      "款式：狼煙-深淵薄荷(狼執事 夜神遂心) / 龍芯-彼岸玫瑰(魔龍 花川夢姬) / 魔域-地獄沉木(魔王 桑德斯闇)",
      "內容物：70ml",
    ],
  },
  {
    productId: "4CWkdu",
    productName: "一期生T恤",
    price: 680,
    variants: [
      {
        variantId: "4CWkdu_0",
        name: "S",
      },
      {
        variantId: "4CWkdu_1",
        name: "M",
      },
      {
        variantId: "4CWkdu_2",
        name: "L",
      },
      {
        variantId: "4CWkdu_3",
        name: "XL",
      },
      {
        variantId: "4CWkdu_4",
        name: "3XL",
      },
    ],
    images: [shirt],
    details: ["尺寸：S / M / L / XL / 3XL", "材質：純棉"],
  },
  {
    productId: "jTYgOk",
    productName: "夢姬立牌",
    price: 200,
    variants: [
      {
        variantId: "jTYgOk_0",
        name: "夢姬站姿",
      },
    ],
    images: [hanakawaAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
  {
    productId: "KO3HsE",
    productName: "夜神立牌",
    price: 200,
    variants: [
      {
        variantId: "KO3HsE_0",
        name: "狼執事站姿",
      },
    ],
    images: [yagamiAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
  {
    productId: "kdlh8M",
    productName: "桑德斯立牌",
    price: 200,
    variants: [
      {
        variantId: "kdlh8M_0",
        name: "魔王坐姿",
      },
    ],
    images: [sandersAcrylicStand],
    details: ["尺寸：9X9公分", "材質：壓克力"],
  },
];

export default productsData;
