import { cache } from "react";
import { DEFAULT_LANGUAGE } from "../constants/languages.constant";
import { getTranslation } from "../services/get-translation.service";
import { Language } from "../types/language.type";

export const getLanguageContext = cache(() => ({
  lang: DEFAULT_LANGUAGE as Language,
  dict: getTranslation(DEFAULT_LANGUAGE),
}));

export const LanguageContext = {
  get lang() {
    return getLanguageContext().lang;
  },
  set lang(lang: Language) {
    getLanguageContext().lang = lang;
  },
  get dict() {
    return getLanguageContext().dict;
  },
  set dict(dict: ReturnType<typeof getTranslation>) {
    getLanguageContext().dict = dict;
  },
};
