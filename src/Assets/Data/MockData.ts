import * as img from "../Images";

export const navbarData = [
  { id: 1, title: "Restoran", path: "#restaurant" },
  { id: 2, title: "Mashhurlar", path: "#famous" },
  { id: 3, title: "Meditsina", path: "#medicine" },
  { id: 4, title: "Avto", path: "#auto" },
  { id: 5, title: "Aloqa", path: "#contact" },
];

export const langData = [
  { id: 1, title: "O'zbekcha", svg: img.UzbFlag, lang: "uz" },
  { id: 2, title: "Ruscha", svg: img.RussiaFlag, lang: "ru" },
  { id: 3, title: "Inglizcha", svg: img.EnglishFlag, lang: "en" },
];

export const sectionsData: UniversalProps[] = [
  {
    id: 1,
    type: "restaurant",
    image: img.Restaurant,
    icon: img.RestaurantIcon,
    heading: "1SONiA Restoran",
    text: "Mobil ilova orqali ovqatlanish joylarining manzili, taomlar, ularning narxlarini bilishingiz va oldindan joy band qilishingiz mumkin. Restoranda 4 ta bo’lim mavjud:",
    sectionBg: { backgroundColor: "#F1F1F3" },
    styles: {},
    nav: [
      { id: 1, title: "restaurant" },
      { id: 2, title: "kafe" },
      { id: 3, title: "milliy taom" },
      { id: 4, title: "to'yxona" },
    ],
  },

  {
    id: 2,
    type: "famous",
    image: img.Famous,
    icon: img.FamousIcon,
    heading: "1SONiA Mashhurlar",
    text: "Mobil ilova orqali mashhurlardan video tabrik oling va to’y xizmati uchun buyurtma bering",
    sectionBg: {},
    styles: {
      container: {
        flexDirection: "row-reverse",
      },
    },
    nav: null,
  },

  {
    id: 3,
    type: "medicine",
    image: img.Medicine,
    icon: img.MedicineIcon,
    heading: "1SONiA Meditsina",
    text: "Mobil ilova orqali shifokorlar va klinika qabuliga onlayn tarzda yozilishingiz mumkin. Meditsinada 2 ta bo’lim mavjud:",
    sectionBg: { backgroundColor: "#F1F1F3" },
    styles: {},
    nav: [
      { id: 1, title: "shifokorlar" },
      { id: 2, title: "klinikalar" },
    ],
  },

  {
    id: 4,
    type: "auto",
    image: img.Auto,
    icon: img.AutoIcon,
    heading: "1SONiA Avto",
    text: "Mobil ilova orqali avtoservis va mashina ustalari qabuliga joy band qiling. Avto bo’limida 2 ta bo’lim mavjud:",
    sectionBg: {},
    styles: {
      container: {
        flexDirection: "row-reverse",
      },
    },
    nav: [
      { id: 1, title: "ustalar" },
      { id: 2, title: "avtoservislar" },
    ],
  },
];

export const images: ImageType[] = [
  {
    id: 1,
    image: img.HomeScreen,
    styles: {
      zIndex: 10,
      left: "50%",
      transform: "translateX(-50%) translateY(-100px)",
    },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 2,
    image: img.Restaurant,
    styles: { zIndex: 9, right: "50%", transform: "translateY(-50px)" },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 3,
    image: img.Famous,
    styles: { zIndex: 8, left: "50%", transform: "translateY(-50px)" },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 4,
    image: img.Medicine,
    styles: { zIndex: 7, right: "65%" },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 5,
    image: img.Auto,
    styles: { zIndex: 6, left: "65%" },
    variants: { hidden: {}, visible: {} },
  },
];
