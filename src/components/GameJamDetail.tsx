"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Users, Monitor } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { localize, assetPath, type GameJamEntry } from "@/lib/constants";

export function GameJamDetail({ entry }: { entry: GameJamEntry }) {
  const { locale, t } = useLocale();

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#gamejams"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">{t.detail.backToHome}</span>
        </Link>

        {/* Cover Image */}
        {entry.coverImage && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={assetPath(entry.coverImage)}
              alt={entry.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-accent-light via-accent to-cyan-300 bg-clip-text text-transparent">
          {entry.title}
        </h1>

        {/* Jam Name */}
        <p className="text-accent/70 text-sm font-mono mb-2">
          {t.detail.jam}: {entry.jam}
        </p>

        {/* Tagline */}
        {entry.tagline && (
          <p className="text-text-secondary text-lg italic mb-8">
            &ldquo;{localize(entry.tagline, locale)}&rdquo;
          </p>
        )}

        {!entry.tagline && <div className="mb-8" />}

        {/* Description Card */}
        <div className="bg-bg-card border border-white/5 rounded-xl p-6 sm:p-8 mb-6">
          <p className="text-text-secondary leading-relaxed">
            {localize(entry.description, locale)}
          </p>
        </div>

        {/* Full Description (enriched entries) */}
        {entry.fullDescription && (
          <div className="bg-bg-card border border-white/5 rounded-xl p-6 sm:p-8 mb-6">
            <p className="text-text-secondary leading-relaxed">
              {localize(entry.fullDescription, locale)}
            </p>
          </div>
        )}

        {/* Screenshots & Video */}
        {(entry.screenshots?.length || entry.youtubeId) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {entry.screenshots?.map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5"
              >
                <Image
                  src={assetPath(src)}
                  alt={`${entry.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {entry.youtubeId && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5">
                <iframe
                  src={`https://www.youtube.com/embed/${entry.youtubeId}`}
                  title={`${entry.title} playthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}
          </div>
        )}

        {/* Meta Info */}
        {(entry.creators || entry.platform) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {entry.creators && (
              <div className="bg-bg-card border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Users size={16} />
                  <h3 className="text-sm font-semibold">{t.detail.creators}</h3>
                </div>
                <p className="text-text-secondary text-sm">
                  {entry.creators.join(", ")}
                </p>
              </div>
            )}
            {entry.platform && (
              <div className="bg-bg-card border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Monitor size={16} />
                  <h3 className="text-sm font-semibold">{t.detail.platform}</h3>
                </div>
                <p className="text-text-secondary text-sm">{entry.platform}</p>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
            {t.detail.tags}
          </h3>
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Play Link */}
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
        >
          <ExternalLink size={18} />
          {t.detail.playOnItch}
        </a>
      </div>
    </section>
  );
}
