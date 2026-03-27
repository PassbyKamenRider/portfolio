"use client";

import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { projects, localize } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Code2 size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">{t.sections.projects}</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group bg-bg-card border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-lg font-semibold group-hover:text-accent transition-colors leading-tight pr-2"
                >
                  {localize(project.title, locale)}
                </Link>
                <div className="flex items-center gap-2 shrink-0">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label={`Project site for ${localize(project.title, locale)}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Role & Period */}
              <p className="text-text-muted text-xs font-mono mb-3">
                {localize(project.role, locale)} &middot;{" "}
                {localize(project.period, locale)}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {localize(project.description, locale)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
