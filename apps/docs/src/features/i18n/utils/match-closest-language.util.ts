import parser from "accept-language-parser";
import { DEFAULT_LANGUAGE, LANGUAGES } from "../constants/languages.constant";
import { Language } from "../types/language.type";

export function matchClosestLanguage(acceptLanguage: string) {
  const languages = parser.parse(acceptLanguage);

  const matchedLanguages = languages.filter(language =>
    (LANGUAGES as readonly string[]).includes(language.code),
  );

  if (matchedLanguages.length) {
    return matchedLanguages[0].code as Language;
  }

  return DEFAULT_LANGUAGE;
}
