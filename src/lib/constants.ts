/* ===================================================
   HARSHIT PORTFOLIO — Constants & Content Data
   =================================================== */

// ─── Navigation ───
export const NAV_ITEMS = [
  { label: "Home", href: "#hero", chapter: 1 },
  { label: "About", href: "#about", chapter: 2 },
  { label: "Skills", href: "#skills", chapter: 3 },
  { label: "Projects", href: "#projects", chapter: 4 },
  { label: "Experience", href: "#experience", chapter: 5 },
  { label: "Contact", href: "#contact", chapter: 6 },
] as const;

// ─── Boot Sequence ───
export const BOOT_SEQUENCE = [
  { text: "Initializing Harshit Portfolio...", delay: 0 },
  { text: "Loading Neural Engine...", delay: 800 },
  { text: "Connecting Knowledge Base...", delay: 1600 },
  { text: "Calibrating Visual Systems...", delay: 2400 },
  { text: "Launching Interactive Experience...", delay: 3200 },
  { text: "Welcome.", delay: 4200 },
] as const;

// ─── Hero Content ───
export const HERO = {
  tagline: "FULL STACK ENGINEER  •  AI ENGINEER  •  AI AUTOMATION",
  firstName: "HARSHIT",
  lastName: "JINDAL",
  subtitle:
    "Building intelligent AI applications, scalable backend systems, and immersive digital experiences.",
  buttons: [
    { label: "Explore Projects", href: "#projects", variant: "primary" as const },
    { label: "View Experience", href: "#experience", variant: "secondary" as const },
    { label: "Download Resume", href: "/resume.pdf", variant: "ghost" as const },
  ],
} as const;

// ─── About ───
export const ABOUT = {
  intro:
    "I'm Harshit Jindal — an AI Engineer and Backend Developer passionate about building intelligent systems that solve real problems. I don't just write code; I architect solutions that think, learn, and evolve.",
  mission:
    "My mission is to bridge the gap between cutting-edge AI research and production-ready software. Every system I build is designed to be scalable, maintainable, and impactful.",
  focus: [
    {
      title: "AI Engineering",
      description:
        "Building RAG systems, AI agents, and LLM-powered applications that deliver real value.",
      icon: "brain",
    },
    {
      title: "Backend Architecture",
      description:
        "Designing scalable APIs, microservices, and data pipelines with FastAPI, PostgreSQL, and Redis.",
      icon: "server",
    },
    {
      title: "AI Automation",
      description:
        "Creating intelligent workflows that automate complex business processes end-to-end.",
      icon: "automation",
    },
  ],
} as const;

// ─── Journey / Timeline ───
export const JOURNEY = [
  {
    year: "2026",
    title: "AI Engineering & Founding",
    milestones: [
      {
        title: "AI Engineer Intern @ Bhumi iTech",
        description:
          "June 2026 - Present | Developing scalable AI solutions and intelligent software systems.",
        technologies: ["AI Agents", "LLMs", "Machine Learning"],
        link: "https://bhumiitech.com",
      },
      {
        title: "Founder @ Synox AI",
        description:
          "April 2026 - Present | Building an AI agents workplace site providing employees with powerful AI tools and reference generation integrations. Implementing multi-agent architectures and LangGraph for complex task orchestration.",
        technologies: ["LangGraph", "Multi-Agent", "LLMs", "Next.js"],
      },
    ],
  },
  {
    year: "2025",
    title: "Entrepreneurship & Leadership",
    milestones: [
      {
        title: "Founder @ Raftra",
        description:
          "August 2025 - Present | Developing a comprehensive marketing suite to assist marketing agencies and SMEs. Engineered built-in automations to reduce workflows, enabling 1-click ad launches across multiple platforms.",
        technologies: ["Marketing Automation", "Workflow APIs", "Full Stack"],
      },
      {
        title: "Campus Ambassador @ E-Cell IIT Bombay",
        description:
          "June 2025 - Feb 2026 | Represented the Entrepreneurship Cell of IIT Bombay, fostering innovation and networking.",
        technologies: ["Leadership", "Networking", "Entrepreneurship"],
      },
    ],
  },
] as const;

// ─── Projects ───
export const PROJECTS = [
  {
    id: "synox-ai",
    title: "Synox AI",
    tagline: "AI Agents Workplace & Orchestration",
    description:
      "Building an AI agents workplace site designed to empower employees with powerful AI tools and seamless reference integration.",
    emoji: "🚀",
    technologies: ["AI Agents", "Gen AI", "LLMs"],
    highlightTags: ["Workplace AI", "Agentic Workflows"],
    live: "https://synoxai.vercel.app",
    color: "#00E5FF",
  },
  {
    id: "raftra",
    title: "Raftra",
    tagline: "Comprehensive Marketing Suite for SMEs",
    description:
      "A comprehensive marketing suite for agencies and SMEs. Features built-in automations, streamlined workflows, and one-click ad launches across multiple platforms.",
    emoji: "📈",
    technologies: ["Automations", "Marketing", "TypeScript"],
    highlightTags: ["Marketing Suite", "1-Click Ads"],
    live: "https://frontend-blue-five-wrac9qlzrm.vercel.app",
    color: "#66FF00", // Adjusted to match the greenish gradient in the screenshot
  },
  {
    id: "omni-ai",
    title: "Omnii AI",
    tagline: "Multi-Agent Productivity Platform",
    description:
      "A production-grade multi-agent productivity platform featuring a high-fidelity 3D glassmorphic UI. Contains a full multi-agent orchestrator powered by LangGraph, routing queries dynamically to tailored assistants.",
    emoji: "🧠",
    technologies: ["LangGraph", "Multi-Agent", "3D UI"],
    highlightTags: ["Agentic Orchestrator", "Productivity"],
    github: "https://github.com/Harshitj8126/omnii-ai",
    live: "#",
    color: "#FF0055",
  },
  {
    id: "forexa",
    title: "Forexa",
    tagline: "Forex & Crypto Trading Platform",
    description:
      "A comprehensive Forex and Cryptocurrency trading platform tailored for modern traders seeking advanced analytics and seamless execution.",
    emoji: "📊",
    technologies: ["Trading", "Crypto", "WebSockets"],
    highlightTags: ["Forex", "Crypto"],
    github: "https://github.com/forexa539-hue/Forexa",
    live: "https://forexa-one.vercel.app",
    color: "#FF9900",
  },
] as const;

// ─── Tech Stack ───
export const TECH_STACK = [
  { name: "Python", category: "Programming", experience: "2+ years" },
  { name: "Java", category: "Programming", experience: "1+ years" },
  { name: "C", category: "Programming", experience: "1+ years" },
  { name: "C++", category: "Programming", experience: "1+ years" },
  { name: "SQL", category: "Programming", experience: "2+ years" },
  { name: "JavaScript", category: "Programming", experience: "1+ years" },
  { name: "OOPS", category: "Programming", experience: "1+ years" },
  { name: "TypeScript", category: "Programming", experience: "1+ years" },
  { name: "React", category: "Frontend", experience: "1+ years" },
  { name: "Next.js", category: "Frontend", experience: "1+ years" },
  { name: "Tailwind CSS", category: "Frontend", experience: "2+ years" },
  { name: "Framer Motion", category: "Frontend", experience: "1+ years" },
  { name: "GSAP", category: "Frontend", experience: "1+ years" },
  { name: "Three.js", category: "Frontend", experience: "< 1 year" },
  { name: "UI/UX Design", category: "Frontend", experience: "1+ years" },
  { name: "FastAPI", category: "Backend & APIs", experience: "2+ years" },
  { name: "REST APIs", category: "Backend & APIs", experience: "2+ years" },
  { name: "Django & Flask", category: "Backend & APIs", experience: "2+ years" },
  { name: "API Integrations", category: "Backend & APIs", experience: "2+ years" },
  { name: "Data Fetching", category: "Backend & APIs", experience: "2+ years" },
  { name: "Node.js", category: "Backend & APIs", experience: "1+ years" },
  { name: "PostgreSQL", category: "Backend & APIs", experience: "2+ years" },
  { name: "Redis", category: "Backend & APIs", experience: "1+ years" },
  { name: "Docker", category: "Backend & APIs", experience: "1+ years" },
  { name: "Machine Learning", category: "AI/ML", experience: "2+ years" },
  { name: "Deep Learning", category: "AI/ML", experience: "1+ years" },
  { name: "Gen AI & Claude", category: "AI/ML", experience: "1+ years" },
  { name: "Agents", category: "AI/ML", experience: "1+ years" },
  { name: "RAG Systems", category: "AI/ML", experience: "1+ years" },
  { name: "LangChain & LangGraph", category: "AI/ML", experience: "1+ years" },
  { name: "n8n, Automations", category: "AI/ML", experience: "1+ years" },
] as const;

// ─── Experience ───
export const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "Building Intelligent Systems",
    period: "2024 — Present",
    description:
      "Designing and implementing AI-powered applications, RAG systems, and automation platforms. Focused on production-grade AI solutions using FastAPI, LangChain, and OpenAI.",
    achievements: [
      "Built 5+ production AI applications",
      "Processed 10K+ documents with RAG pipelines",
      "Reduced client operational costs by 40%",
    ],
  },
] as const;

// ─── Stats ───
export const STATS = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Lines of Code", value: 50, suffix: "K+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "GitHub Commits", value: 500, suffix: "+" },
] as const;

export const SOCIALS = [
  {
    platform: "GitHub",
    url: "https://github.com/Harshitj8126",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/harshitjindal-ai/",
    icon: "linkedin"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/harshit.8126/",
    icon: "instagram"
  },
  {
    platform: "Email",
    url: "mailto:harshitjindal0203@gmail.com",
    icon: "email"
  }
] as const;
