// Built-in portfolio content. Used as the seed source and as a read-only
// fallback whenever the database is empty or unavailable.

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  integration?: string[];
  deployment?: string[];
  ai?: string[];
  realtime?: string[];
}

export interface Project {
  id: string;
  title: string;
  color: string;
  liveUrl: string;
  clientUrl?: string;
  serverUrl?: string;
  image?: string;
  description: string;
  shortDesc: string;
  keyFeatures: string[];
  techStack: TechStack;
  highlights: string[];
  category: string;
  status: "Live" | "Completed";
  duration: string;
  tags: string[];
  featured: boolean;
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  current: boolean;
}

export const siteConfig = {
  name: "Naima Uddin",
  firstName: "Naima",
  role: "Frontend Developer · MERN Stack",
  company: "A2IT LTD",
  email: "naimauddin23@gmail.com",
  phone: "+8801884-242851",
  phoneDisplay: "01884-242851",
  location: "Ashulia, Dhaka, Bangladesh",
  url: "https://naimauddin.dev",
  resumeUrl: "#",
  github: "https://github.com/naima-uddin",
  linkedin: "#",
  facebook: "#",
  instagram: "#",
  photo: "/assets/myPics/photoCircle.png",
  heroImage: "", // Transparent PNG for the home banner — upload from the dashboard.
  idCardImage: "", // Photo inside the Experience section ID card — upload from the dashboard.
  availability: "Open to freelance & interesting projects",
  summary:
    "Passionate full-stack web developer with 2+ years of experience building scalable applications. Currently working as a Frontend Developer at A2IT LTD, specializing in Next.js and modern frontend architectures.",
};

export type SiteConfig = typeof siteConfig;

export const heroIntro: string[] = [
  "Frontend developer by day, MERN-stack tinkerer always. I build scalable web apps for people who expect things to just work — fast, clean, and pixel-perfect.",
  "Currently building modern frontends at A2IT LTD with 2+ years of production experience — and always up for a good conversation!",
];

export const aboutBio: string[] = [
  "I'm Naima Uddin, a passionate full-stack web developer with 2+ years of experience building scalable applications. Currently I work as a Frontend Developer at A2IT LTD, specializing in Next.js and modern frontend architectures.",
  "I've developed production-level systems including admin dashboards, real-time features, and learning platforms. I completed my BSc in Computer Science & Engineering at Daffodil International University in 2024, and I bring a strong problem-solving mindset with a focus on performance, clean architecture, and user experience.",
];

export interface LanguageFact {
  name: string;
  level: string;
}

export const languages: LanguageFact[] = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Good" },
];

export const skills = {
  frontend: [
    "JavaScript",
    "React",
    "Next.js",
    "Redux",
    "Zustand",
    "Tailwind CSS",
    "TanStack Query",
    "shadcn/ui",
    "Three.js",
    "Framer Motion",
  ],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB"],
  tools: ["GitHub", "VS Code", "Postman", "MongoDB Compass"],
};

export const marqueeSkills = [
  "Next.js",
  "React",
  "JavaScript",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "TanStack Query",
  "shadcn/ui",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "REST API",
  "SSR",
  "Git",
];

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "A2IT LTD",
    period: "Jun 2025 — Present",
    location: "Bangladesh",
    type: "On-site · Full-time",
    current: true,
    points: [
      "Building the A2IT corporate website, CMS and HRM platform with Next.js and modern frontend architectures",
      "Developing REST APIs with Express and MongoDB, with JWT authentication and role-based access control",
      "Automated payroll and recurring operations with cron jobs; built a CMS for services, portfolio, blog and site content",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Bulbi Urban Development Authority",
    period: "Dec 2024 — May 2025",
    location: "India",
    type: "Remote · Contract",
    current: false,
    points: [
      "Delivered a full-stack platform for an urban development authority as a remote contractor",
      "Worked across frontend and backend to ship production features",
      "Focused on performance, clean architecture, and a smooth user experience",
    ],
  },
];

export const education = {
  degree: "BSc in Computer Science & Engineering",
  institution: "Daffodil International University (DIU)",
  period: "Dec 2020 — Jun 2024",
  result: "CGPA 3.51",
};

export const projects: Project[] = [
  {
    id: "e-learning-lms",
    title: "E-Learning Platform (LMS)",
    color: "#34d399",
    liveUrl: "#",
    description:
      "A learning management system designed for structured education, online exams, and video-based learning. Features role-based dashboards for admins and students, course-based learning with integrated MCQ exams, and video streaming via Bunny.net CDN.",
    shortDesc: "LMS with video streaming & online exams",
    keyFeatures: [
      "Role-based system with separate admin and student dashboards",
      "Course-based learning with integrated MCQ exam functionality",
      "Video streaming via Bunny.net CDN",
      "Structured education and progress tracking",
      "Hosted on Hostinger with Node.js + Express backend",
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      integration: ["Bunny.net CDN"],
      deployment: ["Hostinger"],
    },
    highlights: [
      "Production-level learning platform",
      "Video streaming at scale via CDN",
      "Complete admin + student panels",
      "Integrated exam system",
    ],
    category: "EdTech",
    status: "Live",
    duration: "Production project",
    tags: ["Next.js", "Node.js", "MongoDB", "Bunny.net"],
    featured: true,
    challenges: [
      "Streaming large video files efficiently to many students",
      "Designing a fair, cheat-resistant MCQ exam flow",
      "Keeping admin and student experiences cleanly separated",
    ],
    solutions: [
      "Offloaded video delivery to Bunny.net CDN for fast, cheap streaming",
      "Built timed exams with server-side validation of answers",
      "Implemented role-based routing and permissions from the ground up",
    ],
    learnings: [
      "CDN-based video architecture",
      "Role-based access control at scale",
      "Building for real students in production",
    ],
  },
  {
    id: "a2it-cms-hrm",
    title: "A2IT Corporate Website, CMS & HRM Platform",
    color: "#60a5fa",
    liveUrl: "#",
    description:
      "A full-stack company website with an integrated CMS and HRM management system for A2IT LTD. Handles the public corporate site plus internal operations — attendance, leave, payroll and task management — with JWT authentication and role-based access control.",
    shortDesc: "Corporate site with CMS & HRM system",
    keyFeatures: [
      "Frontend built with Next.js, React and Tailwind CSS",
      "REST APIs developed with Express and MongoDB",
      "JWT authentication with role-based access control",
      "HRM features for attendance, leave, payroll and task management",
      "Automated payroll and recurring operations with cron jobs",
      "CMS for managing services, portfolio, blog and site content",
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "JWT Auth", "Cron Jobs"],
      database: ["MongoDB"],
    },
    highlights: [
      "Full-stack corporate platform",
      "Complete HRM + CMS system",
      "Role-based access control",
      "Automated payroll with cron jobs",
    ],
    category: "CMS / HRM",
    status: "Live",
    duration: "Production project",
    tags: ["Next.js", "Express", "MongoDB", "JWT"],
    featured: true,
    challenges: [
      "Designing a role-based system spanning public site and internal HRM",
      "Automating payroll and recurring operations reliably",
      "Keeping the CMS flexible enough to manage many content types",
    ],
    solutions: [
      "Implemented granular role-based access control with JWT",
      "Scheduled payroll and recurring jobs with cron",
      "Built a content-model-driven CMS for services, portfolio and blog",
    ],
    learnings: [
      "Building HRM and payroll systems end to end",
      "CMS architecture and content modeling",
      "Automation with scheduled jobs",
    ],
  },
  {
    id: "pickob-ecommerce",
    title: "Pickob — E-commerce Platform",
    color: "#a78bfa",
    liveUrl: "#",
    description:
      "An online shopping platform for electronics, gadgets and lifestyle products with a complete browsing and ordering experience — cart, checkout, payments, and order tracking on a fully responsive UI.",
    shortDesc: "E-commerce platform with payments",
    keyFeatures: [
      "Cart and checkout flows with SSLCommerz, bKash and Nagad payments",
      "REST APIs with Express and MongoDB for products, orders, users and payments",
      "User authentication with profile, order history and order tracking",
      "Fully responsive UI for smooth mobile and desktop shopping",
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      integration: ["SSLCommerz", "bKash", "Nagad"],
    },
    highlights: [
      "Complete browsing & ordering experience",
      "Multiple payment gateways",
      "Order history & tracking",
      "Responsive shopping UI",
    ],
    category: "E-commerce",
    status: "Live",
    duration: "Production project",
    tags: ["Next.js", "Express", "MongoDB", "Payments"],
    featured: true,
    challenges: [
      "Integrating multiple local payment gateways (SSLCommerz, bKash, Nagad)",
      "Building reliable cart, checkout and order-tracking flows",
      "Delivering a smooth experience across mobile and desktop",
    ],
    solutions: [
      "Created a unified checkout flow over multiple payment providers",
      "Modeled products, orders, users and payments with clean REST APIs",
      "Designed a fully responsive, mobile-first UI",
    ],
    learnings: [
      "Payment gateway integration for the Bangladesh market",
      "E-commerce order and inventory modeling",
      "Building resilient checkout flows",
    ],
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "12+", label: "Technologies" },
  { value: "2", label: "Companies" },
];

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
}

export interface SiteContent {
  profile: SiteConfig;
  heroIntro: string[];
  aboutBio: string[];
  languages: LanguageFact[];
  skills: Skills;
  marqueeSkills: string[];
  experiences: Experience[];
  education: Education;
  stats: Stat[];
}

export const defaultSiteContent: SiteContent = {
  profile: siteConfig,
  heroIntro,
  aboutBio,
  languages,
  skills,
  marqueeSkills,
  experiences,
  education,
  stats,
};
