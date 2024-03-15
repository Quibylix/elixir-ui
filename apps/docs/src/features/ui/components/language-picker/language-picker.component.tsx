"use client";

import {
  LANGUAGES,
  LANGUAGE_FLAGS,
} from "@/features/i18n/constants/languages.constant";
import { Language } from "@/features/i18n/types/language.type";
import { Button } from "@elixir-ui/react";
import clsx from "clsx";
import { useLanguagePicker } from "./hooks/use-language-picker.hook";
import styles from "./language-picker.module.css";

export type LanguagePickerProps = {
  currentLanguage: Language;
};

export default function LanguagePicker({
  currentLanguage,
}: LanguagePickerProps) {
  const { displayDropdown, handleLanguageChange, openDropdown } =
    useLanguagePicker(currentLanguage);

  const dropdownMenuClassName = clsx(styles.dropdownMenu, {
    [styles.open]: displayDropdown,
  });

  return (
    <div className={styles.languagePicker}>
      <Button
        variant="text"
        onClick={openDropdown}
        className={styles.languageButton}
        size="sm"
      >
        <span>{LANGUAGE_FLAGS[currentLanguage]}</span>
        {currentLanguage}
      </Button>
      <ul className={dropdownMenuClassName}>
        {LANGUAGES.map(language => (
          <li key={language}>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleLanguageChange(language)}
              className={styles.languageButton}
              size="sm"
              disabled={language === currentLanguage}
            >
              <span>{LANGUAGE_FLAGS[language]}</span>
              {language}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
