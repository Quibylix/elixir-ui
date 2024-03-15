import { Language } from "@/features/i18n/types/language.type";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { changeLanguageCookie } from "../actions/change-language-cookie.action";

export function useLanguagePicker(currentLanguage: Language) {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = async (language: Language) => {
    const pathnameLang = pathname.split("/")[1];

    if (pathnameLang === currentLanguage) {
      router.push(pathname.replace(`/${currentLanguage}`, `/${language}`));
    } else {
      await changeLanguageCookie(language);
      router.refresh();
    }
  };

  const openDropdown = () => {
    if (displayDropdown) return;

    setDisplayDropdown(true);

    document.addEventListener("click", function closeDropdown() {
      setDisplayDropdown(false);
      document.removeEventListener("click", closeDropdown);
    });
  };

  return {
    displayDropdown,
    handleLanguageChange,
    openDropdown,
  };
}
