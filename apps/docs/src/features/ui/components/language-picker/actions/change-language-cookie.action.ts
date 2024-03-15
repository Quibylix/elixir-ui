"use server";

import { LANGUAGE_COOKIE_NAME } from "@/features/i18n/constants/languages.constant";
import { Language } from "@/features/i18n/types/language.type";
import { cookies } from "next/headers";

export async function changeLanguageCookie(newLanguage: Language) {
  cookies().set(LANGUAGE_COOKIE_NAME, newLanguage, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}
