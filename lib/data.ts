// Single source of truth for all portfolio content.
// Sourced from Dhaval Panchal's latest resume.

export const profile = {
  name: "Dhaval Panchal",
  role: "Senior Frontend Engineer",
  stack: ["React", "Next.js", "React Native", "TypeScript", "Node.js"],
  location: "Ahmedabad, Gujarat, India",
  email: "panchaldhaval049@gmail.com",
  phone: "+91 84015-38830",
  github: "https://github.com/DhavalkumarP",
  githubHandle: "DhavalkumarP",
  linkedin: "https://www.linkedin.com/in/dhaval-panchal-377294208/",
  linkedinHandle: "dhaval-panchal-377294208",
  stackoverflow: "https://stackoverflow.com/users/18182775/dhavalkumar-panchal",
  resume: "/resume.pdf",
  tagline: "I build scalable web & mobile products people actually use.",
  summary:
    "Senior Frontend Engineer with 5+ years of experience building scalable web and mobile applications across staffing, fintech, e-commerce, education, and 3D visualization domains. Strong with React, Next.js, and TypeScript on the front, comfortable reaching into Node.js / Express full-stack work, with a proven track record of shipping production-ready products that serve thousands of active users.",
  yearsExperience: "5+",
} as const;

export const stats = [
  { value: "5+", label: "Years building products" },
  { value: "31K+", label: "Active users served" },
  { value: "97%", label: "Attendance accuracy (from 60%)" },
  { value: "65%", label: "Faster initial load" },
] as const;

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  highlights: {
    title?: string;
    points: string[];
    link?: { label: string; href: string };
  }[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Zimbs Technology LLP",
    role: "Senior Software Engineer",
    period: "Oct 2023 – Present",
    location: "Ahmedabad, India",
    stack: [
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "Spring Boot",
      ".NET",
      "TypeScript",
    ],
    highlights: [
      {
        title: "CROUX — Hospitality Staffing Platform",
        points: [
          "Architected a React Native app and a Next.js web app (Tailwind CSS + TypeScript, Recoil state) serving 31K+ active hospitality workers — NFC hardware clock-in/out timesheets, offline-first attendance, real-time background location tracking, role-based access, real-time chat, and AI-powered talent matching.",
          "Lifted attendance success and accuracy from 60% to 97% by rebuilding the offline-first clock-in/out and NFC flow, and built the talent-facing UI for the AI MatchMaker engine that helped raise shift fill rates to 90%+.",
          "Set up Codemagic CI/CD for automated iOS/Android deployments and integrated Firebase, CleverTap, AppsFlyer, Zendesk, Microsoft Clarity, plus a Retool admin panel for users, subscriptions, profile verification, suspensions, and bonus campaigns.",
        ],
      },
      {
        title: "CQ Nexus — Exam Management Platform",
        points: [
          "Built a modular React.js system with Material UI (MUI) and CKEditor, supporting diverse question creation (multiple-choice, descriptive, image-based) and an exam-delivery module with role-based access control.",
          "Designed dynamic multi-format export and paper-generation templates with a secure delivery-tracking module (lock/password box security) for exam-paper logistics to exam centers.",
        ],
      },
      {
        title: "Team Leadership & Other Products",
        points: [
          "Led teams, managed project workflows, and mentored interns — helping them grow into their roles.",
          "Also delivered Orchid (crude-oil transport logistics) and Number App (dating app), working across React.js, Next.js, React Native, Flutter, Java Spring Boot, and .NET.",
        ],
      },
    ],
  },
  {
    company: "HK Infosoft",
    role: "Software Engineer",
    period: "May 2021 – Oct 2023",
    location: "Ahmedabad, India",
    stack: ["React", "Next.js", "React Native", "Node.js", "Express", "Web3"],
    highlights: [
      {
        title: "imagine.io — 3D Visualization Platform",
        points: [
          "Built real-time React and Unity WebGL product customization with live previews and React–Unity state sync.",
          "Applied lazy loading and code splitting to cut initial load time by 65%.",
        ],
      },
      {
        title: "The Doge Pound — Web3 NFT Platform",
        points: [
          "Built responsive React.js UI for holder, creator, and admin dashboards of a Doge-themed NFT collectibles platform.",
          "Integrated REST and Web3 APIs for NFT metadata, wallet connection, and user flows, backed by Node.js / Express.js services.",
          "Implemented reusable components and business logic to manage NFT perks, rewards, and listings.",
        ],
      },
      {
        title: "Sneaker Exit — E-commerce Mobile App",
        points: [
          "Built React Native product listing, cart, and checkout flows with reusable UI components, consuming REST APIs for a sneaker marketplace.",
        ],
      },
      {
        title: "Intranet — Real Estate Management",
        points: [
          "Contributed React.js / Next.js UI and workflows for a real-estate management solution, gaining hands-on experience across both web and mobile development.",
        ],
      },
    ],
  },
];

export interface ProjectItem {
  title: string;
  category: string;
  tags: string[];
  description: string;
  links?: { label: string; href: string }[];
}

// Production work.
export const featuredProjects: ProjectItem[] = [
  {
    title: "CROUX",
    category: "Web + Mobile",
    tags: ["Next.js", "React Native", "Offline-first", "NFC", "TypeScript"],
    description:
      "Hospitality staffing platform serving 31K+ active workers — Next.js web app and React Native mobile app with NFC attendance, offline-first clock-in/out, real-time location tracking, timesheets, and in-app messaging. Built the talent-facing UI for an AI MatchMaker engine that helped raise shift fill rates to 90%+.",
    links: [
      { label: "Website", href: "https://croux.co/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/croux/id1605986841",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.croux&hl=en_IN",
      },
    ],
  },
  {
    title: "Schöni eTAX",
    category: "Mobile",
    tags: ["React Native", "Secure Workflows", "iOS", "Android"],
    description:
      "Secure React Native app letting Swiss taxpayers digitize, organize, categorize, and submit tax documents through a fully paperless workflow, with on-device document scanning, encrypted transmission, and secure authentication for financial-grade data — shipped to production on iOS and Android.",
    links: [
      { label: "Play Store", href: "#" },
      { label: "App Store", href: "#" },
    ],
  },
  {
    title: "Pi Money",
    category: "Mobile · Fintech",
    tags: ["Flutter", "Fintech", "Secure APIs", "Android", "iOS"],
    description:
      "Cross-platform fintech app spanning digital banking, investments, fixed deposits, loans, and virtual assets — integrating secure APIs for financial transactions and real-time investment operations. Optimized Android and iOS performance, reducing startup time and frame drops.",
    links: [
      { label: "Website", href: "https://pi.money" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=app.money.pi&hl=en_IN",
      },
    ],
  },
  {
    title: "Predictr",
    category: "Web + Mobile · Fintech",
    tags: ["React Native", "React.js", "Socket.IO", "Firebase", "Stripe", "Real-time"],
    description:
      "A competitive stock-market prediction platform — make daily stock calls, track your prediction accuracy over time, and compete on monthly leaderboards for cash prizes, with creator/follower monetization and community insights. Built the React Native mobile app and React.js web app with real-time updates over Socket.IO, Google / Apple sign-in, Firebase push notifications, and Stripe payments.",
    links: [
      { label: "Website", href: "https://predictr.ca/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/predictr/id6737692647",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.predictr&hl=en_IN",
      },
    ],
  },
  {
    title: "imagine.io",
    category: "Web · 3D Visualization",
    tags: ["React.js", "Unity WebGL", "Real-time", "Code Splitting", "Multi-org"],
    description:
      "A 3D content-creation platform (Live Furnish) built with React.js and Unity WebGL for real-time product customization with live previews — two-way React–Unity state sync, role-based access, and multi-org support. Lazy loading, code splitting, and backend asset optimization cut initial load time by 65%, rendering high-quality image/video for furniture, lighting, and textiles.",
    links: [{ label: "Website", href: "https://imagine.io/" }],
  },
  {
    title: "The Doge Pound",
    category: "Web3",
    tags: ["React.js", "Node.js", "Express.js", "Web3", "REST APIs"],
    description:
      "Web3 NFT platform for Doge-themed digital collectibles, with dashboards for holders, creators, and admins. Built responsive React.js UI components and integrated REST / Web3 APIs for NFT metadata, wallet connection, perks, rewards, and listings.",
  },
];

// Personal / side projects.
export const personalProjects: ProjectItem[] = [
  {
    title: "SoleSpace",
    category: "Full-stack",
    tags: [
      "React",
      "Redux Toolkit",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    description:
      "Full-stack sneaker e-commerce with separate customer and admin apps. Built the React + Redux Toolkit + MUI frontends and a Node.js + Express + TypeScript + MongoDB backend featuring JWT auth, Stripe payments, image uploads, and transactional email.",
  },
  {
    title: "ChessMe",
    category: "Game",
    tags: ["React", "JavaScript", "Game Logic"],
    description:
      "A browser chess game built with React — legal-move generation, move highlighting, and check / checkmate detection on a clean two-player board.",
    links: [{ label: "Live demo", href: "https://dhavalkumarp.github.io/chessMe/" }],
  },
  {
    title: "Ambika Panels",
    category: "Web App",
    tags: ["React", "Redux", "Firebase"],
    description:
      "Business management app for manufacturers covering stock, service, and guarantee management plus employee management — built with React, Redux, and Firebase.",
  },
  {
    title: "Mira Family",
    category: "Mobile App",
    tags: ["React Native", "Redux", "Firebase"],
    description:
      "A devotional mantra-jap companion for meditation and focus — track and reset jap counts and customise calming background music. Built with React Native and Firebase.",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Dart", "Java", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Recoil",
      "React Query",
      "Flutter",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      ".NET",
      "MongoDB",
      "REST",
      "GraphQL",
      "JWT Auth",
      "Stripe",
    ],
  },
  {
    label: "Styling / UI",
    items: [
      "Tailwind CSS",
      "Styled-Components",
      "MUI",
      "Responsive Design",
      "Accessibility (WCAG/ARIA)",
    ],
  },
  {
    label: "APIs / Data",
    items: ["REST", "GraphQL", "WebSockets", "Firebase", "Axios"],
  },
  {
    label: "Tools & CI/CD",
    items: [
      "React Testing Library",
      "Detox",
      "GitHub Actions",
      "Codemagic",
      "Git",
      "AppsFlyer",
      "Zendesk",
      "Retool",
    ],
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export const education: EducationItem[] = [
  {
    school: "Gandhinagar Institute of Technology",
    degree: "B.Tech in Information Technology",
    period: "2022 – 2025",
    location: "Gandhinagar, India",
  },
  {
    school: "Government Polytechnic Ahmedabad",
    degree: "Diploma in Information Technology",
    period: "2019 – 2022",
    location: "Ahmedabad, India",
  },
];

export interface CertificationItem {
  name: string;
  detail: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "DMCP",
    detail: "Diploma in Multilingual Computer Programming",
  },
];

export const interests = ["Cricket", "Skiing", "Travel"] as const;

export interface WritingItem {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export const writing: WritingItem[] = [
  {
    title: "React Native vs. Flutter Showdown in 2024",
    date: "Jan 2024",
    excerpt:
      "Key differences between React Native and Flutter — and how to choose the right cross-platform framework for your next project.",
    link: "https://dhaval-panchal-208.blogspot.com/2024/01/unleashing-cross-platform-magic-react.html",
  },
  {
    title: "Best AI Pair Programming Tools",
    date: "Dec 2022",
    excerpt:
      "The top AI-powered tools that enhance pair programming and boost developer productivity.",
    link: "https://medium.com/@pd6181881/best-ai-pair-programming-tools-f79ea4e5ac00",
  },
  {
    title: "Thinking in React",
    date: "Dec 2022",
    excerpt:
      "How to think in React to build scalable and maintainable web applications.",
    link: "https://medium.com/@pd6181881/thinking-in-react-2555128fb266",
  },
  {
    title: "Async/await 101",
    date: "Jan 2023",
    excerpt:
      "An introduction to asynchronous programming in JavaScript — write clean, readable async code.",
    link: "https://medium.com/@pd6181881/async-await-101-an-introduction-to-asynchronous-programming-in-javascript-717fa3d72bef",
  },
  {
    title: "Escape Hatches in React JS",
    date: "Dec 2022",
    excerpt:
      "The various escape hatches in React and how they can be used to optimize performance.",
    link: "https://medium.com/@pd6181881/escape-hatches-in-react-js-3d326008c65",
  },
  {
    title: "What is the package.json file?",
    date: "Dec 2022",
    excerpt:
      "Understand package.json in React and how it manages dependencies and scripts in your project.",
    link: "https://dhaval-panchal-208.blogspot.com/2022/12/if-you-are-working-on-react-js-project.html",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
] as const;
