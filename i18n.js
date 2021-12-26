import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Locales from './src/assets/locales';

const resources = {
  EN: { translation: { ...Locales.EN } },
  ES: { translation: { ...Locales.ES } },
};


i18n.use(initReactI18next).init({
  resources,
  lng: 'EN', 
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

