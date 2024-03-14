import { Language } from "../types/language.type";

export async function getTranslation(lang: Language) {
  switch (lang) {
    case "en":
      return (await import("../translations/en.json")).default;
    case "es":
      return (await import("../translations/es.json")).default;
  }
}
