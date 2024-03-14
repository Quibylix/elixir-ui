import elixirUILogo from "@/assets/elixir-ui-logo.webp";
import I18nLink from "@/features/i18n/components/i18n-link/i18n-link.component";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import { Link } from "@elixir-ui/react";
import Image from "next/image";
import styles from "./brand.module.css";

export default async function Brand() {
  const dict = await LanguageContext.dict;

  return (
    <Link as={I18nLink} variant="text" className={styles.brand} href="/">
      <Image src={elixirUILogo} width={50} alt={dict.home.logo.alt} />
    </Link>
  );
}
