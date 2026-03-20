import { Code2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Code2 size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-bg-card border border-white/5 rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="h-40 bg-bg-primary/50 rounded-lg mb-4 flex items-center justify-center text-text-muted">
                Project {i}
              </div>
              <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
              <p className="text-text-secondary text-sm">
                Project details will be added here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
