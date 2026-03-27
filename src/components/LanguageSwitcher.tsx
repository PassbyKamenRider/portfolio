"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  const toggle = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-accent border border-white/10 hover:border-accent/30 rounded-lg transition-all duration-200 cursor-pointer"
      aria-label="Switch language"
    >
      <Globe size={16} />
      <span>{t.lang.switch}</span>
    </button>
  );
}
