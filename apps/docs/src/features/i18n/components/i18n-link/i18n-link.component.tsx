"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES } from "../../constants/languages.constant";

type I18nLinkProps = React.ComponentProps<typeof NextLink>;

export default function I18nLink({ href, ...props }: I18nLinkProps) {
  const pathname = usePathname();

  const lang = pathname.split("/")[1];

  const isExternal = href.toString().startsWith("http");

  if (isExternal) {
    return <NextLink href={href} {...props} />;
  }

  if (!(LANGUAGES as readonly string[]).includes(lang)) {
    return <NextLink href={href} {...props} />;
  }

  return <NextLink href={`/${lang}${href}`} {...props} />;
}
