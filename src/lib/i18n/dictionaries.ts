export type Locale = "en" | "zh";

export interface Dictionary {
  nav: {
    home: string;
    projects: string;
    gameJams: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
  };
  sections: {
    projects: string;
    gameJams: string;
    skills: string;
    contact: string;
  };
  skills: {
    programmingLanguages: string;
    graphics: string;
    gameEngines: string;
  };
  contact: {
    description: string;
    sayHello: string;
  };
  footer: {
    copyright: string;
  };
  detail: {
    backToHome: string;
    role: string;
    period: string;
    tags: string;
    visitSite: string;
    viewSource: string;
    playOnItch: string;
    jam: string;
    creators: string;
    platform: string;
    credits: string;
    noAI: string;
  };
  lang: {
    switch: string;
    label: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      gameJams: "Game Jams",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      title: "Gameplay Programmer",
      description:
        "A gameplay programmer driven by a passion for crafting engaging interactive experiences. I love turning creative ideas into playable realities — whether it's a weekend game jam or a semester-long project. CMU Entertainment Technology MS candidate, B.S. in CS from UIUC.",
    },
    sections: {
      projects: "Projects",
      gameJams: "Game Jams",
      skills: "Skills",
      contact: "Get In Touch",
    },
    skills: {
      programmingLanguages: "Programming Languages",
      graphics: "Graphics",
      gameEngines: "Game Engines",
    },
    contact: {
      description:
        "I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — feel free to reach out!",
      sayHello: "Say Hello",
    },
    footer: {
      copyright: "©",
    },
    detail: {
      backToHome: "Back",
      role: "Role",
      period: "Period",
      tags: "Tags",
      visitSite: "Visit Site",
      viewSource: "View Source",
      playOnItch: "Play on itch.io",
      jam: "Jam",
      creators: "Creators",
      platform: "Platform",
      credits: "Audio Credits",
      noAI: "No generative AI was used",
    },
    lang: {
      switch: "中文",
      label: "EN",
    },
  },
  zh: {
    nav: {
      home: "首页",
      projects: "项目",
      gameJams: "Game Jam",
      skills: "技能",
      contact: "联系",
    },
    hero: {
      greeting: "你好，我是",
      title: "游戏程序员",
      description:
        "一名热衷于打造沉浸式交互体验的游戏程序员。无论是几天的Game Jam还是大型项目，我都希望能将创意变为可玩的现实。卡内基梅隆大学娱乐技术硕士在读，伊利诺伊大学厄巴纳-香槟分校计算机科学学士。",
    },
    sections: {
      projects: "项目",
      gameJams: "Game Jam",
      skills: "技能",
      contact: "联系我",
    },
    skills: {
      programmingLanguages: "编程语言",
      graphics: "图形学",
      gameEngines: "游戏引擎",
    },
    contact: {
      description:
        "我目前正在寻找新的机会。无论你有问题、项目想法，还是只是想打个招呼——随时联系我！",
      sayHello: "发送邮件",
    },
    footer: {
      copyright: "©",
    },
    detail: {
      backToHome: "返回",
      role: "角色",
      period: "时间",
      tags: "标签",
      visitSite: "访问网站",
      viewSource: "查看源码",
      playOnItch: "在 itch.io 上游玩",
      jam: "Game Jam",
      creators: "制作者",
      platform: "平台",
      credits: "音频致谢",
      noAI: "本作品未使用生成式AI",
    },
    lang: {
      switch: "EN",
      label: "中文",
    },
  },
};
