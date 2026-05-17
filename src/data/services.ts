export interface Service {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  metaDescription: string;
  features: string[];
  benefits: { title: string; text: string }[];
  techStack: string[];
  process: { step: string; title: string; text: string }[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "website-development",
    path: "/website-development",
    title: "Website Development Services",
    shortTitle: "Web Development",
    tagline: "High-performance websites & enterprise dashboards",
    description:
      "We craft pixel-perfect, lightning-fast websites and enterprise-grade web applications using the latest MERN stack. From marketing sites to complex SaaS dashboards, we deliver scalable, secure, and SEO-friendly digital experiences.",
    metaDescription:
      "Professional website development services by InfyGrid Solutions. Custom MERN stack websites, dashboards, PWAs and e-commerce platforms built for performance and scale.",
    features: [
      "Custom Dashboard Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Scalability",
      "API Integration & Security",
      "Headless CMS Implementation",
      "Performance & Core Web Vitals Optimization",
    ],
    benefits: [
      { title: "Lightning Fast", text: "Sub-second load times with modern bundling, edge caching and image optimization." },
      { title: "Secure by Default", text: "HTTPS, OWASP-aligned hardening, authentication and role-based access baked in." },
      { title: "Scalable Architecture", text: "Built to handle growth — from your first 100 users to millions." },
    ],
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    process: [
      { step: "01", title: "Discovery", text: "We map your goals, audience and technical requirements." },
      { step: "02", title: "Design", text: "Wireframes and high-fidelity UI tailored to your brand." },
      { step: "03", title: "Development", text: "Agile sprints with weekly demos and transparent progress." },
      { step: "04", title: "Launch", text: "QA, deployment, analytics and post-launch support." },
    ],
    icon: "Globe",
  },
  {
    slug: "mobile-app-development",
    path: "/mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile Apps",
    tagline: "Native & cross-platform apps for iOS and Android",
    description:
      "Build delightful mobile experiences that users love. We design and engineer native iOS, native Android and cross-platform apps with React Native — optimized for performance, offline sync and app-store success.",
    metaDescription:
      "Mobile app development services for iOS & Android. InfyGrid Solutions builds React Native and native apps with secure backends, push notifications and store-ready polish.",
    features: [
      "React Native Cross-Platform",
      "Native iOS (Swift) & Android (Kotlin)",
      "App Store Optimization (ASO)",
      "Push Notifications & Cloud Sync",
      "Offline-First Architecture",
      "In-App Payments & Subscriptions",
    ],
    benefits: [
      { title: "One Codebase", text: "Ship to iOS and Android together with React Native and save up to 40% on cost." },
      { title: "Native Performance", text: "60fps animations, native modules and deep OS integration when you need it." },
      { title: "Store-Ready", text: "We handle App Store and Play Store submissions, reviews and updates." },
    ],
    techStack: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "GraphQL"],
    process: [
      { step: "01", title: "Product Strategy", text: "Define MVP scope, user journeys and monetization model." },
      { step: "02", title: "UI/UX Design", text: "Platform-aware interfaces following iOS HIG and Material guidelines." },
      { step: "03", title: "Build & Test", text: "Continuous integration with automated unit, E2E and device testing." },
      { step: "04", title: "Release", text: "Phased rollout, crash analytics and ongoing feature releases." },
    ],
    icon: "Smartphone",
  },
  {
    slug: "software-development",
    path: "/software-development",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    tagline: "Bespoke software engineered for complex business problems",
    description:
      "From custom workflow automation to cloud-native platforms and legacy modernization, our software engineering team builds reliable, API-first systems tailored to your operations.",
    metaDescription:
      "Custom software development services. InfyGrid Solutions builds cloud-native, API-first business platforms, automation tools and legacy modernization solutions.",
    features: [
      "Custom Workflow Design",
      "Cloud-Native Systems",
      "Legacy Modernization",
      "API-First Architecture",
      "Microservices & Event-Driven Design",
      "DevOps & CI/CD Setup",
    ],
    benefits: [
      { title: "Built for You", text: "Software that fits your processes exactly — no compromises, no licensing traps." },
      { title: "Cloud Native", text: "Containerized, auto-scaling deployments on AWS, GCP or Azure." },
      { title: "Future Proof", text: "Modular design lets you add features and integrations without rewrites." },
    ],
    techStack: ["Node.js", "Python", "Go", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
    process: [
      { step: "01", title: "Audit", text: "Deep dive into current systems, pain points and opportunities." },
      { step: "02", title: "Architect", text: "Domain modelling, tech selection and delivery roadmap." },
      { step: "03", title: "Engineer", text: "Iterative development with code reviews and automated testing." },
      { step: "04", title: "Operate", text: "Monitoring, SLAs, and a 24/7 support partnership." },
    ],
    icon: "Code2",
  },
  {
    slug: "erp-solutions",
    path: "/erp-solutions",
    title: "ERP & CRM Solutions",
    shortTitle: "ERP & CRM",
    tagline: "Centralized business management systems built around your workflow",
    description:
      "Streamline operations with custom ERP and CRM platforms covering inventory, sales, HR, finance and customer relationships — accessible from anywhere and integrated with the tools you already use.",
    metaDescription:
      "Custom ERP & CRM solutions by InfyGrid Solutions. Centralize inventory, sales, HR and customer management with cloud-based, workflow-driven business platforms.",
    features: [
      "Custom Workflow Automation",
      "Inventory & Warehouse Management",
      "Real-time Data Analytics & Dashboards",
      "Cloud-based Multi-branch Access",
      "Sales Pipeline & Lead Scoring",
      "Accounting & GST-Compliant Invoicing",
    ],
    benefits: [
      { title: "One Source of Truth", text: "Replace 5 disconnected tools with one unified platform your team will actually use." },
      { title: "Decision Ready", text: "Live dashboards turn raw data into action — for owners, managers and operators." },
      { title: "Grows With You", text: "Add modules and users as your business scales, without re-platforming." },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind"],
    process: [
      { step: "01", title: "Discovery", text: "Workshop your processes, roles and reporting requirements." },
      { step: "02", title: "Configure", text: "Tailor modules — inventory, HR, sales, finance — to your operations." },
      { step: "03", title: "Integrate", text: "Connect Tally, payment gateways, SMS/WhatsApp, e-commerce." },
      { step: "04", title: "Train & Launch", text: "On-site training, data migration and white-glove go-live." },
    ],
    icon: "Layers",
  },
  {
    slug: "ui-ux-design",
    path: "/ui-ux-design",
    title: "UI/UX Design & Branding",
    shortTitle: "UI/UX Design",
    tagline: "Visually stunning, intuitive experiences that convert",
    description:
      "Great products start with great design. Our team blends research, strategy and high-fidelity craft to build interfaces and brands that customers love and remember.",
    metaDescription:
      "UI/UX design and branding services. InfyGrid Solutions creates high-fidelity interfaces, brand identities, user journeys and interactive prototypes.",
    features: [
      "High-Fidelity UI Design",
      "User Journey Mapping",
      "Brand Identity & Logos",
      "Interactive Prototyping",
      "Design Systems & Component Libraries",
      "Usability Testing & Iteration",
    ],
    benefits: [
      { title: "Research-Backed", text: "User interviews and analytics drive every design decision." },
      { title: "Conversion-Focused", text: "Interfaces tuned to move visitors toward your business outcomes." },
      { title: "System Thinking", text: "Reusable design systems keep your product consistent as it grows." },
    ],
    techStack: ["Figma", "Framer", "Adobe XD", "Illustrator", "Lottie"],
    process: [
      { step: "01", title: "Research", text: "Audience, competitors and brand audit." },
      { step: "02", title: "Wireframe", text: "Low-fi structure before pixels." },
      { step: "03", title: "Design", text: "Hi-fi UI, motion and prototype." },
      { step: "04", title: "Handoff", text: "Specs, tokens and dev-ready files." },
    ],
    icon: "Palette",
  },
  {
    slug: "seo-optimization",
    path: "/seo-optimization",
    title: "SEO Optimization Services",
    shortTitle: "SEO Optimization",
    tagline: "Win search with technical SEO and white-hat strategy",
    description:
      "Dominate organic search with a complete SEO programme: technical audits, on-page optimization, content strategy, high-authority link building and competitor intelligence.",
    metaDescription:
      "SEO optimization services by InfyGrid Solutions. Technical audits, keyword research, on-page SEO, link building and content strategy to grow organic traffic.",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Mapping",
      "High-Authority Backlinking",
      "Competitor Analysis",
      "On-Page & Schema Optimization",
      "Local SEO & Google Business",
    ],
    benefits: [
      { title: "Long-Term ROI", text: "Organic traffic compounds — every page becomes a 24/7 sales channel." },
      { title: "Transparent Reporting", text: "Monthly dashboards with rankings, traffic, conversions and next steps." },
      { title: "White-Hat Only", text: "Sustainable strategies aligned with Google's quality guidelines." },
    ],
    techStack: ["Ahrefs", "SEMrush", "Google Search Console", "GA4", "Screaming Frog"],
    process: [
      { step: "01", title: "Audit", text: "Technical, on-page and off-page health check." },
      { step: "02", title: "Strategy", text: "Keyword universe, content map and link plan." },
      { step: "03", title: "Execute", text: "Fixes, content production and outreach." },
      { step: "04", title: "Measure", text: "Track rankings, traffic and revenue impact." },
    ],
    icon: "Search",
  },
  {
    slug: "react-native-development",
    path: "/react-native-development",
    title: "React Native Development",
    shortTitle: "React Native",
    tagline: "Cross-platform apps with native-grade performance",
    description:
      "Ship to iOS and Android from a single codebase. We specialise in React Native and Expo to deliver beautiful, fast apps with deep native integration and over-the-air updates.",
    metaDescription:
      "Expert React Native development services. InfyGrid Solutions builds cross-platform iOS & Android apps with Expo, native modules, OTA updates and store deployment.",
    features: [
      "Expo & Bare React Native",
      "Native Module Integration",
      "Over-the-Air (OTA) Updates",
      "Push & In-App Notifications",
      "Offline Sync & Local Storage",
      "App Store & Play Store Deployment",
    ],
    benefits: [
      { title: "Faster Time-to-Market", text: "Ship to both platforms simultaneously — one team, one codebase." },
      { title: "Hot Updates", text: "Push fixes and features to users without app store reviews." },
      { title: "Native When Needed", text: "Custom Swift / Kotlin modules for camera, BLE, ML and more." },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Reanimated", "Zustand", "Firebase"],
    process: [
      { step: "01", title: "Plan", text: "MVP scoping and platform-specific decisions." },
      { step: "02", title: "Design", text: "Cross-platform UI with platform-aware tweaks." },
      { step: "03", title: "Build", text: "Component-driven development with CI/CD." },
      { step: "04", title: "Ship", text: "Store submissions, analytics and OTA rollout." },
    ],
    icon: "Smartphone",
  },
  {
    slug: "digital-marketing",
    path: "/digital-marketing",
    title: "Digital Marketing Services",
    shortTitle: "Digital Marketing",
    tagline: "Data-driven campaigns that move the needle",
    description:
      "Amplify your brand and drive measurable growth with ROI-focused performance marketing: paid social, Google Ads, content marketing, email and CRO — all under one strategy.",
    metaDescription:
      "Digital marketing services by InfyGrid Solutions. Performance ads, social media, content marketing, SEO and conversion rate optimization for measurable growth.",
    features: [
      "Targeted Ad Campaigns (Meta, Google)",
      "Social Media Management",
      "Content Strategy & Production",
      "Conversion Rate Optimization",
      "Email Marketing & Automation",
      "Analytics & Attribution",
    ],
    benefits: [
      { title: "ROI-Focused", text: "Every rupee tracked — we report cost per lead, CAC and LTV, not vanity metrics." },
      { title: "Full-Funnel", text: "Awareness, consideration, conversion and retention covered end-to-end." },
      { title: "Creative + Performance", text: "In-house creatives produce scroll-stopping ads, not template work." },
    ],
    techStack: ["Meta Ads", "Google Ads", "GA4", "HubSpot", "Mailchimp", "Hotjar"],
    process: [
      { step: "01", title: "Audit", text: "Channel performance, ICP and creative benchmark." },
      { step: "02", title: "Strategy", text: "Funnel mapping, budgets and KPIs." },
      { step: "03", title: "Launch", text: "Creative production and campaign go-live." },
      { step: "04", title: "Optimize", text: "Weekly experiments and monthly reviews." },
    ],
    icon: "Megaphone",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
