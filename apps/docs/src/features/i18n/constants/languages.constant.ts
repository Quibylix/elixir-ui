export const LANGUAGES = ["en", "es"] as const;
export const DEFAULT_LANGUAGE = "en";
export const LANGUAGE_COOKIE_NAME = "lang";
export const ACCEPT_LANGUAGE_HEADER_NAME = "accept-language";

export const LANGUAGE_FLAGS: Record<(typeof LANGUAGES)[number], string> = {
  en: "🇺🇸",
  es: "🇪🇸",
};
