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

export interface RepoLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  color: string;
  liveUrl: string;
  githubUrl?: string;
  clientUrl?: string;
  serverUrl?: string;
  image?: string;
  gallery?: string[];
  repoLinks?: RepoLink[];
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
    id: "samudera-traffic",
    title: "Samudera Traffic — Global Freight Forwarding Platform",
    color: "#0ea5e9",
    liveUrl: "https://samuderathai.com/",
    githubUrl: "https://github.com/naima-uddin/samudera_cargo_Client",
    repoLinks: [
      {
        label: "Client",
        url: "https://github.com/naima-uddin/samudera_cargo_Client"
      },
      {
        label: "Dashboard",
        url: "https://github.com/naima-uddin/samudera_cargo_dashboard"
      },
      {
        label: "Server",
        url: "https://github.com/naima-uddin/samudera_cargo_server"
      }
    ],
    gallery: [],
    description: "The official website and content platform for Samudera Traffic Co., Ltd. — a Bangkok-based freight forwarding and customs agency of the Samudera group, offering global freight forwarding and supply chain solutions. The project is split into three apps: a public client site, a separate admin dashboard for managing content, and a REST API server that powers both.",
    shortDesc: "Freight forwarding website with admin dashboard & API",
    keyFeatures: [
      "Public corporate website presenting global freight forwarding & supply chain services",
      "Service pages for liner agency, inland transport, container depot, warehousing and feeder services",
      "Separate admin dashboard to manage website content without touching code",
      "Dedicated REST API server shared by the client site and the dashboard",
      "Protected admin authentication for the dashboard",
      "Fully responsive layout for desktop, tablet and mobile",
      "SEO-friendly pages and fast initial load"
    ],
    techStack: {
      frontend: [
        "React",
        "Next.js",
        "Tailwind CSS"
      ],
      backend: [
        "Node.js",
        "Express.js",
        "JWT Auth"
      ],
      database: [
        "MongoDB"
      ]
    },
    highlights: [
      "Real client project for an international logistics company",
      "3-app architecture: client, dashboard and server",
      "Content fully manageable from the dashboard",
      "Live in production"
    ],
    category: "Logistics",
    status: "Live",
    duration: "Client project",
    tags: [
      "Next.js",
      "Express",
      "MongoDB",
      "Dashboard"
    ],
    featured: true,
    challenges: [
      "Presenting a wide range of logistics services clearly to international customers",
      "Keeping the public site, dashboard and API in sync as three separate codebases",
      "Letting non-technical staff update content safely"
    ],
    solutions: [
      "Organized content into clear service sections with a consistent page structure",
      "Designed one shared REST API consumed by both the client site and the dashboard",
      "Built a protected admin dashboard with simple forms for every content type"
    ],
    learnings: [
      "Multi-app (client / dashboard / server) architecture",
      "Working with a corporate client's brand requirements",
      "Designing content-driven APIs"
    ]
  },
  {
    id: "apple-gadget-bd",
    title: "Apple Gadget BD — Full E-commerce Platform",
    color: "#f97316",
    liveUrl: "https://applebd.com/",
    githubUrl: "https://github.com/naima-uddin/apple.gadget.frontend",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/naima-uddin/apple.gadget.frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/naima-uddin/apple.gadget.backend"
      }
    ],
    gallery: [],
    description: "A production e-commerce platform for gadgets and electronics in Bangladesh, with a feature-rich admin dashboard. It covers the full commerce flow — product catalog with variants, cart, checkout with SSLCommerz and cash on delivery, courier booking and tracking — plus inventory, barcodes, invoices, analytics, marketing add-ons and a blog, all on a secured Express + MongoDB API.",
    shortDesc: "Gadget e-commerce with courier, payments & admin panel",
    keyFeatures: [
      "Product catalog with variants, multi-level categories, brands, reviews and product Q&A",
      "Cart, checkout and order tracking with SSLCommerz (bKash, cards, wallets) and Cash on Delivery",
      "Courier integration with Pathao, RedX and Steadfast — parcel booking, tracking and fraud check",
      "Fake-order protection and order follow-up workflow",
      "Admin dashboard: orders, customers, customer tags, inventory, discounts, coupons, pre-orders",
      "Barcode generation, lookup and printing; invoice and packing-slip PDF generation",
      "Sales analytics with charts, revenue tracking and top products",
      "Homepage builder: banners, popups, deal of the day, featured & category showcases",
      "Marketing add-ons: Facebook Pixel, TikTok Pixel, Google Analytics, Tag Manager and AdSense",
      "Blog with SEO, newsletter, waitlist for out-of-stock products and loyalty rewards",
      "Firebase (Google / email) login with JWT in httpOnly cookies and role-based admin permissions"
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Framer Motion",
        "Recharts",
        "Firebase Auth"
      ],
      backend: [
        "Node.js",
        "Express 5",
        "JWT",
        "Helmet",
        "Rate Limiting",
        "Nodemailer"
      ],
      database: [
        "MongoDB",
        "Mongoose",
        "Redis"
      ],
      integration: [
        "SSLCommerz",
        "Pathao",
        "RedX",
        "Steadfast",
        "Cloudinary",
        "Sharp"
      ]
    },
    highlights: [
      "Large-scale production e-commerce system",
      "3 courier services integrated",
      "50+ admin dashboard modules",
      "Redis caching and image optimization"
    ],
    category: "E-commerce",
    status: "Live",
    duration: "Production project",
    tags: [
      "Next.js",
      "Express",
      "MongoDB",
      "Redis",
      "SSLCommerz"
    ],
    featured: true,
    challenges: [
      "Handling high volumes of cash-on-delivery orders, including fake orders",
      "Integrating several courier APIs that each work differently",
      "Keeping product pages fast with many images and variants",
      "Giving the admin team full control over the storefront without developer help"
    ],
    solutions: [
      "Built fake-order protection with courier-based fraud checks and a follow-up workflow",
      "Wrapped Pathao, RedX and Steadfast behind one shared courier layer for booking and tracking",
      "Optimized images to WebP with Sharp + Cloudinary and cached hot data in Redis",
      "Built a dashboard homepage builder for banners, popups, showcases and deals"
    ],
    learnings: [
      "Courier and payment integrations for Bangladesh",
      "Scaling an Express API with Redis and rate limiting",
      "Designing large admin dashboards",
      "E-commerce marketing tooling (pixels, analytics)"
    ]
  },
  {
    id: "a2it-ltd",
    title: "A2IT Ltd — Corporate Website, CMS & HRM",
    color: "#6366f1",
    liveUrl: "https://a2itltd.com/",
    githubUrl: "https://github.com/naima-uddin/a2it-full-website-frontend",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/naima-uddin/a2it-full-website-frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/naima-uddin/a2it-full-website-backend"
      }
    ],
    gallery: [],
    description: "The full company platform for A2IT Ltd: a public corporate website, a CMS dashboard to manage every part of it, and a complete HRM system for internal operations. The HRM handles attendance, leave, shifts, payroll with salary rules, meals, office costs, tasks and reports — with role-based dashboards and scheduled cron jobs automating payroll, holidays and logs.",
    shortDesc: "Corporate site + CMS + full HRM & payroll system",
    keyFeatures: [
      "Public corporate website: services, solutions, portfolio, blog, about and contact with map",
      "CMS dashboard for services, service page content, portfolio, promotional projects & packages",
      "Blog management, client logo showcase, company gallery, media library and site settings",
      "HRM: attendance, leave, shifts, office schedules and holidays with auto-sync",
      "Payroll with salary rules and automated monthly payroll via cron jobs",
      "Meal, food cost, office rent, supplies, utility bills, transport and software subscription tracking",
      "Task management and notifications for employees",
      "Separate admin, moderator and employee dashboards with role-based access",
      "Audit logs and session logs with device and location detection",
      "Excel and PDF report export; OTP verification for staff login"
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Framer Motion",
        "Leaflet",
        "Lottie",
        "Rive"
      ],
      backend: [
        "Node.js",
        "Express 5",
        "JWT",
        "bcrypt",
        "node-cron",
        "Nodemailer"
      ],
      database: [
        "MongoDB",
        "Mongoose"
      ],
      integration: [
        "Cloudinary",
        "ExcelJS",
        "PDFKit",
        "jsPDF"
      ]
    },
    highlights: [
      "Website + CMS + HRM in one platform",
      "Automated payroll with cron jobs",
      "Role-based dashboards for 3 user types",
      "Used daily by the company"
    ],
    category: "CMS / HRM",
    status: "Live",
    duration: "Production project",
    tags: [
      "Next.js",
      "Express",
      "MongoDB",
      "Cron",
      "HRM"
    ],
    featured: true,
    challenges: [
      "Running a public website and an internal HRM on one backend",
      "Calculating payroll correctly from attendance, leave, meals and salary rules",
      "Keeping a reliable audit trail of who changed what",
      "Generating clean reports for management"
    ],
    solutions: [
      "Separated CMS and HRM into their own modules, routes and middleware on one API",
      "Automated payroll, holiday sync and log cleanup with scheduled cron jobs",
      "Added audit and session logs with user-agent and geo-IP detection",
      "Built Excel and PDF exports for attendance, payroll and cost reports"
    ],
    learnings: [
      "Building HRM and payroll systems end to end",
      "CMS architecture and content modeling",
      "Automation with scheduled jobs",
      "Role-based access control"
    ]
  },
  {
    id: "kl-tint-studio",
    title: "KL Tint Studio — Car Tint, Coating & PPF Website",
    color: "#ef4444",
    liveUrl: "https://carview-frontend.vercel.app/",
    githubUrl: "https://github.com/naima-uddin/carview.frontend",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/naima-uddin/carview.frontend"
      }
    ],
    gallery: [],
    description: "A modern marketing website for a Malaysian automotive enhancement studio offering window tinting, ceramic coating, paint protection film (PPF), car wrapping and combo packages across multiple branches. Built to turn visitors into bookings with clear service pages, an interactive branch map and quick contact options.",
    shortDesc: "Automotive tint & PPF studio website",
    keyFeatures: [
      "Dedicated pages for Tint, Coating, PPF, Wrapping and Combo packages",
      "Bold hero section with instant WhatsApp, phone, email and social contact",
      "Benefits section: heat & glare reduction, UV protection, privacy and premium finish",
      "Interactive multi-branch map (KLCC, Bangsar, Petaling Jaya, Shah Alam) linked to Google Maps",
      "FAQ accordion organized by service type",
      "Contact / enquiry form",
      "Payment options display (cards, online banking, e-wallets, instalments, BNPL)",
      "Responsive layout with mobile navigation"
    ],
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "Tailwind CSS"
      ],
      deployment: [
        "Vercel"
      ]
    },
    highlights: [
      "Conversion-focused business website",
      "Multi-location finder",
      "Clean, premium automotive look",
      "Deployed on Vercel"
    ],
    category: "Business Website",
    status: "Live",
    duration: "Client project",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    featured: true,
    challenges: [
      "Presenting five different service lines without overwhelming visitors",
      "Helping customers find the nearest of four branches",
      "Getting visitors to contact the studio quickly"
    ],
    solutions: [
      "Gave each service its own page and grouped the FAQ by service",
      "Built an interactive branch map with direct Google Maps links",
      "Placed WhatsApp, phone and form contact options throughout the site"
    ],
    learnings: [
      "Conversion-focused landing page design",
      "Map and location features",
      "Designing for a premium brand"
    ]
  },
  {
    id: "roserly-skincare",
    title: "Roserly — Skincare & Beauty E-commerce",
    color: "#ec4899",
    liveUrl: "https://roserly.vercel.app/",
    githubUrl: "https://github.com/naima-uddin/skincare.frontend",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/naima-uddin/skincare.frontend"
      }
    ],
    gallery: [],
    description: "An online store for skincare, cosmetics, hand-poured soy candles and handmade crochet. It goes beyond a normal shop with ingredient-based shopping and a skin quiz that recommends a personal five-step routine, alongside the full shopping flow — cart, wishlist, offers, coupons and order tracking.",
    shortDesc: "Skincare store with skin quiz & ingredient shopping",
    keyFeatures: [
      "Shop skincare, cosmetics, soy-wax candles and handmade crochet",
      "\"Know What's In the Bottle\" — shop by ingredient (Niacinamide, Hyaluronic Acid, Vitamin C, Retinol)",
      "Interactive skin quiz that suggests a 5-step routine: Cleanse, Tone, Treat, Moisturise, Protect",
      "Featured collections and shop by brand",
      "Cart, wishlist, account and order tracking",
      "Offers: Buy 1 Get 1, free delivery, clearance sale and coupon codes",
      "Restock email subscription",
      "Fully responsive storefront"
    ],
    techStack: {
      frontend: [
        "Next.js",
        "React",
        "Tailwind CSS"
      ],
      backend: [
        "Node.js",
        "Express.js"
      ],
      database: [
        "MongoDB"
      ],
      deployment: [
        "Vercel"
      ]
    },
    highlights: [
      "Personalized skin quiz",
      "Ingredient-based product discovery",
      "Complete shopping flow",
      "Soft, beauty-focused UI"
    ],
    category: "E-commerce",
    status: "Live",
    duration: "Client project",
    tags: [
      "Next.js",
      "React",
      "E-commerce",
      "Skincare"
    ],
    featured: true,
    challenges: [
      "Helping shoppers who don't know which skincare products they need",
      "Selling very different product types (skincare, candles, crochet) in one store",
      "Making promotions easy to find"
    ],
    solutions: [
      "Built a short skin quiz that maps skin type to a recommended routine",
      "Added ingredient-based browsing with plain-language benefits",
      "Organized products into collections and highlighted offers in the header and banners"
    ],
    learnings: [
      "Guided-shopping UX (quizzes, recommendations)",
      "Reusing an e-commerce engine for a new brand",
      "Designing for the beauty market"
    ]
  },
  {
    id: "velor-interior-design",
    title: "Velor — Interior Design Studio",
    color: "#a16207",
    liveUrl: "https://steady-caramel-1b890c.netlify.app/",
    githubUrl: "https://github.com/naima-uddin/interior-design-frontend",
    repoLinks: [
      {
        label: "Frontend",
        url: "https://github.com/naima-uddin/interior-design-frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/naima-uddin/interior-design-backend"
      }
    ],
    gallery: [],
    description: "A full-stack website for Velor, a Dhaka-based interior design studio offering end-to-end interiors for homes, offices and commercial spaces — from concept to final styling. It showcases completed projects, services and a furniture collection with interactive design elements, backed by an Express + MongoDB API with admin authentication and Cloudinary image uploads.",
    shortDesc: "Interior design studio site with portfolio & collection",
    keyFeatures: [
      "Project portfolio with location and size for every project (Gulshan, Dhanmondi, Bashundhara and more)",
      "Services: full home interiors, bedroom, living, dining, bathroom and modular kitchen design",
      "Furniture collection organized by room — Living, Dining, Bedroom, Workspace",
      "Interactive room visualization with labeled design hotspots",
      "Before / after transformation slider",
      "Six-step design process from consultation to handover",
      "Client testimonials, journal and studio pages",
      "Contact section with office, factory, email, phone and business hours",
      "Backend API with JWT admin auth and Cloudinary image uploads"
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4"
      ],
      backend: [
        "Node.js",
        "Express 5",
        "JWT",
        "bcrypt",
        "Multer"
      ],
      database: [
        "MongoDB",
        "Mongoose"
      ],
      integration: [
        "Cloudinary"
      ],
      deployment: [
        "Netlify"
      ]
    },
    highlights: [
      "Elegant, image-led design",
      "Interactive before/after slider",
      "Full-stack with admin API",
      "Built with the latest Next.js 16"
    ],
    category: "Business Website",
    status: "Live",
    duration: "Client project",
    tags: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB"
    ],
    featured: true,
    challenges: [
      "Showing the quality of interior work in a way that feels premium",
      "Loading many large photos without slowing the site down",
      "Letting the studio manage projects and images themselves"
    ],
    solutions: [
      "Used an image-first layout with a before/after slider and room hotspots",
      "Served optimized images through Cloudinary and Next.js Image",
      "Built an Express API with JWT-protected admin routes and Cloudinary uploads"
    ],
    learnings: [
      "Interactive UI components (sliders, hotspots)",
      "TypeScript with Next.js 16 and Tailwind v4",
      "Image-heavy site performance"
    ]
  },
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
