import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en_US/translation.json'
import translationZH from './locales/zh_TW/translation.json'

const resources = {
    en_US: {
        translation: translationEN,
    },
    zh_TW: {
        translation: translationZH,
    }
}


i18n.use(initReactI18next).init({
    resources,
    lng: "zh_TW",
    fallbackLng: "en_US",
});