import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import pt from "./lang/pt.json";
import en from "./lang/en.json";
import span from "./lang/span.json";

const resources = {
    pt,
    en,
    span
}

i18n.use(initReactI18next).init({
    resources,
    lng: "pt",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;