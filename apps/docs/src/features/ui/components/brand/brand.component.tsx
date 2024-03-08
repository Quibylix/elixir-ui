import elixirUILogo from "@/assets/elixir-ui-logo.webp";
import { Link } from "@elixir-ui/react";
import Image from "next/image";
import styles from "./brand.module.css";

export default function Brand() {
  return (
    <Link variant="text" className={styles.brand} href="/">
      <Image src={elixirUILogo} width={50} alt="Elixir UI Logo" />
    </Link>
  );
}
