export type KnowledgeItem = {
  id: string;
  name: string;
  desc?: string;
  img?: string;
  url: string;
};

export type NavItem = {
  name: string;
  children?: { name: string; url: string }[] | KnowledgeItem[];
  url?: string;
};

const kHBCDMenu: KnowledgeItem[] = [
  {
    id: "hbcd1",
    name: "เกี่ยวกับ HBCD",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ HBCD",
    img: "/kmMenu/about.png",
    url: "/kHbcdAbout",
  },
  {
    id: "hbcd2",
    name: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    url: "/kStockholms",
  },
  {
    id: "hbcd3",
    name: "HBCD Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร HBCD ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    url: "/kHbcdGuideline",
  },
  {
    id: "hbcd4",
    name: "เอกสารการอบรม HBCD",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ HBCD",
    img: "/kmMenu/event.png",
    url: "/kHbcdEventDocs",
  },
];

const kPFASMenu: KnowledgeItem[] = [
  {
    id: "pfas1",
    name: "เกี่ยวกับ PFAS",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ PFAS",
    img: "/kmMenu/about.png",
    url: "/kPfasAbout",
  },
  {
    id: "pfas2",
    name: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    url: "/kStockholms",
  },
  {
    id: "pfas3",
    name: "PFAS Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร PFAS ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    url: "/kPfasGuideline",
  },
  {
    id: "pfas4",
    name: "เอกสารการอบรม PFAS",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ PFAS",
    img: "/kmMenu/event.png",
    url: "/kPfasEventDocs",
  },
];

const itemsNav: NavItem[] = [
  { name: "Home", url: "/" },
  {
    name: "Knowledge HBCD",
    children: kHBCDMenu,
  },
  {
    name: "Knowledge PFAS",
    children: kPFASMenu,
  },
  {
    name: "DBs",
    children: [
      { name: "HBCD", url: "/dbHBCD" },
      { name: "PFAS", url: "/dbPFAS" },
    ],
  },
];

export default itemsNav;
export { kHBCDMenu, kPFASMenu };
