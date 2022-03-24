export const sliderItems = [
  {
    id: 1,
    img: "/img/product/pc/samsung/db400_2022.png",
    title: "삼성 DB400 Tower",
    color: ["black"],
    price: 1000000,
  },
  {
    id: 2,
    img: "/img/product/pc/samsung/dm500sda_white_2022.png",
    title: "삼성 DB400 Slim",
    color: ["white", "black"],
    price: 1000000,
  },
  {
    id: 3,
    img: "/img/product/pc/samsung/dm530_2022.png",
    title: "삼성 DM530 일체형",
    color: ["grey"],
    price: 1000000,
  },
  {
    id: 4,
    img: "/img/product/pc/lg/a80gv_2022.png",
    title: "LG A80 Slim",
    color: ["white"],
    price: 1000000,
  },
  {
    id: 5,
    img: "/img/product/pc/lg/b80gv_2022.png",
    title: "LG B80 Tower",
    color: ["black"],
    price: 1000000,
  },
  {
    id: 6,
    img: "/img/product/pc/lg/27v70n_2022.png",
    title: "LG 일체형",
    color: ["grey"],
    price: 1000000,
  },
  {
    id: 5,
    img: "/img/product/pc/lg/b80gv_2022.png",
    title: "LG B80 Tower",
    color: ["black"],
    price: 1000000,
  },
  {
    id: 6,
    img: "/img/product/pc/lg/27v70n_2022.png",
    title: "LG 일체형",
    color: ["grey"],
    price: 1000000,
  },
];

export const OptionGroupData = [
  {
    id: 1,
    groupTitle: "메모리",
    subComment: "메모리 역할에 대해 더 알아볼까요?",
    subCommentUrl: "",
  },
  {
    id: 2,
    groupTitle: "저장장치(SSD)",
    subComment: "SSD 역할에 대해 더 알아볼까요?",
  },
];

export const OptionItemData = [
  { idx: 1, title: "최종 8G 메모리(기본)", value: 0, refGroup: 1 },
  {
    idx: 2,
    title: "최종 16G 메모리(8G 증설)",
    value: 50000,
    refGroup: 1,
  },
  { idx: 3, title: "최종 256G SSD(기본)", value: 0, refGroup: 2 },
  { idx: 4, title: "최종 500G SSD(교체)", value: 60000, refGroup: 2 },
  { idx: 5, title: "최종 1TB SSD(교체)", value: 180000, refGroup: 2 },
];
export const OptionData = [
  {
    id: 1,
    groupTitle: "메모리",
    subComment: "메모리 역할에 대해 더 알아볼까요?",
    subCommentUrl: "",
    options: [
      { idx: 11, title: "최종 8G 메모리(기본)", value: 0, checked: true },
      {
        idx: 12,
        title: "최종 16G 메모리(8G 증설)",
        value: 50000,
        checked: false,
      },
    ],
  },
  {
    id: 2,
    groupTitle: "저장장치(SSD)",
    subComment: "SSD 역할에 대해 더 알아볼까요?",
    options: [
      { idx: 21, title: "최종 256G SSD(기본)", value: 0, checked: true },
      { idx: 22, title: "최종 500G SSD(교체)", value: 60000, checked: false },
      { idx: 23, title: "최종 1TB SSD(교체)", value: 180000, checked: false },
    ],
  },
];
