import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundColor: {
        bgSilver: "#F1F1F3",
        bgBrend: "#00AEDA",
        blackish: "#0E0F2C",
        blueBg: "#2E3192",
      },
      height: {
        "0.75": "3px",
      },
      colors: {
        bgBrend: "#00AEDA",
        sonia: "#00B6E4",
        ligtSilver: "#9F9FAB",
      },
      screens: {
        xs: "480px",

        sm: "640px",

        md: "768px",

        "md+": "896px",

        lg: "1024px",

        "lg+": "1192px",

        xl: "1280px",

        "2xl": "1536px",
      },
      borderRadius: {
        hundred: "100px",
        thirty: "30px",
        tFour: "24px",
        fifteen: "15px",
      },
      borderColor: {
        silver: "#F1F1F3",
        bgBrend: "#00AEDA",
      },
      boxShadow: {
        headerShadow: "0px 2px 32px 0px rgba(0, 0, 0, 0.08)",
        appShadow:
          "4px 1px 10px 0px rgba(15, 15, 15, 0.12), 17px 5px 18px 0px rgba(15, 15, 15, 0.10), 38px 11px 24px 0px rgba(15, 15, 15, 0.06), 68px 19px 28px 0px rgba(15, 15, 15, 0.02), 106px 30px 31px 0px rgba(15, 15, 15, 0.00)",
      },
    },
  },
  plugins: [],
};
export default config;
