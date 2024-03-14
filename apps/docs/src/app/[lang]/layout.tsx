import { LanguageContext } from "@/features/i18n/contexts/language.context";
import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export async function generateMetadata(): Promise<Metadata> {
  return (await LanguageContext.dict).home.metadata;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const lang = LanguageContext.lang;

  return (
    <html lang={lang}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
