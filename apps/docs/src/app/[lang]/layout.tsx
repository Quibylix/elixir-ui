import "./globals.css";

import { getTranslation } from "@/features/i18n/services/get-translation.service";
import { Language } from "@/features/i18n/types/language.type";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getTranslation();

  return dict.home.metadata;
}

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Language;
  };
}>;

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
