import elixirUILogo from "@/assets/elixir-ui-logo.webp";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import { Link } from "@elixir-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./brand.module.css";

export default async function Brand() {
  const dict = await LanguageContext.dict;

  return (
    <Link as={NextLink} variant="text" className={styles.brand} href="/">
      <Image src={elixirUILogo} width={50} alt={dict.home.logo.alt} />
    </Link>
  );
}
