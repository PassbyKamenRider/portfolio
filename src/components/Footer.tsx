"use client";

import { siteConfig, localize } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-muted text-sm">
          {t.footer.copyright} {new Date().getFullYear()} {localize(siteConfig.name, locale)}.
        </p>
      </div>
    </footer>
  );
}
