import elixirUILogo from "@/assets/elixir-ui-logo.webp";
import { getTranslation } from "@/features/i18n/services/get-translation.service";
import { Link } from "@elixir-ui/react";
import Image from "next/image";
import styles from "./brand.module.css";

export default async function Brand() {
  const dict = await getTranslation();

  return (
    <Link variant="text" className={styles.brand} href="/">
      <Image src={elixirUILogo} width={50} alt={dict.home.logo.alt} />
    </Link>
  );
}
