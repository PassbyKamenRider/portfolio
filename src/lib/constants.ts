export const siteConfig = {
  name: "Yifan Jiang",
  title: "Gameplay Programmer",
  description:
    "A gameplay programmer driven by a passion for crafting engaging interactive experiences. I love turning creative ideas into playable realities — whether it's a weekend game jam or a semester-long project. CMU Entertainment Technology MS candidate, B.S. in CS from UIUC.",
  github: "https://github.com/PassbyKamenRider",
  linkedin: "https://www.linkedin.com/in/yifan-jiang-593650230/",
  email: "YifanJiangCZ@outlook.com",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Game Jams", href: "#gamejams" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "A.N.E.N.Y.",
    role: "Gameplay Programmer",
    period: "Jan 2026 – Present",
    description:
      "A high-concept installation at CMU's ETC exploring the industrialization of intimacy through a custom-built electro-mechanical pinball cabinet. Bridged physical hardware to Unity via Arduino serial communication, implemented bump-collision-triggered gameplay responses, and built a progression system managing transitions between pinball mechanics and visual novel narrative.",
    tags: ["Unity", "C#", "Arduino", "Serial Communication", "State Machine"],
    site: "https://projects.etc.cmu.edu/aneny/",
  },
  {
    title: "It Takes Three",
    role: "Gameplay Programmer",
    period: "Aug – Dec 2025",
    description:
      "A cross-platform collaborative experience uniting VR, PC, and mobile players in a shared environment over LAN. Built a third-person character controller with Xbox input, gyroscope-based jetpack and microphone-driven environmental interactions on mobile, and VR grab mechanics for repositioning platforms to assist teammates.",
    tags: ["Unity", "C#", "LAN Multiplayer", "XR", "Gyroscope", "Cross-platform"],
    site: "https://projects.etc.cmu.edu/trinity/",
  },
  {
    title: "Hello Alice",
    role: "Programmer",
    period: "Jan – May 2025",
    description:
      "An AI-enhanced, voice-driven programming tool built on CMU's Alice legacy, making CS education accessible and intuitive. Integrated GPT and speech recognition so users can generate code by speaking, exposed Unity APIs for AI-driven 3D scene generation, and built an immersive exploration environment bridging visual scripting with AI-generated content.",
    tags: ["Unity", "C#", "GPT API", "Speech Recognition", "Visual Scripting"],
    site: "https://projects.etc.cmu.edu/hello-alice/",
  },
  {
    title: "UIUC Game Studio",
    role: "Gameplay Programmer",
    period: "Aug 2024 – May 2025",
    description:
      "Contributed to UIUC's student-led game studio designing educational and research-driven games. Built a genetic trait system for critterbug evolution, an interactive nervous system simulation for patient diagnosis, a neuro cell crafting system, and tools enabling players to interact with nerves and facilitate treatment.",
    tags: ["Unity", "C#", "Genetic System", "Simulation", "Crafting System"],
    site: "https://games.illinois.edu/",
  },
];

export interface GameJamEntry {
  title: string;
  jam: string;
  description: string;
  tags: string[];
  link: string;
}

export const gameJamEntries: GameJamEntry[] = [
  {
    title: "Hoopoe Loopoe",
    jam: "GMTK Game Jam 2025",
    description:
      "A charming 2D game featuring a adorable hoopoe bird saving the world from humankind's environmental destruction.",
    tags: ["Unity", "2D", "Cute"],
    link: "https://passbykamenrider.itch.io/hoopoe-loopoe",
  },
  {
    title: "CrowdiNO",
    jam: "thatgamejam #01",
    description:
      "A top-down RPG where a shy dinosaur navigates public spaces, managing stress as strangers approach. Explores distance and restraint through the protagonist's social anxiety.",
    tags: ["Unity", "2D", "Top-Down", "RPG"],
    link: "https://passbykamenrider.itch.io/crowdino",
  },
  {
    title: "Hell Binder",
    jam: "Ludum Dare 58",
    description:
      "A TCG card appraisal game set in Hell. Players act as a master appraiser, inspecting card art, stats, class icons, rarity, and code numbers to spot forgeries, buy genuine cards, and earn enough funds to return to the living.",
    tags: ["Unity", "TCG", "Puzzle"],
    link: "https://passbykamenrider.itch.io/hell-binder",
  },
  {
    title: "Depth First",
    jam: "Ludum Dare 57",
    description:
      "A puzzle game where players guide an AI core through procedurally generated labyrinths using depth-first search mechanics. Place turn stones, activate laser guns, and blast through walls.",
    tags: ["Unity", "Puzzle"],
    link: "https://passbykamenrider.itch.io/depth-first",
  },
  {
    title: "TetraPolis",
    jam: "Ludum Dare 54",
    description:
      "A simulation game created for Ludum Dare 54, blending city-building with Tetris-inspired mechanics.",
    tags: ["Unity", "Simulation"],
    link: "https://passbykamenrider.itch.io/tetrapolis",
  },
  {
    title: "White Room",
    jam: "Scream Jam 2023",
    description:
      "A short psychological-horror puzzle game. Trapped in a small white room, players solve puzzles to reveal the truth underneath.",
    tags: ["Unity", "Horror", "Puzzle"],
    link: "https://passbykamenrider.itch.io/white-room",
  },
  {
    title: "RainFalls.os",
    jam: "Scream Jam 2023",
    description:
      "A Psycho-Pass inspired puzzle game featuring a cute AI assistant. Blends cyberpunk aesthetics with puzzle-solving mechanics.",
    tags: ["Unity", "Puzzle", "Cyberpunk"],
    link: "https://passbykamenrider.itch.io/rainfallsos",
  },
  {
    title: "Reap Its Future",
    jam: "Ludum Dare 52",
    description:
      "An interactive fiction experience exploring narrative choices and consequences through branching storylines.",
    tags: ["Unity", "Interactive Fiction"],
    link: "https://passbykamenrider.itch.io/reap-its-future",
  },
];
