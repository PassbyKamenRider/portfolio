"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2 } from "lucide-react";
import { gameJamEntries, localize } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function GameJamSection() {
  const { locale, t } = useLocale();

  return (
    <section id="gamejams" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Gamepad2 size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">{t.sections.gameJams}</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gameJamEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/gamejams/${entry.slug}`}
              className="group bg-bg-card border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 block"
            >
              {/* Cover Image */}
              {entry.coverImage && (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={entry.coverImage}
                    alt={entry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-5">
                {/* Header */}
                <h3 className="text-base font-semibold group-hover:text-accent transition-colors leading-tight mb-2">
                  {entry.title}
                </h3>

                {/* Jam Name */}
                <p className="text-accent/70 text-xs font-mono mb-3">
                  {entry.jam}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {localize(entry.description, locale)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
