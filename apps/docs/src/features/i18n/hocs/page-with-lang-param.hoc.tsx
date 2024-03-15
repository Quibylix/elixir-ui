import { LANGUAGES } from "../constants/languages.constant";
import { LanguageContext } from "../contexts/language.context";
import { getTranslation } from "../services/get-translation.service";
import { Language } from "../types/language.type";

export default function pageWithLangParam<T>(
  Page: (props: T) => JSX.Element | Promise<JSX.Element>,
) {
  return (props: T) => {
    if (typeof props !== "object") {
      throw new Error("props must be an object");
    }

    if (props === null) {
      throw new Error("props must not be null");
    }

    if (!("params" in props)) {
      throw new Error("props must have a params property");
    }

    const params = props.params;

    if (typeof params !== "object") {
      throw new Error("props.params must be an object");
    }

    if (params === null) {
      throw new Error("props.params must not be null");
    }

    if (!("lang" in params)) {
      throw new Error("props must have a lang property");
    }

    const lang = params.lang;

    if (typeof lang !== "string") {
      throw new Error("props.lang must be a string");
    }

    if (!(LANGUAGES as readonly string[]).includes(lang)) {
      throw new Error("props.lang must be a valid language");
    }

    LanguageContext.lang = lang as Language;
    LanguageContext.dict = getTranslation(lang as Language);

    return Page(props);
  };
}
