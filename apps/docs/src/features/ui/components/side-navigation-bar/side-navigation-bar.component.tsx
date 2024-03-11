import { getTranslation } from "@/features/i18n/services/get-translation.service";
import { Link } from "@elixir-ui/react";
import NextLink from "next/link";
import styles from "./side-navigation-bar.module.css";
import { getSideNavigationBarSections } from "./utils/get-side-navigation-bar-sections.util";

export default async function SideNavigationBar() {
  const dict = await getTranslation();

  return (
    <aside className={styles.aside}>
      <nav>
        {getSideNavigationBarSections(dict.sideNavigationBar).map(
          (section, index) => (
            <section className={styles.section} key={index}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className={styles.link}
                      as={NextLink}
                      href={link.path}
                      color="secondary"
                      fullWidth
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </nav>
    </aside>
  );
}
