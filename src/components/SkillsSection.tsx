import { Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "C#", "Java", "Python"],
  },
  {
    title: "Graphics",
    skills: ["OpenGL", "Vulkan"],
  },
  {
    title: "Game Engines",
    skills: ["Unity3D", "Unreal 5", "GameMaker Studio", "Twine"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Cpu size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-white/10 ml-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-bg-card border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-accent font-semibold mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-text-secondary text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
