import i18next, { InterpolationOptions } from "i18next";
import { initReactI18next } from "react-i18next";

import { format as currencyFormat } from "./monetary";

import resources from "./resources";

const interpolation: InterpolationOptions = {
  format: (value, format, lng = "en") => {
    if (format === "currency") return currencyFormat(lng, value);

    return value;
  }
};

i18next.use(initReactI18next).init({
  lng: "hi",
  interpolation,
  resources
});

export { useTranslation } from "react-i18next";
