import elixirUILogo from "@/assets/elixir-ui-logo.webp";
import { getTranslation } from "@/features/i18n/services/get-translation.service";
import { Button, Link } from "@elixir-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./page.module.css";

export default async function HomePage() {
  const dict = await getTranslation();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          className={styles.logo}
          src={elixirUILogo}
          alt={dict.home.logo.alt}
        />
        <h1 className={styles.heading}>
          <span className={styles.primaryColored}>
            {dict.home.hero.heading.yourToolkit}
          </span>{" "}
          {dict.home.hero.heading.forCraftingExceptional}{" "}
          <span className={styles.warningColored}>
            {dict.home.hero.heading.userInterfaces}
          </span>
        </h1>
        <p className={styles.description}>
          <Link variant="text" href="#" color="primary">
            {dict.home.hero.description.elixirUI}
          </Link>{" "}
          {dict.home.hero.description.isA}
        </p>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            as={NextLink}
            href="/docs"
            size="lg"
            color="primary"
          >
            {dict.home.hero.cta.getStarted}
          </Button>
          <Button
            className={styles.button}
            as={NextLink}
            href="https://github.com/quibylix/elixir-ui"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="outlined"
            color="secondary"
          >
            {dict.home.hero.cta.viewOnGitHub}
          </Button>
        </div>
      </section>
    </main>
  );
}
