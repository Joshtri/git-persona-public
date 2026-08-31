"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { STORAGE_KEY } from "@/lib/i18n/config";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ["en", "id"].includes(saved) && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
