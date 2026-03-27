"use client";

import { Github, Linkedin, Mail, ChevronDown, Gamepad2 } from "lucide-react";
import { siteConfig, localize } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function HeroSection() {
  const { locale, t } = useLocale();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-accent/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Greeting */}
        <p className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-accent-light via-accent to-cyan-300 bg-clip-text text-transparent">
            {localize(siteConfig.name, locale)}
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary mb-6">
          {localize(siteConfig.title, locale)}
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          {localize(siteConfig.description, locale)}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 justify-center sm:justify-start">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            <Github size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href={siteConfig.itchio}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            <Gamepad2 size={20} />
            <span className="text-sm font-medium">itch.io</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-2 px-5 py-2.5 border border-accent/30 rounded-lg text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            <Mail size={20} />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
