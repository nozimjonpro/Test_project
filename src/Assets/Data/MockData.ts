import * as img from "../Images";

export const navbarData = [
  { id: 1, title: "Restoran", path: "#restaurant" },
  { id: 2, title: "Mashhurlar", path: "#famous" },
  { id: 3, title: "Meditsina", path: "#medicine" },
  // { id: 4, title: "Avto", path: "#auto" },
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

  // {
  //   id: 4,
  //   type: "auto",
  //   image: img.Auto,
  //   icon: img.AutoIcon,
  //   heading: "1SONiA Avto",
  //   text: "Mobil ilova orqali avtoservis va mashina ustalari qabuliga joy band qiling. Avto bo’limida 2 ta bo’lim mavjud:",
  //   sectionBg: {},
  //   styles: {
  //     container: {
  //       flexDirection: "row-reverse",
  //     },
  //   },
  //   nav: [
  //     { id: 1, title: "ustalar" },
  //     { id: 2, title: "avtoservislar" },
  //   ],
  // },
];

export const images: ImageType[] = [
  {
    id: 1,
    image: img.HomeScreen,
    styles: {
      zIndex: 9,
      left: "50%",
      transform: "translateX(-50%) translateY(-100px)",
    },
    variants: { hidden: {}, visible: {} },
    tailwind: "",
  },
  {
    id: 2,
    image: img.Restaurant,
    styles: { zIndex: 8, right: "50%", transform: "translateY(-50px)" },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 3,
    image: img.Famous,
    styles: { zIndex: 7, left: "50%", transform: "translateY(-50px)" },
    variants: { hidden: {}, visible: {} },
  },
  {
    id: 4,
    image: img.Medicine,
    styles: { zIndex: 6, right: "65%" },
    variants: { hidden: {}, visible: {} },
    tailwind: "sm:block hidden",
  },
  {
    id: 5,
    image: img.Auto,
    styles: { zIndex: 5, left: "65%" },
    variants: { hidden: {}, visible: {} },
    tailwind: "sm:block hidden",
  },
];

export const footerBtns: MainButtonProps[] = [
  {
    id: 1,
    title: "+998 55 510 60 00",
    href: "+998 55 510 60 00",
    tel: true,
    variant: "black",
    styleClass:
      "lg+:text-3xl lg:text-2xl md:text-xl sm:text-xl xs:text-lg py-4 sm:p-4",
  },
  {
    id: 2,
    title: "info@1sonia.uz",
    variant: "black",
    href: "#",
    styleClass:
      "lg+:text-3xl lg:text-2xl md:text-xl sm:text-xl xs:text-lg py-4 sm:p-4",
  },
  {
    id: 3,
    title: "Toshkent, Chilonzor tumani, kichik xalqa ko’chasi, 16",
    variant: "black",
    href: "#",
    styleClass:
      "balance__text lg:text-xl md+:text-lg md:text-sm sm:text-lg px-1 py-1",
  },
];

export const socialData: SocialMediaDataType[] = [
  {
    id: 1,
    icon: img.Facebook,
    name: "facebook",
    href: "https://www.facebook.com/1soniauz",
  },
  {
    id: 2,
    icon: img.YouTube,
    name: "youtube",
    href: "https://www.youtube.com/@1sonia_uz",
  },
  {
    id: 3,
    icon: img.Instagram,
    name: "instagram",
    href: "https://www.instagram.com/1sonia_uz/",
  },
  {
    id: 4,
    icon: img.Linkedin,
    name: "linkedin",
    href: "https://www.linkedin.com/company/1sonia/mycompany/",
  },
  {
    id: 5,
    icon: img.Telegram,
    name: "telegram",
    href: "https://t.me/uz_1sonia",
  },
];
