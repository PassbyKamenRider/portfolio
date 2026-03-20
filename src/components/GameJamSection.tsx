import { Gamepad2, ExternalLink } from "lucide-react";
import { gameJamEntries } from "@/lib/constants";

export function GameJamSection() {
  return (
    <section id="gamejams" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Gamepad2 size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">Game Jams</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gameJamEntries.map((entry) => (
            <a
              key={entry.title}
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-card border border-white/5 rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 block"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold group-hover:text-accent transition-colors leading-tight pr-2">
                  {entry.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-text-muted group-hover:text-accent transition-colors shrink-0 mt-0.5"
                />
              </div>

              {/* Jam Name */}
              <p className="text-accent/70 text-xs font-mono mb-3">
                {entry.jam}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {entry.description}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
