import {
  Exo_2,
  Roboto,
  Oswald,
  Raleway,
  Poppins,
  Lato,
  Montserrat,
  Inter,
  Rubik,
  Anek_Bangla,
  Nunito,
  Open_Sans,
  Artifika,
  Playfair_Display,
  Lora,
  Merriweather,
  Josefin_Sans,
  Boogaloo,
  Vollkorn,
  Fira_Sans,
  Outfit,
  Bricolage_Grotesque,
  Instrument_Serif,
  Work_Sans,
  
} from "next/font/google";

import LocalFont from "next/font/local";

const larken = LocalFont({
  src: "../../public/fonts/larken/fonnts.com-Larken_Regular.otf",
  weight: "400",
  variable: "--font-heading",
});
export const logoFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],

  display: "swap",
  style: "normal",
  preload: true,
});
// export const headingFont = larken;
export const headingFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
  style: "normal",
  preload: true,
});

export const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});
