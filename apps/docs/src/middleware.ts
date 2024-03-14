import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
} from "./features/i18n/constants/languages.constant";

export function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  let lang = pathname.split("/")[1];

  if (lang === DEFAULT_LANGUAGE) {
    return NextResponse.redirect(
      `${origin}${pathname.replace(`/${DEFAULT_LANGUAGE}`, "")}`,
    );
  }

  if ((LANGUAGES as Readonly<string[]>).includes(lang)) {
    return NextResponse.next();
  }

  lang = DEFAULT_LANGUAGE;

  return NextResponse.rewrite(`${origin}/${lang}${pathname}`);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
