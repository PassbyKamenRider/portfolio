import type { Locale } from "./i18n/dictionaries";

const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/portfolio" : "";

export type Bilingual = { en: string; zh: string };

export function localize(value: Bilingual, locale: Locale): string {
  return value[locale];
}

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

export const siteConfig = {
  name: { en: "Yifan Jiang", zh: "蒋亦凡" } as Bilingual,
  title: {
    en: "Gameplay Programmer",
    zh: "游戏程序员",
  } as Bilingual,
  description: {
    en: "A gameplay programmer driven by a passion for crafting engaging interactive experiences. I love turning creative ideas into playable realities — whether it's a weekend game jam or a semester-long project. CMU Entertainment Technology MS candidate, B.S. in CS from UIUC.",
    zh: "一名热衷于打造沉浸式交互体验的游戏程序员。无论是周末的Game Jam还是一个学期的项目，我都热爱将创意变为可玩的现实。卡内基梅隆大学娱乐技术硕士在读，伊利诺伊大学厄巴纳-香槟分校计算机科学学士。",
  } as Bilingual,
  github: "https://github.com/PassbyKamenRider",
  linkedin: "https://www.linkedin.com/in/yifan-jiang-593650230/",
  itchio: "https://passbykamenrider.itch.io/",
  email: "YifanJiangCZ@outlook.com",
};

export const navKeys = [
  { key: "home" as const, href: "#home" },
  { key: "projects" as const, href: "#projects" },
  { key: "gameJams" as const, href: "#gamejams" },
  { key: "skills" as const, href: "#skills" },
  { key: "contact" as const, href: "#contact" },
] as const;

export interface Project {
  slug: string;
  title: Bilingual;
  role: Bilingual;
  period: Bilingual;
  description: Bilingual;
  tags: string[];
  site?: string;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "aneny",
    title: { en: "A.N.E.N.Y.", zh: "A.N.E.N.Y." },
    role: { en: "Gameplay Programmer", zh: "游戏程序员" },
    period: { en: "Jan 2026 – Present", zh: "2026年1月 – 至今" },
    description: {
      en: "A high-concept installation at CMU's ETC exploring the industrialization of intimacy through a custom-built electro-mechanical pinball cabinet. Bridged physical hardware to Unity via Arduino serial communication, implemented bump-collision-triggered gameplay responses, and built a progression system managing transitions between pinball mechanics and visual novel narrative.",
      zh: "卡内基梅隆大学ETC的高概念装置项目，通过定制的机电弹球柜探索亲密关系的工业化。通过Arduino串口通信将物理硬件桥接到Unity，实现了碰撞触发的游戏响应，并构建了管理弹球机制与视觉小说叙事之间过渡的进度系统。",
    },
    tags: ["Unity", "C#", "Arduino", "Serial Communication", "State Machine"],
    site: "https://projects.etc.cmu.edu/aneny/",
  },
  {
    slug: "it-takes-three",
    title: { en: "It Takes Three", zh: "It Takes Three" },
    role: { en: "Gameplay Programmer", zh: "游戏程序员" },
    period: { en: "Aug – Dec 2025", zh: "2025年8月 – 12月" },
    description: {
      en: "A cross-platform collaborative experience uniting VR, PC, and mobile players in a shared environment over LAN. Built a third-person character controller with Xbox input, gyroscope-based jetpack and microphone-driven environmental interactions on mobile, and VR grab mechanics for repositioning platforms to assist teammates.",
      zh: "一个跨平台协作体验，通过局域网将VR、PC和移动端玩家联合在共享环境中。构建了带Xbox输入的第三人称角色控制器、基于陀螺仪的喷气背包和移动端麦克风驱动的环境交互，以及VR抓取机制用于重新定位平台以协助队友。",
    },
    tags: ["Unity", "C#", "LAN Multiplayer", "XR", "Gyroscope", "Cross-platform"],
    site: "https://projects.etc.cmu.edu/trinity/",
  },
  {
    slug: "hello-alice",
    title: { en: "Hello Alice", zh: "Hello Alice" },
    role: { en: "Programmer", zh: "程序员" },
    period: { en: "Jan – May 2025", zh: "2025年1月 – 5月" },
    description: {
      en: "An AI-enhanced, voice-driven programming tool built on CMU's Alice legacy, making CS education accessible and intuitive. Integrated GPT and speech recognition so users can generate code by speaking, exposed Unity APIs for AI-driven 3D scene generation, and built an immersive exploration environment bridging visual scripting with AI-generated content.",
      zh: "基于CMU Alice遗产构建的AI增强语音驱动编程工具，使计算机科学教育更加易用和直观。集成了GPT和语音识别，使用户可以通过语音生成代码，开放了Unity API用于AI驱动的3D场景生成，并构建了连接可视化脚本和AI生成内容的沉浸式探索环境。",
    },
    tags: ["Unity", "C#", "GPT API", "Speech Recognition", "Visual Scripting"],
    site: "https://projects.etc.cmu.edu/hello-alice/",
  },
  {
    slug: "uiuc-game-studio",
    title: { en: "UIUC Game Studio", zh: "UIUC游戏工作室" },
    role: { en: "Gameplay Programmer", zh: "游戏程序员" },
    period: { en: "Aug 2024 – May 2025", zh: "2024年8月 – 2025年5月" },
    description: {
      en: "Contributed to UIUC's student-led game studio designing educational and research-driven games. Built a genetic trait system for critterbug evolution, an interactive nervous system simulation for patient diagnosis, a neuro cell crafting system, and tools enabling players to interact with nerves and facilitate treatment.",
      zh: "参与UIUC学生主导的游戏工作室，设计教育和研究驱动的游戏。构建了虫虫进化的遗传特征系统、用于患者诊断的交互式神经系统模拟、神经细胞合成系统，以及让玩家与神经交互并促进治疗的工具。",
    },
    tags: ["Unity", "C#", "Genetic System", "Simulation", "Crafting System"],
    site: "https://games.illinois.edu/",
  },
];

export interface GameJamEntry {
  slug: string;
  title: string;
  jam: string;
  description: Bilingual;
  tags: string[];
  link: string;
  coverImage?: string;
  screenshots?: string[];
  youtubeId?: string;
  tagline?: Bilingual;
  fullDescription?: Bilingual;
  creators?: string[];
  platform?: string;
}

export const gameJamEntries: GameJamEntry[] = [
  {
    slug: "hoopoe-loopoe",
    title: "Hoopoe Loopoe",
    jam: "GMTK Game Jam 2025",
    coverImage: "/images/gamejams/hoopoe-loopoe/cover.png",
    description: {
      en: "A charming 2D game featuring an adorable hoopoe bird saving the world from humankind's environmental destruction.",
      zh: "一款迷人的2D游戏，一只可爱的戴胜鸟拯救世界免受人类环境破坏。",
    },
    tags: ["Unity", "2D", "Cute"],
    link: "https://itch.io/jam/gmtk-2025/rate/3776552",
    tagline: {
      en: "In this game, you play as a hoopoe walking in a loop around the earth, destroying buildings to keep the resources balanced and save mankind.",
      zh: "在这款游戏中，你扮演一只戴胜鸟绕地球循环行走，摧毁建筑以保持资源平衡，拯救人类。",
    },
    creators: ["PassbyKamenRider", "Namazu_7", "HANA6", "Quanx Dog", "Mitsuiame", "JoKin08", "6mumuko", "Reall16", "ValerieLian"],
    platform: "HTML5",
  },
  {
    slug: "crowdino",
    title: "CrowdiNO",
    jam: "thatgamejam #01",
    coverImage: "/images/gamejams/crowdino/cover.jpg",
    screenshots: [
      "/images/gamejams/crowdino/screenshot1.png",
      "/images/gamejams/crowdino/screenshot2.png",
      "/images/gamejams/crowdino/screenshot3.png",
    ],
    description: {
      en: "A top-down RPG where a shy dinosaur navigates public spaces, managing stress as strangers approach. Explores distance and restraint through the protagonist's social anxiety.",
      zh: "一款俯视角RPG，一只害羞的恐龙在公共空间中穿行，在陌生人靠近时管理压力。通过主角的社交焦虑探索距离与克制。",
    },
    tags: ["Unity", "2D", "Singleplayer", "Top-Down", "RPG"],
    link: "https://passbykamenrider.itch.io/crowdino",
    tagline: {
      en: "A shy little dinosaur trying to hide from the crowd.",
      zh: "一只害羞的小恐龙试图躲避人群。",
    },
    fullDescription: {
      en: "The game explores invisible boundaries in public spaces, where players manage distance as strangers approach and stress accumulates. The core mechanic involves determining comfortable proximity and knowing when to relocate. The developers incorporated the jam theme — the moment before contact when two things are close but not touching — through exploring distance and restraint. The narrative suggests that despite maintaining boundaries, eventual contact becomes inevitable.",
      zh: "这款游戏探索了公共空间中无形的边界，玩家在陌生人靠近、压力累积时管理距离。核心机制涉及确定舒适的距离以及何时该离开。开发者将Game Jam主题——两个事物接近但尚未接触的瞬间——融入到对距离和克制的探索中。叙事暗示，尽管维持着边界，最终的接触不可避免。",
    },
    youtubeId: "JIeIKnGeJRY",
    creators: ["PassbyKamenRider", "DeepD2eam", "Quanx Dog", "zzhy1"],
    platform: "Windows",
  },
  {
    slug: "hell-binder",
    title: "Hell Binder",
    jam: "Ludum Dare 58",
    coverImage: "/images/gamejams/hell-binder/cover.png",
    screenshots: [
      "/images/gamejams/hell-binder/screenshot1.png",
      "/images/gamejams/hell-binder/screenshot2.png",
      "/images/gamejams/hell-binder/screenshot3.png",
    ],
    description: {
      en: "A TCG card appraisal game set in Hell. Players act as a master appraiser, inspecting card art, stats, class icons, rarity, and code numbers to spot forgeries, buy genuine cards, and earn enough funds to return to the living.",
      zh: "一款设定在地狱的TCG卡牌鉴定游戏。玩家扮演鉴定大师，检查卡牌画作、属性、职业图标、稀有度和编号，识别赝品，购买真品，赚取足够的资金重返人间。",
    },
    tags: ["Unity", "TCG", "Puzzle"],
    link: "https://ldjam.com/events/ludum-dare/58/hellbinder",
    tagline: {
      en: "Welcome to Hell, Master Appraiser. Expose forgeries, buy genuine cards, and earn your way back to the living.",
      zh: "欢迎来到地狱，鉴定大师。识别赝品，收购真品，赚取回到人间的资金。",
    },
    fullDescription: {
      en: "Death has given you one last chance: start with a small fund, inspect every card that wandering souls bring to your desk, and earn 1500 gold before five days are up. Zoom in on each card to check its main picture, class icon, cost, stats, rarity, and code number — forgeries hide in the details. Blurred art, wrong class emblems, altered stats, mismatched rarities, or incorrect codes all signal a fake. Use the Hell Terminal beside you to look up genuine cards, filter by class or rarity, and compare before you buy. Every correct purchase brings you closer to life; every mistake drains your funds toward the boiling oil.",
      zh: "死神给了你最后一次机会：用少量启动资金，检查游魂们带来的每一张卡牌，在五天内赚到1500金币。放大每张卡牌，检查主图、职业图标、费用、属性、稀有度和编号——赝品藏在细节里。模糊的画面、错误的职业徽章、篡改的属性、不匹配的稀有度或错误的编号都意味着伪造。使用身旁的地狱终端查询真品卡牌，按职业或稀有度筛选并比对后再下手。每次正确购入让你离重生更近一步；每次失误则让你滑向沸腾的油锅。",
    },
    platform: "HTML5 / Windows",
  },
  {
    slug: "depth-first",
    title: "Depth First",
    jam: "Ludum Dare 57",
    coverImage: "/images/gamejams/depth-first/cover.png",
    screenshots: [
      "/images/gamejams/depth-first/screenshot1.png",
    ],
    description: {
      en: "A puzzle game where players guide an AI core through procedurally generated labyrinths using depth-first search mechanics. Place turn stones, activate laser guns, and blast through walls.",
      zh: "一款解谜游戏，玩家使用深度优先搜索机制引导AI核心穿越程序生成的迷宫。放置转向石、激活激光炮、炸穿墙壁。",
    },
    tags: ["Unity", "Puzzle"],
    link: "https://passbykamenrider.itch.io/depth-first",
    tagline: {
      en: "You are an AI core trained by a CRAZY DR... guide your robot through procedurally generated labyrinths: place turn stones to avoid lava flows, activate laser guns to blast through walls.",
      zh: "你是一个被疯狂博士训练的AI核心……引导你的机器人穿越程序生成的迷宫：放置转向石避开熔岩，激活激光炮炸穿墙壁。",
    },
    creators: ["PassbyKamenRider", "Yufeng Liu", "Furumi_i"],
    platform: "HTML5 / Windows",
  },
  {
    slug: "tetrapolis",
    title: "TetraPolis",
    jam: "Ludum Dare 54",
    coverImage: "/images/gamejams/tetrapolis/cover.png",
    screenshots: [
      "/images/gamejams/tetrapolis/screenshot1.png",
      "/images/gamejams/tetrapolis/screenshot2.png",
    ],
    description: {
      en: "A resource management simulation game where all buildings are Tetris blocks! Balance space and resources while handling random disasters to get the highest score.",
      zh: "一款资源管理模拟游戏，所有建筑都是俄罗斯方块！在应对随机灾害的同时平衡空间与资源，争取最高分。",
    },
    tags: ["Unity", "Simulation", "Puzzle"],
    link: "https://ldjam.com/events/ludum-dare/54/tetrapolis",
    tagline: {
      en: "A resource management simulation game, but all buildings are Tetris blocks!",
      zh: "一款资源管理模拟游戏，但所有建筑都是俄罗斯方块！",
    },
    fullDescription: {
      en: "Place Tetris-shaped buildings to grow your city while managing population, food, and gold. Every 15 seconds a random event strikes — fires spread between blocks, diseases reduce efficiency, or earthquakes destroy entire rows. Assign workers as farmers or miners to produce food and gold, use gold to demolish blocks and stop disasters from spreading, or auto-fill vacant positions to keep your economy running.",
      zh: "放置俄罗斯方块形状的建筑来发展你的城市，同时管理人口、食物和金币。每15秒会触发随机事件——火灾在方块间蔓延、疾病降低生产效率、地震摧毁整行方块。将工人分配为农民或矿工来生产食物和金币，用金币拆除方块阻止灾害蔓延，或自动填充空缺岗位维持经济运转。",
    },
    platform: "HTML5 / Windows",
  },
  {
    slug: "white-room",
    title: "White Room",
    jam: "Scream Jam 2023",
    coverImage: "/images/gamejams/white-room/cover.png",
    screenshots: [
      "/images/gamejams/white-room/screenshot1.png",
    ],
    description: {
      en: "A short psychological-horror puzzle game. Trapped in a small white room, players solve puzzles to reveal the truth underneath.",
      zh: "一款短篇心理恐怖解谜游戏。被困在一个白色小房间里，玩家通过解谜揭示隐藏的真相。",
    },
    tags: ["Unity", "Horror", "Puzzle"],
    link: "https://passbykamenrider.itch.io/white-room",
    youtubeId: "X3KJQYOGILU",
    tagline: {
      en: "A short psychological-horror game. You're trapped in a small white room, solve the puzzles and reveal the truth underneath it.",
      zh: "一款短篇心理恐怖游戏。你被困在一个白色小房间里，解开谜题，揭开隐藏在其下的真相。",
    },
    creators: ["PassbyKamenRider", "Xuan Wang", "阿九不是9", "海参", "赛克", "獭唧", "宽带", "Yichn"],
    platform: "HTML5 / Windows",
  },
  {
    slug: "rainfallsos",
    title: "RainFalls.os",
    jam: "Scream Jam 2023",
    coverImage: "/images/gamejams/rainfallsos/cover.png",
    screenshots: [
      "/images/gamejams/rainfallsos/screenshot1.png",
    ],
    description: {
      en: "A Psycho-Pass inspired puzzle game featuring a cute AI assistant. Blends cyberpunk aesthetics with puzzle-solving mechanics.",
      zh: "一款受《心理测量者》启发的解谜游戏，配有可爱的AI助手。融合了赛博朋克美学与解谜机制。",
    },
    tags: ["Unity", "Puzzle", "Cyberpunk"],
    link: "https://passbykamenrider.itch.io/rainfallsos",
    tagline: {
      en: "A puzzle game inspired by Psycho-Pass — started by drawing a cute AI assistant, ended up building a whole cyberpunk world.",
      zh: "一款受《心理测量者》启发的解谜游戏——本来只想画个可爱的AI助手，结果搭建了一整个赛博朋克世界。",
    },
    platform: "HTML5",
  },
  {
    slug: "reap-its-future",
    title: "Reap Its Future",
    jam: "Ludum Dare 52",
    coverImage: "/images/gamejams/reap-its-future/cover.png",
    screenshots: [
      "/images/gamejams/reap-its-future/screenshot1.png",
    ],
    description: {
      en: "An interactive fiction where you raise a magic plant and guide its evolution. Water, fertilize, shear, and talk — but every conversation ends the day, so choose wisely.",
      zh: "一款互动小说，你需要培育一株魔法植物并引导它正确进化。浇水、施肥、修剪、对话——但每次对话都会结束当天，所以谨慎选择。",
    },
    tags: ["Unity", "Interactive Fiction"],
    link: "https://passbykamenrider.itch.io/reap-its-future",
    tagline: {
      en: "Raise a magic plant and lead it to evolve in the right way.",
      zh: "培育一株魔法植物，引导它走向正确的进化之路。",
    },
    fullDescription: {
      en: "Use tools to water, fertilize, and shear your plant each day. Talking with your plant ends the day, so tend to it carefully before starting a conversation. Take care of your plant and wait for the time of the harvest — your choices shape its evolution and determine the ending.",
      zh: "每天使用工具为植物浇水、施肥和修剪。与植物对话会结束当天，所以在开口前要仔细照料它。悉心照顾你的植物，等待收获的时刻——你的选择将决定它的进化方向和最终结局。",
    },
    platform: "HTML5",
  },
];

export const skillCategories = [
  {
    titleKey: "programmingLanguages" as const,
    skills: ["C", "C++", "C#", "Java", "Python"],
  },
  {
    titleKey: "graphics" as const,
    skills: ["OpenGL", "Vulkan"],
  },
  {
    titleKey: "gameEngines" as const,
    skills: ["Unity3D", "Unreal 5", "GameMaker Studio", "Twine"],
  },
];
