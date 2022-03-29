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
    id: 7,
    img: "/img/product/pc/lg/b80gv_2022.png",
    title: "LG B80 Tower2",
    color: ["black"],
    price: 1000000,
  },
  {
    id: 8,
    img: "/img/product/pc/lg/27v70n_2022.png",
    title: "LG 일체형2",
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
        title: "최종 16G 메모리(8G 증설) + 50,000원",
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
      {
        idx: 22,
        title: "최종 500G SSD(교체) + 60,000원",
        value: 60000,
        checked: false,
      },
      {
        idx: 23,
        title: "최종 1TB SSD(교체) + 180,000원",
        value: 180000,
        checked: false,
      },
    ],
  },
  {
    id: 3,
    groupTitle: "저장장치(HDD)",
    subComment: "HDD가 꼭 필요한가요?",
    options: [
      { idx: 31, title: "최종 1TB HDD(기본)", value: 0, checked: true },
      {
        idx: 32,
        title: "최종 2TB HDD(교체) + 80,000원",
        value: 80000,
        checked: false,
      },
      {
        idx: 33,
        title: "최종 4TB HDD(교체) + 210,000원",
        value: 210000,
        checked: false,
      },
    ],
  },
  {
    id: 4,
    groupTitle: "그래픽카드(CPU)",
    subComment: "그래픽카드에 대해 더 알아볼까요?",
    options: [
      { idx: 41, title: "Intel Graphics(기본)", value: 0, checked: true },
      {
        idx: 42,
        title: "nVidia GTX1650(추가) + 280,000원",
        value: 280000,
        checked: false,
      },
    ],
  },
];

export const RadarData = [
  {
    taste: "fruity",
    chardonay: 117,
    carmenere: 27,
    syrah: 64,
  },
  {
    taste: "bitter",
    chardonay: 32,
    carmenere: 48,
    syrah: 21,
  },
  {
    taste: "heavy",
    chardonay: 31,
    carmenere: 110,
    syrah: 38,
  },
  {
    taste: "strong",
    chardonay: 50,
    carmenere: 88,
    syrah: 102,
  },
  {
    taste: "sunny",
    chardonay: 44,
    carmenere: 54,
    syrah: 72,
  },
];

export const MenuArray = [
  { id: 1, title: "데스트탑", url: "/desktop" },
  { id: 2, title: "노트북", url: "/notebook" },
  { id: 3, title: "모니터", url: "/monitor" },
  { id: 4, title: "악세서리", url: "/acc" },
  { id: 5, title: "고객지원", url: "/help" },
];

export const ModelSpec = [
  {
    id: 1,
    img: "/img/product/laptop/lg/gram15_2022.png",
    color: [{ id: 1, code: "white", title: "화이트" }],
    bigCatecory: "LG 노트북",
    category: "gram_15_22H1",
    modelName: "15인치 그램 2022년",
    modelCode: "15Z95N-G.AP55ML",
    price: 1650000,
    spec: [
      {
        id: 1,
        title: "그램15 i5",
        titleComment: "(4코어 4쓰레드 2.1GHz)",
        isThumb: true,
        refModelId: "1",
      },
      {
        id: 2,
        title: "Intel Core i5 1135G7",
        titleComment: "프로세서",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 3,
        title: "DDR4 16G",
        titleComment: "메모리",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 4,
        title: "256G PCIe NVMe",
        titleComment: "저장공간",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 5,
        title: "Intel Iris Xe",
        titleComment: "그래픽 프로세서",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 6,
        title: "15인치 FullHD IPS",
        titleComment: "디스플레이",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 7,
        title: "Wi-Fi6 AX201",
        titleComment: "무선통신",
        isThumb: false,
        refModelId: "1",
      },
      {
        id: 8,
        title: "윈도우10 프로",
        titleComment: "운영체제",
        isThumb: false,
        refModelId: "1",
      },
    ],
    options: [
      {
        id: 1,
        groupTitle: "저장장치(SSD)",
        subComment: "SSD 역할에 대해 더 알아볼까요?",
        options: [
          { idx: 11, title: "최종 256G SSD(기본)", value: 0, checked: true },
          {
            idx: 12,
            title: "최종 500G SSD(500G로 교체)",
            value: 80000,
            checked: false,
          },
          {
            idx: 13,
            title: "최종 1TB SSD(1TB로 교체)",
            value: 180000,
            checked: false,
          },
        ],
      },
      {
        id: 2,
        groupTitle: "저장장치(SSD추가)",
        subComment: "추가 장착이 필요한가요?",
        options: [
          { idx: 21, title: "다음에 고려(기본)", value: 0, checked: true },
          {
            idx: 22,
            title: "500G SSD (추가장착)",
            value: 80000,
            checked: false,
          },
          {
            idx: 23,
            title: "1TB SSD (추가장착)",
            value: 210000,
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    img: "/img/product/laptop/lg/gram15_2022.png",
    bigCatecory: "LG 노트북",
    color: [{ id: 1, code: "white", title: "화이트" }],
    category: "gram_15_22H1",
    modelName: "15인치 그램 2022년",
    modelCode: "15Z95N-G.AP79ML",
    price: 1900000,
    spec: [
      {
        id: 1,
        title: "그램15 i7",
        titleComment: "(4코어 4쓰레드 2.3GHz)",
        isThumb: true,
        refModelId: "2",
      },
      {
        id: 2,
        title: "Intel Core i7 1165G7",
        titleComment: "프로세서",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 3,
        title: "DDR4 16G",
        titleComment: "메모리",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 4,
        title: "256G PCIe NVMe",
        titleComment: "저장공간",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 5,
        title: "Intel Iris Xe",
        titleComment: "그래픽 프로세서",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 6,
        title: "15인치 FullHD IPS",
        titleComment: "디스플레이",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 7,
        title: "Wi-Fi6 AX201",
        titleComment: "무선통신",
        isThumb: false,
        refModelId: "2",
      },
      {
        id: 8,
        title: "윈도우10 프로",
        titleComment: "운영체제",
        isThumb: false,
        refModelId: "2",
      },
    ],
    options: [
      {
        id: 1,
        groupTitle: "저장장치(SSD)",
        subComment: "SSD 역할에 대해 더 알아볼까요?",
        options: [
          { idx: 21, title: "최종 256G SSD(기본)", value: 0, checked: true },
          {
            idx: 22,
            title: "최종 500G SSD(500G로 교체)",
            value: 80000,
            checked: false,
          },
          {
            idx: 23,
            title: "최종 1TB SSD(1TB로 교체)",
            value: 180000,
            checked: false,
          },
        ],
      },
      {
        id: 2,
        groupTitle: "저장장치(SSD추가)",
        subComment: "추가 장착이 필요한가요?",
        options: [
          { idx: 21, title: "다음에 고려(기본)", value: 0, checked: true },
          {
            idx: 22,
            title: "최종 756G SSD(500G 추가)",
            value: 80000,
            checked: false,
          },
          {
            idx: 23,
            title: "최종 1.2TB SSD(1TB 추가)",
            value: 210000,
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    img: "/img/product/laptop/lg/gram15_2022.png",
    bigCatecory: "LG 노트북",
    color: [{ id: 1, code: "white", title: "화이트" }],
    category: "gram_15_22H1",
    modelName: "15인치 그램 2022년",
    modelCode: "15Z95N-G.AP79ML-CTO",
    price: 2100000,
    spec: [
      {
        id: 1,
        title: "그램15 i7",
        titleComment: "(4코어 4쓰레드 2.3GHz)",
        isThumb: true,
        refModelId: "3",
      },
      {
        id: 2,
        title: "Intel Core i7 1165G7",
        titleComment: "프로세서",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 3,
        title: "DDR4 16G",
        titleComment: "메모리",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 4,
        title: "500GG PCIe NVMe",
        titleComment: "저장공간",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 5,
        title: "Intel Iris Xe",
        titleComment: "그래픽 프로세서",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 6,
        title: "15인치 FullHD IPS",
        titleComment: "디스플레이",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 7,
        title: "Wi-Fi6 AX201",
        titleComment: "무선통신",
        isThumb: false,
        refModelId: "3",
      },
      {
        id: 8,
        title: "윈도우10 프로",
        titleComment: "운영체제",
        isThumb: false,
        refModelId: "3",
      },
    ],
    options: [
      {
        id: 1,
        groupTitle: "저장장치(SSD)",
        subComment: "SSD 역할에 대해 더 알아볼까요?",
        options: [
          { idx: 11, title: "최종 500G SSD(기본)", value: 0, checked: true },
          {
            idx: 12,
            title: "최종 1TB SSD(1TB로 교체)",
            value: 180000,
            checked: false,
          },
          {
            idx: 13,
            title: "최종 2TB SSD(2TB로 교체)",
            value: 340000,
            checked: false,
          },
        ],
      },
      {
        id: 2,
        groupTitle: "저장장치(SSD추가)",
        subComment: "추가 장착이 필요한가요?",
        options: [
          { idx: 21, title: "다음에 고려(기본)", value: 0, checked: true },
          {
            idx: 22,
            title: "최종 1TB SSD(500G 추가)",
            value: 80000,
            checked: false,
          },
          {
            idx: 23,
            title: "최종 1.5TB SSD(1TB 추가)",
            value: 210000,
            checked: false,
          },
          {
            idx: 24,
            title: "최종 2.5TB SSD(2TB 추가)",
            value: 410000,
            checked: false,
          },
        ],
      },
    ],
  },
];

export const ModelMiniSpec = [
  {
    id: 1,
    title: "Intel i5(4코어 8쓰레드 2.4GHz)",
    isThumb: true,
    refModelId: "",
  },

  { id: 2, title: "Intel Core i5 10400", isThumb: false, refModelId: "" },
  { id: 3, title: "DDR4 8G 메모리", isThumb: false, refModelId: "" },
  { id: 4, title: "256G SSD(NVMe) 저장공간", isThumb: false, refModelId: "" },
  {
    id: 5,
    title: "1TB HDD(SATA) 추가 저장공간",
    isThumb: false,
    refModelId: "",
  },
  { id: 6, title: "Intel Graphic GPU", isThumb: false, refModelId: "" },
  { id: 7, title: "DVD Super Multi Drive", isThumb: false, refModelId: "" },
  {
    id: 8,
    title: "108키 한영 키보드 / USB 마우스",
    isThumb: false,
    refModelId: "",
  },
  {
    id: 9,
    title: "USB 2.0 포트 2개, USB 3.0 포트 4개",
    isThumb: false,
    refModelId: "",
  },
  { id: 10, title: "Windows10 Pro", isThumb: false, refModelId: "" },
];
