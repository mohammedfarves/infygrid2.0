export interface Project {
  slug: string;
  path: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  summary: string;
  description: string;
  metaDescription: string;
  liveUrl?: string;
  industry: string;
  duration: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  techStack: string[];
  logoBg: string;
  logoChar: string;
  deviceType: "desktop" | "mobile";
  review?: {
    author: string;
    role: string;
    content: string;
  };
  logoUrl?: string;
  screenshotDesktop?: string;
  screenshotTablet?: string;
  screenshotMobile?: string;
}

export const projects: Project[] = [
  {
    slug: "trueluxe",
    path: "/projects/trueluxe",
    title: "Trueluxe.in — Digital Marketing & FinTech Platform",
    client: "Trueluxe",
    category: "Digital Marketing & FinTech",
    tags: ["FinTech", "Marketing", "Strategy"],
    summary: "Comprehensive digital marketing strategies and stock brokerage platform integration.",
    description: "Trueluxe is a sophisticated platform combining high-end digital marketing strategies with seamless stock brokerage integrations. We built a high-performance portal that handles real-time data while maintaining a premium aesthetic.",
    metaDescription: "Case study: Trueluxe digital marketing and fintech integration by InfyGrid Solutions.",
    liveUrl: "https://trueluxe.in/",
    industry: "FinTech",
    duration: "14 weeks",
    services: ["Digital Marketing", "FinTech Integration", "Web Development"],
    challenge: "Merging complex financial data streams with a user-friendly marketing front-end required extreme attention to detail and performance.",
    solution: "We implemented a custom architecture using real-time data sockets and a refined UI that prioritizes clarity and conversion.",
    results: [
      { metric: "+120%", label: "User Engagement" },
      { metric: "2x", label: "Lead Conversion" },
      { metric: "<1s", label: "Data Latency" }
    ],
    techStack: ["React", "Node.js", "Redis", "Financial APIs"],
    logoBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
    logoChar: "T",
    deviceType: "desktop",
    logoUrl: "/projects/logos/trueluxe.png",
    screenshotDesktop: "/projects/screenshots/trueluxe-desktop.png",
    screenshotTablet: "/projects/screenshots/trueluxe-tablet.png",
    screenshotMobile: "/projects/screenshots/trueluxe-mobile.png",
    review: {
      author: "Rahul S.",
      role: "Operations Head, Trueluxe",
      content: "The digital transformation InfyGrid provided has been a game-changer for our fintech operations. Their attention to security and real-time data handling is exceptional."
    }
  },
  {
    slug: "ebat-ai-drone-technology",
    path: "/projects/ebat-ai-drone-technology",
    title: "EBAT — AI & Drone Technology Website",
    client: "EBAT Technologies",
    category: "Drone Manufacturing",
    tags: ["AI/ML", "Manufacturing", "Tech"],
    summary: "Corporate platform for a cutting-edge drone technology and manufacturing company.",
    description: "A modern corporate site for EBAT — an AI-driven drone technology company — communicating their R&D, use cases across agriculture, defence and surveying.",
    metaDescription: "Case study: EBAT AI & drone technology website by InfyGrid Solutions.",
    liveUrl: "https://ebat.in",
    industry: "AI & Robotics",
    duration: "8 weeks",
    services: ["Web Development", "UI/UX Design", "Content Strategy"],
    challenge: "Translate highly technical drone and AI capabilities into a website that resonates with enterprise buyers.",
    solution: "A high-impact website with animated hero, product catalogue, and use-case case studies.",
    results: [
      { metric: "12+", label: "Enterprise Leads / mo" },
      { metric: "55%", label: "Lower Bounce Rate" },
      { metric: "3", label: "Gov RFPs Won" }
    ],
    techStack: ["React", "Three.js", "Node.js", "Tailwind"],
    logoBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
    logoChar: "E",
    deviceType: "desktop",
    logoUrl: "/projects/logos/ebat.png",
    screenshotDesktop: "/projects/screenshots/ebat-desktop.png",
    screenshotTablet: "/projects/screenshots/ebat-tablet.png",
    screenshotMobile: "/projects/screenshots/ebat-mobile.png",
    review: {
      author: "Vikram Mehta",
      role: "CTO, EBAT Technologies",
      content: "InfyGrid managed to distill our complex AI algorithms and drone mechanics into a sleek, professional digital identity that has significantly boosted our enterprise sales pipeline."
    }
  },
  {
    slug: "violin-sri-jagan-portfolio",
    path: "/projects/violin-sri-jagan-portfolio",
    title: "Violin Sri Jagan — Premium Artist Portfolio",
    client: "Violin Sri Jagan",
    category: "Business Portfolio",
    tags: ["Portfolio", "Arts", "Music"],
    summary: "Elegant artist portfolio showcasing performances, recordings, and professional identity.",
    description: "A cinematic portfolio website for renowned violinist Sri Jagan, designed to convey artistry while making it effortless for event organisers to get in touch.",
    metaDescription: "Case study: Violin Sri Jagan premium artist portfolio by InfyGrid Solutions.",
    liveUrl: "https://violinsrijagan.in",
    industry: "Arts & Entertainment",
    duration: "4 weeks",
    services: ["Web Development", "UI/UX Design", "SEO"],
    challenge: "The artist needed a polished digital identity that communicated decades of musical excellence.",
    solution: "We delivered a cinematic experience with hero reel, gallery, and a friction-free enquiry form.",
    results: [
      { metric: "+40%", label: "Booking Enquiries" },
      { metric: "Top 3", label: "Local SEO" },
      { metric: "98", label: "Lighthouse Score" }
    ],
    techStack: ["React", "Framer Motion", "Node.js"],
    logoBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    logoChar: "V",
    deviceType: "desktop",
    logoUrl: "/projects/logos/violinsrijagan.png",
    screenshotDesktop: "/projects/screenshots/violinsrijagan-desktop.png",
    screenshotTablet: "/projects/screenshots/violinsrijagan-tablet.png",
    screenshotMobile: "/projects/screenshots/violinsrijagan-mobile.png",
    review: {
      author: "Sri Jagan",
      role: "Founder, Violin Sri Jagan",
      content: "The portfolio website perfectly represents my musical journey. After launching the site, I noticed a clear increase in inquiries and event bookings."
    }
  },
  {
    slug: "lumina-trust",
    path: "/projects/lumina-trust",
    title: "Lumina Trust — NGO & Non-Profit Platform",
    client: "Lumina Trust",
    category: "NGO / Non-Profit",
    tags: ["NGO", "Non-Profit", "Donation"],
    summary: "Centralized platform for NGO activities, donations, and volunteer management.",
    description: "A centralized platform built for Lumina Trust to manage their non-profit activities, streamline donation flows, and coordinate volunteer efforts across multiple initiatives.",
    metaDescription: "Case study: Lumina Trust NGO platform by InfyGrid Solutions.",
    liveUrl: "https://luminatrust.org",
    industry: "Non-Profit",
    duration: "6 weeks",
    services: ["Web Development", "Donation Integration", "CMS"],
    challenge: "Managing diverse NGO activities and ensuring a secure, trustworthy donation process.",
    solution: "A clean, content-rich website with transparent program tracking and a simplified donation funnel.",
    results: [
      { metric: "5x", label: "Volunteer Signups" },
      { metric: "+80%", label: "Donation Ease" },
      { metric: "100%", label: "Transparency" }
    ],
    techStack: ["React", "Node.js", "Payment APIs", "Netlify"],
    logoBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    logoChar: "L",
    deviceType: "desktop",
    logoUrl: "/projects/logos/luminatrust.png",
    screenshotDesktop: "/projects/screenshots/luminatrust-desktop.png",
    screenshotTablet: "/projects/screenshots/luminatrust-tablet.png",
    screenshotMobile: "/projects/screenshots/luminatrust-mobile.png",
    review: {
      author: "Anjali Devi",
      role: "Trustee, Lumina Trust",
      content: "The new platform has transformed our fundraising efforts. The transparency it provides has built immense trust with our global donor base."
    }
  },
  {
    slug: "maha-hostel",
    path: "/projects/maha-hostel",
    title: "Maha Deluxe Women's Hostel — Management Platform",
    client: "Maha Deluxe",
    category: "Hostel Management",
    tags: ["Management", "Real Estate", "Booking"],
    summary: "Modern management and booking platform for premium women's accommodation.",
    description: "A comprehensive management and booking system for Maha Deluxe Women's Hostel, designed to simplify room allocation, payments, and guest interactions.",
    metaDescription: "Case study: Maha Deluxe Women's Hostel management platform by InfyGrid Solutions.",
    liveUrl: "https://mahadeluxewomenshostel.in",
    industry: "Hospitality",
    duration: "8 weeks",
    services: ["Software Development", "UI/UX Design", "Management System"],
    challenge: "Replacing manual register entries with a scalable digital system that handles bookings and billing.",
    solution: "We built a custom dashboard for management and a user-friendly booking portal for residents.",
    results: [
      { metric: "90%", label: "Process Automation" },
      { metric: "0", label: "Booking Errors" },
      { metric: "24/7", label: "Availability" }
    ],
    techStack: ["React", "PostgreSQL", "Node.js"],
    logoBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    logoChar: "M",
    deviceType: "desktop",
    logoUrl: "/projects/logos/mahahostel.png",
    screenshotDesktop: "/projects/screenshots/mahahostel-desktop.png",
    screenshotTablet: "/projects/screenshots/mahahostel-tablet.png",
    screenshotMobile: "/projects/screenshots/mahahostel-mobile.png",
    review: {
      author: "Mrs. Revathi",
      role: "Managing Director, Maha Deluxe",
      content: "Automating our billing and room allocation has saved us countless hours of manual work. The residents love the ease of the new booking portal."
    }
  },
  {
    slug: "haleem-fx",
    path: "/projects/haleem-fx",
    title: "Haleem FX — Precision Fitness App",
    client: "Haleem FX",
    category: "Fitness / HealthTech",
    tags: ["Health", "Fitness", "Calculator"],
    summary: "Precision fitness calculator and nutrition tracking application.",
    description: "Haleem FX is a high-precision fitness calculator designed for athletes and fitness enthusiasts to track nutrition, calculate macros, and monitor progress with scientific accuracy.",
    metaDescription: "Case study: Haleem FX fitness calculator app by InfyGrid Solutions.",
    liveUrl: "https://haleemfx.netlify.app",
    industry: "Health & Fitness",
    duration: "5 weeks",
    services: ["App Development", "Algorithm Design", "UI/UX"],
    challenge: "Ensuring high accuracy in nutrition calculations across a diverse range of user profiles.",
    solution: "A sleek, cyberpunk-inspired mobile web app with optimized calculation algorithms and an intuitive interface.",
    results: [
      { metric: "10k+", label: "Daily Active Users" },
      { metric: "4.9/5", label: "User Rating" },
      { metric: "<100ms", label: "Calc Speed" }
    ],
    techStack: ["React", "Zustand", "PWA"],
    logoBg: "bg-gradient-to-br from-red-500 to-rose-600",
    logoChar: "H",
    deviceType: "mobile",
    logoUrl: "/projects/logos/haleemfx.png",
    screenshotDesktop: "/projects/screenshots/haleemfx-desktop.png",
    screenshotTablet: "/projects/screenshots/haleemfx-tablet.png",
    screenshotMobile: "/projects/screenshots/haleemfx-mobile.png",
    review: {
      author: "Abdul Haleem",
      role: "Founder, Haleem FX",
      content: "InfyGrid's technical prowess and design sense are unmatched. They took a complex mathematical requirement and turned it into an addictive, beautiful app."
    }
  },
  {
    slug: "ags-healthy-foods",
    path: "/projects/ags-healthy-foods",
    title: "AGS Healthy Foods — Diet E-commerce",
    client: "AGS Healthy Foods",
    category: "E-commerce",
    tags: ["E-commerce", "Health", "Food"],
    summary: "Custom diet food ordering platform with secure payment integration.",
    description: "A fully custom ordering experience with daily menus, plan subscriptions, and secure payments for a premium diet food provider.",
    metaDescription: "Case study: AGS Healthy Foods diet ordering platform by InfyGrid Solutions.",
    liveUrl: "https://agshealthyfoods.in",
    industry: "Food & Beverage",
    duration: "10 weeks",
    services: ["E-commerce", "Subscription Billing", "Mobile UX"],
    challenge: "Handling complex meal subscriptions and delivery logistics.",
    solution: "Custom subscription engine with automated delivery scheduling and Razorpay integration.",
    results: [
      { metric: "3x", label: "Order Growth" },
      { metric: "60%", label: "Less Admin Work" },
      { metric: "15k+", label: "Meals Delivered" }
    ],
    techStack: ["React", "Node.js", "MongoDB", "Razorpay"],
    logoBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    logoChar: "A",
    deviceType: "desktop",
    logoUrl: "/projects/logos/agshealthyfoods.png",
    screenshotDesktop: "/projects/screenshots/agshealthyfoods-desktop.png",
    screenshotTablet: "/projects/screenshots/agshealthyfoods-tablet.png",
    screenshotMobile: "/projects/screenshots/agshealthyfoods-mobile.png",
    review: {
      author: "Arul Prakash",
      role: "Founder & CEO, AGS Healthy Foods",
      content: "InfyGrid developed a fully customized diet food ordering platform tailored to our business model. The system streamlined our order management and improved our customer experience significantly."
    }
  },
  {
    slug: "sri-krishna-digital-world",
    path: "/projects/sri-krishna-digital-world",
    title: "Sri Krishna Digital World — Enterprise E-commerce",
    client: "Sri Krishna Digital World",
    category: "Enterprise E-commerce",
    tags: ["Enterprise", "E-commerce", "Retail"],
    summary: "Large-scale e-commerce ecosystem with integrated mobile application.",
    description: "A premium e-commerce experience for a leading consumer electronics brand, featuring a high-performance catalogue and secure transaction flow.",
    metaDescription: "Case study: Sri Krishna Digital World enterprise e-commerce by InfyGrid Solutions.",
    liveUrl: "https://srikrishnadigitalworld.in",
    industry: "Consumer Electronics",
    duration: "12 weeks",
    services: ["Enterprise Web", "Mobile App", "Scalable Arch"],
    challenge: "Scaling a massive product catalogue while maintaining sub-second load times.",
    solution: "Optimized indexing, CDN integration, and a custom-built storefront.",
    results: [
      { metric: "2.5x", label: "Online Sales" },
      { metric: "<1.5s", label: "Page Load" },
      { metric: "99.9%", label: "Uptime" }
    ],
    techStack: ["React", "PostgreSQL", "Node.js", "AWS"],
    logoBg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    logoChar: "S",
    deviceType: "desktop",
    logoUrl: "/projects/logos/srikrishnadigitalworld.png",
    screenshotDesktop: "/projects/screenshots/srikrishnadigitalworld-desktop.png",
    screenshotTablet: "/projects/screenshots/srikrishnadigitalworld-tablet.png",
    screenshotMobile: "/projects/screenshots/srikrishnadigitalworld-mobile.png",
    review: {
      author: "Jaya Prakash",
      role: "CEO, Sri Krishna Digital World",
      content: "InfyGrid delivered a powerful custom-built solution with integrated payment gateway and DLT-based OTP authentication. The website handles high product volume efficiently."
    }
  },
  {
    slug: "sri-krishna-digital",
    path: "/projects/sri-krishna-digital",
    title: "Sri Krishna Digital — Creative Agency Platform",
    client: "Sri Krishna Digital",
    category: "Digital Services",
    tags: ["Branding", "Creative", "Agency"],
    summary: "Creative agency platform for high-end digital solutions and branding.",
    description: "A high-end creative agency platform showcasing digital solutions, branding expertise, and a portfolio of premium design work.",
    metaDescription: "Case study: Sri Krishna Digital creative agency platform by InfyGrid Solutions.",
    industry: "Digital Services",
    duration: "6 weeks",
    services: ["Branding", "UI/UX Design", "Web Development"],
    challenge: "Creating a design-first website that reflects the agency's creative prowess.",
    solution: "Minimalist design with bold typography and smooth, purposeful animations.",
    results: [
      { metric: "+200%", label: "Portfolio Views" },
      { metric: "Gold", label: "Design Award" },
      { metric: "40%", label: "Better Leads" }
    ],
    techStack: ["React", "Tailwind", "GSAP"],
    logoBg: "bg-gradient-to-br from-purple-500 to-pink-600",
    logoChar: "K",
    deviceType: "desktop",
    logoUrl: "/projects/logos/srikrishnadigital.png",
    screenshotDesktop: "/projects/screenshots/srikrishnadigital-desktop.png",
    screenshotTablet: "/projects/screenshots/srikrishnadigital-tablet.png",
    screenshotMobile: "/projects/screenshots/srikrishnadigital-mobile.png",
    review: {
      author: "Karthik R.",
      role: "Creative Director, SKD",
      content: "As a creative agency, our standards for UI/UX were extremely high. InfyGrid exceeded them, delivering a site that is a work of art in itself."
    }
  },
  {
    slug: "trueluxe-service",
    path: "/projects/trueluxe-service",
    title: "Trueluxe Service — Home Appliance Ecosystem",
    client: "Trueluxe",
    category: "Home Appliances",
    tags: ["Service", "Booking", "Upcoming"],
    summary: "Upcoming doorstep service platform for AC and electronics maintenance.",
    description: "A revolutionary doorstep service platform currently in development, aimed at transforming how AC and home appliance maintenance is booked and managed.",
    metaDescription: "Upcoming project: Trueluxe Service home appliance platform by InfyGrid Solutions.",
    industry: "Home Services",
    duration: "In Progress",
    services: ["Product Design", "Scalable Architecture", "Mobile Web"],
    challenge: "Designing a complex service dispatch system with real-time tracking.",
    solution: "Geospatial indexing and a dual-interface for service providers and customers.",
    results: [
      { metric: "TBA", label: "Project Status" },
      { metric: "Beta", label: "Release Phase" },
      { metric: "100%", label: "Planned" }
    ],
    techStack: ["React", "Firebase", "Google Maps API"],
    logoBg: "bg-gradient-to-br from-rose-500 to-orange-600",
    logoChar: "TS",
    deviceType: "mobile",
    logoUrl: "/projects/logos/trueluxeservice.png",
    screenshotDesktop: "/projects/screenshots/trueluxeservice-desktop.png",
    screenshotTablet: "/projects/screenshots/trueluxeservice-tablet.png",
    screenshotMobile: "/projects/screenshots/trueluxeservice-mobile.png"
  },
  {
    slug: "sri-krishna-supermarket",
    path: "/projects/sri-krishna-supermarket",
    title: "Sri Krishna Supermarket — Grocery Ecosystem",
    client: "Sri Krishna Supermarket",
    category: "Grocery App",
    tags: ["Retail", "Grocery", "Upcoming"],
    summary: "Upcoming grocery ordering and delivery mobile application.",
    description: "A large-scale grocery ecosystem in development, featuring real-time inventory sync and a high-performance delivery tracking system.",
    metaDescription: "Upcoming project: Sri Krishna Supermarket grocery app by InfyGrid Solutions.",
    industry: "Retail",
    duration: "In Progress",
    services: ["Mobile App", "Inventory Sync", "Cloud Arch"],
    challenge: "Handling thousands of SKUs with real-time stock updates across multiple locations.",
    solution: "High-performance indexing and a distributed inventory management system.",
    results: [
      { metric: "TBA", label: "Project Status" },
      { metric: "Dev", label: "Release Phase" },
      { metric: "100%", label: "Planned" }
    ],
    techStack: ["React Native", "Node.js", "Redis"],
    logoBg: "bg-gradient-to-br from-green-600 to-teal-700",
    logoChar: "KM",
    deviceType: "mobile",
    logoUrl: "/projects/logos/srikrishnasupermarket.png",
    screenshotDesktop: "/projects/screenshots/srikrishnasupermarket-desktop.png",
    screenshotTablet: "/projects/screenshots/srikrishnasupermarket-tablet.png",
    screenshotMobile: "/projects/screenshots/srikrishnasupermarket-mobile.png"
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
