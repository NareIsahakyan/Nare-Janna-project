import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./local/en.json";
import ru from "./local/ru.json";

i18n
.use(initReactI18next)
// .use(LanguageDetector)
.init({
    debug:true,
    fallbackLng:'ru',
    resources:{
en,
ru,
hy
    }
});
export default i18n;