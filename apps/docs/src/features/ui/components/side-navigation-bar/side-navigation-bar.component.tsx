import I18nLink from "@/features/i18n/components/i18n-link/i18n-link.component";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import { Link } from "@elixir-ui/react";
import styles from "./side-navigation-bar.module.css";
import { getSideNavigationBarSections } from "./utils/get-side-navigation-bar-sections.util";

export default async function SideNavigationBar() {
  const dict = await LanguageContext.dict;

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
                      as={I18nLink}
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
