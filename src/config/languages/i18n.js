import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from './english.json'
import french from './french.json'
import german from './german.json'
import hindi from './hindi.json'
import italalian from './italalian.json'
import japanees from './japanees.json'
import mandarin from './mandarin.json'
import portuguese from './portuguese.json'
import russian from './russian.json'
import spanish from './spanish.json'
import arabic from './arabic.json'

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources: {
        en: english,
        fr: french,
        ge: german,
        hi: hindi,
        it: italalian,
        ja: japanees,
        ma: mandarin,
        po: portuguese,
        ru: russian,
        sp: spanish,
        ar: arabic
    },
    react:{
        useSuspense: false
    }
})

export default i18next;