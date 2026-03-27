"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { localize, type Project } from "@/lib/constants";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">{t.detail.backToHome}</span>
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-light via-accent to-cyan-300 bg-clip-text text-transparent">
          {localize(project.title, locale)}
        </h1>

        {/* Role & Period */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-text-muted text-sm font-mono mb-8">
          <span>
            {t.detail.role}: {localize(project.role, locale)}
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <span>
            {t.detail.period}: {localize(project.period, locale)}
          </span>
        </div>

        {/* Description */}
        <div className="bg-bg-card border border-white/5 rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            {localize(project.description, locale)}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
            {t.detail.tags}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              <ExternalLink size={18} />
              {t.detail.visitSite}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Github size={18} />
              {t.detail.viewSource}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
