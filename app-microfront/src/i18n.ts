import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const baseURL = `//${process.env.APP_HOST}${process.env.APP_PORT ? `:${process.env.APP_PORT}` : ''}`

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'pt-BR',
    whitelist: ['pt-BR', 'es', 'fr', 'en'],
    backend: {
      loadPath: `${baseURL}/locales/{{lng}}/{{ns}}.json`
    },
    cache: {
      enabled: false
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
