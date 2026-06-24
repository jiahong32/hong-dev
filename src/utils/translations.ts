export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  role: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  institution: string;
  details: string[];
}

export interface TranslationDict {
  navLinks: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  navButtons: {
    viewProjects: string;
    contactMe: string;
  };
  hero: {
    label: string;
    title: string[];
    metaSchool: string;
    metaFocus: string;
    description: string;
    stats: {
      stat1: { value: string; label: string };
      stat2: { value: string; label: string };
      stat3: { value: string; label: string };
    };
  };
  sections: {
    aboutTitle: string;
    aboutDesc: string;
    projectsTitle: string;
    projectsDesc: string;
    experienceTitle: string;
    experienceDesc: string;
    contactTitle: string;
    contactDesc: string;
    contactBtn: string;
  };
  projectsList: ProjectItem[];
  experiencesList: ExperienceItem[];
}

export type Language = 'zh' | 'en';

export const translations: Record<Language, TranslationDict> = {
  zh: {
    navLinks: {
      about: '關於我',
      projects: '專案作品',
      experience: '學習經歷',
      contact: '聯絡我',
    },
    navButtons: {
      viewProjects: '瀏覽專案',
      contactMe: '聯絡我',
    },
    hero: {
      label: '資管系學生 ｜ 前端開發者',
      title: ['打造', '數位', '體驗'],
      metaSchool: '高科大資管系學生',
      metaFocus: '前端開發 / App / AI 應用',
      description: '我是一名專注於前端網頁開發、Flutter 行動 App 設計與 AI 輔助系統的資訊管理系學生。致力於將創意與技術結合，建立簡潔、直覺且具實用價值的數位產品。',
      stats: {
        stat1: { value: 'React', label: '前端開發' },
        stat2: { value: 'Flutter', label: 'App 開發' },
        stat3: { value: 'Django', label: '後端框架' },
      },
    },
    sections: {
      aboutTitle: '關於我',
      aboutDesc: '我是一名國立高雄科技大學資訊管理系的學生，專注於打造美觀、流暢且具備良好使用者體驗的介面。對於軟體工程、UI/UX 設計以及機器學習應用的結合充滿熱情。',
      projectsTitle: '專案作品',
      projectsDesc: '以下展示了我近期的實作專案，涵盖響應式網頁端、跨平台 App 及後端 AI 整合。',
      experienceTitle: '學習經歷',
      experienceDesc: '我的學術背景與自主學習歷程，展現我在資訊管理與軟體開發領域的成長。',
      contactTitle: '與我聯絡',
      contactDesc: '想要一起合作開發專案，或是聊聊任何關於資管與最新技術的話題嗎？歡迎隨時與我聯繫！',
      contactBtn: '取得聯絡',
    },
    projectsList: [
      {
        title: '個人極簡動態作品集網站 ｜ Hong.dev Portfolio',
        description: '使用 React、Vite、TypeScript 與 Tailwind CSS 建構的個人作品集網站。整合 HTML5 Canvas 實現隨滑鼠游標拖曳互動的線條網格，並支援完整的中英文語系切換與排版優化。',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
        role: '前端網頁設計 ｜ Frontend Developer',
      },
      {
        title: '專案項目二 ｜ Project 02',
        description: '本專案尚在開發階段，相關專案內容尚未上傳，敬請期待！',
        tags: ['Coming Soon', 'Under Dev'],
        role: '專案開發 ｜ Developer',
      },
      {
        title: '專案項目三 ｜ Project 03',
        description: '本專案尚在開發階段，相關專案內容尚未上傳，敬請期待！',
        tags: ['Coming Soon', 'Under Dev'],
        role: '專案開發 ｜ Developer',
      },
      {
        title: '專案項目四 ｜ Project 04',
        description: '本專案尚在開發階段，相關專案內容尚未上傳，敬請期待！',
        tags: ['Coming Soon', 'Under Dev'],
        role: '專案開發 ｜ Developer',
      },
    ],
    experiencesList: [
      {
        period: '2023 - 至今',
        title: '資訊管理學士學位 ｜ B.S. in Information Management',
        institution: '國立高雄科技大學 ｜ NKUST',
        details: [
          '主修資訊管理課程，核心能力涵蓋資料庫管理系統、系統分析與設計、資料結構與演算法。',
          '專注於網頁程式設計、軟體工程實務，並積極將生成式 AI 技術融入專案開發中。',
        ],
      },
      {
        period: '2024 - 至今',
        title: '前端工程技術深耕 ｜ Frontend Development Practice',
        institution: '個人學習 ｜ Self-directed Learning',
        details: [
          '精通 React 及其生態系，熟練運用 TypeScript、Tailwind CSS 與 Vite 進行現代化前端建構。',
          '注重 Web 效能優化與響應式排版，特別是中英文語系混合排版的字體呈現與可讀性。',
        ],
      },
      {
        period: '2024 - 至今',
        title: '跨平台行動 App 開發 ｜ Flutter App Development',
        institution: '自主專案實作 ｜ Project Development',
        details: [
          '使用 Flutter/Dart 技術棧開發跨平台行動應用程式。',
          '熟悉使用 Provider 狀態管理、RESTful API 串接以及串接 Google Maps 定位服務。',
        ],
      },
      {
        period: '2025 - 至今',
        title: '後端框架與 AI API 整合 ｜ Backend & AI Integration',
        institution: '實務開發 ｜ Applied Engineering',
        details: [
          '採用 Django / Django REST Framework 設計高擴展性的後端服務。',
          '整合 OpenAI 及 Gemini 等大型語言模型 API，具備建構 RAG 輔助系統與對話代理人的實作經驗。',
        ],
      },
    ],
  },
  en: {
    navLinks: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    navButtons: {
      viewProjects: 'Projects',
      contactMe: 'Contact Me',
    },
    hero: {
      label: 'Information Management Student. Frontend Developer.',
      title: ['Building', 'Digital', 'Experiences'],
      metaSchool: 'NKUST IM Student',
      metaFocus: 'Frontend / App / AI',
      description: 'I am an Information Management student focused on frontend development, Flutter app design, and AI-assisted systems. I build clean, responsive, and practical digital products from idea to implementation.',
      stats: {
        stat1: { value: 'React', label: 'Frontend' },
        stat2: { value: 'Flutter', label: 'App Dev' },
        stat3: { value: 'Django', label: 'Backend' },
      },
    },
    sections: {
      aboutTitle: 'About Me',
      aboutDesc: 'I am an NKUST Information Management student focusing on building beautiful, responsive, and functional user interfaces. Passionate about software architecture, UI/UX, and machine learning systems.',
      projectsTitle: 'Projects',
      projectsDesc: 'Explore my latest development works, ranging from responsive web development to mobile apps and AI integration.',
      experienceTitle: 'Experience',
      experienceDesc: 'My academic background and self-directed software development learning path.',
      contactTitle: 'Contact',
      contactDesc: 'Want to collaborate or chat about information management and technology? Feel free to reach out!',
      contactBtn: 'Get in Touch',
    },
    projectsList: [
      {
        title: 'Minimalist Dynamic Portfolio (Hong.dev)',
        description: 'A personal developer portfolio site made with React, Vite, TypeScript, and Tailwind CSS. Featuring an interactive HTML5 Canvas background grid that warps on mouse hover, and optimized Chinese/English typography toggles.',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
        role: 'Frontend Developer',
      },
      {
        title: 'Project 02',
        description: 'This project is currently under development. Content has not been uploaded yet. Stay tuned!',
        tags: ['Coming Soon', 'Under Dev'],
        role: 'Developer',
      },
      {
        title: 'Project 03',
        description: 'This project is currently under development. Content has not been uploaded yet. Stay tuned!',
        tags: ['Coming Soon', 'Under Dev'],
        role: 'Developer',
      },
      {
        title: 'Project 04',
        description: 'This project is currently under development. Content has not been uploaded yet. Stay tuned!',
        tags: ['Coming Soon', 'Under Dev'],
        role: 'Developer',
      },
    ],
    experiencesList: [
      {
        period: '2023 - Present',
        title: 'B.S. in Information Management',
        institution: 'National Kaohsiung University of Science and Technology (NKUST)',
        details: [
          'Majoring in Information Management with coursework covering Database Systems, System Analysis & Design, Data Structures, and Algorithms.',
          'Focusing on web development, software engineering, and integrating generative AI tools into academic projects.',
        ],
      },
      {
        period: '2024 - Present',
        title: 'Frontend Engineering Specialization',
        institution: 'Self-directed Learning',
        details: [
          'Mastered React ecosystem, specializing in build optimization using Vite, type safety with TypeScript, and styling with Tailwind CSS.',
          'Focused on responsive web design and optimizing Chinese/English typography and legibility.',
        ],
      },
      {
        period: '2024 - Present',
        title: 'Cross-Platform Mobile App Development',
        institution: 'Project Development',
        details: [
          'Developed cross-platform mobile applications using Flutter and Dart.',
          'Experienced in state management (Provider), connecting to RESTful APIs, and using Google Maps localization APIs.',
        ],
      },
      {
        period: '2025 - Present',
        title: 'Backend Services & AI Integrations',
        institution: 'Applied Engineering',
        details: [
          'Built reliable backend API endpoints using Django and Django REST Framework.',
          'Experienced in building LLM-assisted systems and text summarization agents using APIs from OpenAI and Gemini.',
        ],
      },
    ],
  },
};
