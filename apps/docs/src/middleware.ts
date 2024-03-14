import { NextRequest, NextResponse } from "next/server";
import {
  ACCEPT_LANGUAGE_HEADER_NAME,
  LANGUAGES,
  LANGUAGE_COOKIE_NAME,
} from "./features/i18n/constants/languages.constant";
import { matchClosestLanguage } from "./features/i18n/utils/match-closest-language.util";

export function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  const lang = pathname.split("/")[1];

  if ((LANGUAGES as Readonly<string[]>).includes(lang)) {
    return NextResponse.next();
  }

  const langCookie = req.cookies.get(LANGUAGE_COOKIE_NAME)?.value;
  if (langCookie && (LANGUAGES as Readonly<string[]>).includes(langCookie)) {
    return NextResponse.rewrite(`${origin}/${langCookie}${pathname}`);
  }

  const closestLanguage = matchClosestLanguage(
    req.headers.get(ACCEPT_LANGUAGE_HEADER_NAME) ?? "",
  );

  const response = NextResponse.rewrite(
    `${origin}/${closestLanguage}${pathname}`,
  );
  response.cookies.set(LANGUAGE_COOKIE_NAME, closestLanguage, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
