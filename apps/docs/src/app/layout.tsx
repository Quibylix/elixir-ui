import "./globals.css";

import { getTranslation } from "@/features/i18n/services/get-translation.service";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getTranslation();

  return dict.home.metadata;
}

const DEFAULT_LANGUAGE = "en";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LANGUAGE}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
