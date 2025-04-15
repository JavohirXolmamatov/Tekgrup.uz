import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// Lokal tarjimalar
import translationUz from "./locales/uz.json";
import translationEn from "./locales/en.json";
import translationRu from "./locales/ru.json";

const resources = {
  uz: {
    translation: translationUz,
  },
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n
  .use(LanguageDetector) // brauzer tilini aniqlaydi
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // agar aniqlanmasa, uz tiliga tushadi
    interpolation: {
      escapeValue: false, // React uchun kerak emas
    },
  });

export default i18n;
