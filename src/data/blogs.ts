export interface Blog {
  slug: string;
  path: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  author: string;
  readTime: string;
  cover: string;
  content: { type: "h2" | "h3" | "p" | "ul"; text?: string; items?: string[] }[];
}

export const blogs: Blog[] = [
  {
    slug: "website-cost-tamil-nadu",
    path: "/blog/website-cost-tamil-nadu",
    title: "How Much Does a Website Cost in Tamil Nadu in 2025?",
    category: "Tech Guide",
    excerpt:
      "Understanding the pricing of web development in Tamil Nadu can be tricky. We break down the costs from basic portfolios to complex e-commerce platforms.",
    metaDescription:
      "How much does a website cost in Tamil Nadu in 2025? A complete pricing breakdown for portfolios, business sites, e-commerce and custom web apps.",
    date: "Feb 15, 2025",
    author: "InfyGrid Editorial",
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    content: [
      { type: "p", text: "If you've been asking around for website development quotes in Tamil Nadu, you've probably noticed that prices vary wildly — from ₹5,000 'starter packs' to multi-lakh enterprise platforms. So what's a fair price in 2025? Here's an honest, no-nonsense breakdown from our experience building websites in Nagapattinam, Chennai, Trichy and across Tamil Nadu." },
      { type: "h2", text: "The Four Pricing Tiers" },
      { type: "h3", text: "1. Starter Portfolio Sites — ₹8,000 to ₹25,000" },
      { type: "p", text: "Single-page personal portfolios, small clinic or shop websites with 3–5 pages, contact form and basic SEO. Built on templates or page builders. Good for an online presence but limited in growth." },
      { type: "h3", text: "2. Business Websites — ₹25,000 to ₹75,000" },
      { type: "p", text: "10–15 page custom-designed sites with blog/CMS, gallery, SEO setup, WhatsApp integration and Google Maps. Includes 3–6 months of support. Ideal for established local businesses." },
      { type: "h3", text: "3. E-commerce Platforms — ₹75,000 to ₹3,00,000" },
      { type: "p", text: "Full online stores with product catalogue, cart, payment gateway (Razorpay/PhonePe), shipping integration, admin dashboard and order management. Higher prices include DLT-compliant SMS, marketing automation and loyalty programmes." },
      { type: "h3", text: "4. Custom Web Apps & SaaS — ₹2,00,000+" },
      { type: "p", text: "Bespoke dashboards, ERP/CRM systems, booking platforms and SaaS products. Pricing depends on user roles, integrations and scale. We usually scope these in 4–6 week sprints." },
      { type: "h2", text: "What Drives the Price?" },
      { type: "ul", items: ["Design complexity and number of pages", "Custom features vs. plug-and-play modules", "Integrations: payments, SMS, CRM, ERP", "Performance, SEO and accessibility requirements", "Ongoing support and hosting"] },
      { type: "h2", text: "Hidden Costs to Watch Out For" },
      { type: "p", text: "Cheap quotes often skip critical things: SSL, backups, security hardening, mobile optimization and basic SEO. Always ask exactly what's included — and request annual maintenance pricing upfront." },
      { type: "h2", text: "Our Honest Recommendation" },
      { type: "p", text: "Invest in a website that grows with your business. A ₹50,000 site that helps you close ₹5 lakhs of new business in a year is a better deal than a ₹10,000 site that nobody finds. If you're unsure where you fit, talk to us — we'll give you a transparent estimate based on real outcomes." },
    ],
  },
  {
    slug: "why-small-businesses-need-websites",
    path: "/blog/why-small-businesses-need-websites",
    title: "5 Reasons Why Small Businesses in Nagapattinam Need a Website Now",
    category: "Business Insights",
    excerpt:
      "Think your small business doesn't need a website? Think again. In 2025, your digital storefront is just as important as your physical one.",
    metaDescription:
      "5 reasons every small business in Nagapattinam needs a website in 2025 — visibility, trust, leads, WhatsApp & Google ranking explained.",
    date: "Feb 10, 2025",
    author: "InfyGrid Editorial",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1556742049-13da7339b7b7?auto=format&fit=crop&q=80&w=2340",
    content: [
      { type: "p", text: "Walk down any market street in Nagapattinam and you'll see thriving small businesses — sweet shops, electronics dealers, tailors, clinics and tutors. But search for them on Google? Most won't show up. Here's why that's a problem — and the five reasons your small business absolutely needs a website in 2025." },
      { type: "h2", text: "1. Your Customers Already Search Online" },
      { type: "p", text: "Before walking into your shop, your next customer Googles 'best diet food near me' or 'electronics shop in Nagapattinam'. If you're not there, your competitor wins." },
      { type: "h2", text: "2. Trust Begins with a Website" },
      { type: "p", text: "A professional website tells customers you're a real, credible business. No site = no trust, especially for higher-value purchases." },
      { type: "h2", text: "3. WhatsApp + Website = Lead Machine" },
      { type: "p", text: "Modern small-business sites have a Click-to-WhatsApp button on every page. Visitors land, ask a question, and you close the sale — all without phone calls." },
      { type: "h2", text: "4. Google Maps & Local SEO Boost Footfall" },
      { type: "p", text: "A website connected to Google Business Profile pushes your shop to the top of local search — driving free, high-intent footfall every single day." },
      { type: "h2", text: "5. Affordable Than Ever" },
      { type: "p", text: "In 2025, a professional small-business website with hosting and SEO setup costs less than a typical newspaper ad — but works 24/7, for years." },
      { type: "h2", text: "Ready to Go Online?" },
      { type: "p", text: "InfyGrid Solutions builds fast, SEO-friendly websites for small businesses across Tamil Nadu. Let's get your business found online — get in touch for a free consultation." },
    ],
  },
  {
    slug: "benefits-of-custom-software",
    path: "/blog/benefits-of-custom-software",
    title: "Why Off-the-Shelf Software is Holding Your Business Back",
    category: "Software Development",
    excerpt:
      "Generic software might seem easier, but custom-built solutions offer the scalability and efficiency that generic tools never can.",
    metaDescription:
      "Why off-the-shelf software is holding your business back — and how custom software from InfyGrid Solutions unlocks scale, efficiency and ROI.",
    date: "Feb 5, 2025",
    author: "InfyGrid Editorial",
    readTime: "8 min read",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2340",
    content: [
      { type: "p", text: "Off-the-shelf software promises a quick fix: download, subscribe, done. But six months in, most businesses discover that generic tools force them to bend their processes, pay for features they don't use and tolerate gaps that hurt productivity. Here's why custom software is increasingly the smarter bet." },
      { type: "h2", text: "The Hidden Cost of Generic Software" },
      { type: "p", text: "Monthly subscriptions look small until you multiply by users, years and add-ons. Add the workaround spreadsheets your team builds to fill the gaps, and 'cheap' SaaS becomes an expensive workflow tax." },
      { type: "h2", text: "Where Custom Software Wins" },
      { type: "h3", text: "1. Fits Your Process Exactly" },
      { type: "p", text: "Custom software is built around how you actually work — not how a vendor in another country assumed you should." },
      { type: "h3", text: "2. You Own the Roadmap" },
      { type: "p", text: "Need a new feature? Build it. With SaaS, you wait — sometimes forever — for the vendor to ship it." },
      { type: "h3", text: "3. Integrations That Actually Work" },
      { type: "p", text: "Tally, WhatsApp, payment gateways, e-commerce, your own ERP — custom software talks to everything you already use." },
      { type: "h3", text: "4. One-Time Cost, Long-Term Asset" },
      { type: "p", text: "Subscriptions never end. Custom software is a one-time investment that becomes a long-term business asset." },
      { type: "h2", text: "When Should You Switch?" },
      { type: "ul", items: ["You're paying for 10+ SaaS tools that don't talk to each other", "Your team relies on spreadsheets to bridge gaps", "Reporting takes hours instead of seconds", "You can't get a feature you've asked for repeatedly"] },
      { type: "h2", text: "Let's Talk" },
      { type: "p", text: "If your software is slowing your business down, it's probably time for a custom solution. InfyGrid Solutions builds bespoke software — ERP, CRM, dashboards and workflow tools — that fits your business like a glove." },
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);
