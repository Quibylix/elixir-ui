import { cache } from "react";
import { DEFAULT_LANGUAGE } from "../constants/languages.constant";
import { getTranslation } from "../services/get-translation.service";

export const getLanguageContext = cache(() => ({
  lang: DEFAULT_LANGUAGE,
  dict: getTranslation(DEFAULT_LANGUAGE),
}));

export const LanguageContext = {
  get lang() {
    return getLanguageContext().lang;
  },
  set lang(lang: string) {
    getLanguageContext().lang = lang;
  },
  get dict() {
    return getLanguageContext().dict;
  },
  set dict(dict: ReturnType<typeof getTranslation>) {
    getLanguageContext().dict = dict;
  },
};
