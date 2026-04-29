export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  price: number;
  mrp: number;
  duration: string;
  mode: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  language: string;
  certification: string;
  hero: string;
  overview: string;
  highlights: string[];
  whoFor: string[];
  outcomes: string[];
  syllabus: { module: string; topics: string[] }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const courses: Course[] = [
  {
    slug: "pro-trader-program",
    title: "Pro Trader Program",
    shortTitle: "Pro Trader",
    tagline: "Our flagship mentorship to build a disciplined, full-time trading career.",
    price: 80000,
    mrp: 90000,
    duration: "6 Months",
    mode: "Live Online + Recordings",
    level: "Advanced",
    language: "English / Hindi",
    certification: "Pro Trader Certification",
    hero: "Trade like an institution. Think like a risk manager.",
    overview:
      "The Pro Trader Program is a six-month, mentor-led journey covering price action, options strategies, derivatives, risk management, journaling and live market execution. Built for those serious about treating trading as a profession.",
    highlights: [
      "180+ hours of structured live training",
      "Daily live market sessions with mentors",
      "Proprietary trading playbooks & checklists",
      "Personal trading journal review",
      "Lifetime access to recordings",
    ],
    whoFor: [
      "Aspiring full-time traders",
      "Working professionals seeking a second income",
      "Existing traders who want consistency",
    ],
    outcomes: [
      "Build a personal trading system with edge",
      "Master options, futures and intraday setups",
      "Manage risk with institutional discipline",
      "Track and improve performance via journaling",
    ],
    syllabus: [
      { module: "Foundations of Markets", topics: ["Market structure", "Order types", "Brokers & platforms", "Charting basics"] },
      { module: "Technical Analysis Mastery", topics: ["Price action", "Volume profile", "Multi-timeframe analysis", "Indicators that work"] },
      { module: "Derivatives & Options", topics: ["Futures pricing", "Options Greeks", "Strategy selection", "Income strategies"] },
      { module: "Risk & Money Management", topics: ["Position sizing", "Stop-loss systems", "Drawdown control", "Capital allocation"] },
      { module: "Trading Psychology", topics: ["Bias control", "Tilt recovery", "Process journaling", "Habit design"] },
      { module: "Live Execution Lab", topics: ["Daily setups", "Trade reviews", "Mentor desks", "Capstone evaluation"] },
    ],
    faqs: [
      { q: "Do I need prior trading experience?", a: "No. We start from foundations and progress to advanced execution." },
      { q: "Is the course live or recorded?", a: "Both — live mentor-led sessions with lifetime access to recordings." },
      { q: "Will I get a certificate?", a: "Yes. You receive the Pro Trader Certification on successful completion." },
    ],
    featured: true,
  },
  {
    slug: "chartered-stock-analysis-program",
    title: "Chartered Stock Analysis Program",
    shortTitle: "Chartered Stock Analysis",
    tagline: "Become a complete equity analyst — fundamentals, valuation and conviction investing.",
    price: 35000,
    mrp: 45000,
    duration: "4 Months",
    mode: "Live Online",
    level: "Intermediate",
    language: "English / Hindi",
    certification: "Chartered Stock Analyst Certification",
    hero: "Analyse companies the way fund managers do.",
    overview:
      "A rigorous program covering financial statement analysis, ratio frameworks, DCF/relative valuation, sector studies and portfolio construction — built for aspiring analysts and serious long-term investors.",
    highlights: [
      "Annual report deep-dives",
      "DCF & relative valuation models",
      "Sector & competitive analysis",
      "Portfolio construction frameworks",
      "Live company case studies",
    ],
    whoFor: ["Aspiring equity analysts", "Long-term investors", "Finance students & CA / MBA aspirants"],
    outcomes: [
      "Read & interpret annual reports confidently",
      "Build valuation models from scratch",
      "Construct conviction-led portfolios",
      "Communicate investment theses professionally",
    ],
    syllabus: [
      { module: "Financial Statements", topics: ["Income statement", "Balance sheet", "Cash flow", "Quality of earnings"] },
      { module: "Ratios & Frameworks", topics: ["DuPont", "ROCE/ROE", "Working capital", "Red flags"] },
      { module: "Valuation", topics: ["DCF", "Relative valuation", "Sum-of-parts", "Scenario modelling"] },
      { module: "Sector Studies", topics: ["BFSI", "Consumer", "IT", "Manufacturing"] },
      { module: "Portfolio Construction", topics: ["Allocation", "Position sizing", "Rebalancing", "Risk frameworks"] },
    ],
    faqs: [
      { q: "Is finance background required?", a: "Helpful but not mandatory. We cover fundamentals from scratch." },
      { q: "Will I learn Excel modelling?", a: "Yes — hands-on DCF and comparable models in Excel." },
    ],
    featured: true,
  },
  {
    slug: "certification-derivative-analysis",
    title: "Certification into Derivative Analysis",
    shortTitle: "Derivative Analysis",
    tagline: "Master futures, options and structured strategies with confidence.",
    price: 20000,
    mrp: 30000,
    duration: "8 Weeks",
    mode: "Live Online",
    level: "Intermediate",
    language: "English / Hindi",
    certification: "Certified Derivative Analyst",
    hero: "Decode derivatives. Build strategies that fit any market regime.",
    overview:
      "An applied program on derivatives — futures, options Greeks, hedging, multi-leg strategies and event-driven trades. Heavy on real examples and live strategy building.",
    highlights: [
      "Greeks intuition & adjustments",
      "Volatility-based strategy selection",
      "Hedging & portfolio overlays",
      "Event & expiry plays",
    ],
    whoFor: ["Active traders", "Equity investors looking to hedge", "Professionals managing market exposure"],
    outcomes: [
      "Choose the right strategy for the right regime",
      "Adjust positions like a pro",
      "Hedge equity portfolios efficiently",
    ],
    syllabus: [
      { module: "Futures", topics: ["Pricing", "Margins", "Calendar spreads"] },
      { module: "Options", topics: ["Greeks", "IV & skew", "Strategy matrix"] },
      { module: "Strategies", topics: ["Income", "Directional", "Volatility", "Event-driven"] },
      { module: "Risk Overlay", topics: ["Hedging", "Adjustments", "Capital efficiency"] },
    ],
    faqs: [
      { q: "Is this beginner-friendly?", a: "Basic market knowledge helps; we revise core concepts before going advanced." },
    ],
  },
  {
    slug: "financial-analysis-certifications",
    title: "Financial Analysis Certifications",
    shortTitle: "Financial Analysis",
    tagline: "Industry-grade financial analysis — from statements to strategic insights.",
    price: 35000,
    mrp: 50000,
    duration: "3 Months",
    mode: "Live Online + Projects",
    level: "Intermediate",
    language: "English",
    certification: "Certified Financial Analyst (Industry)",
    hero: "Turn numbers into strategic decisions.",
    overview:
      "A practitioner-focused certification covering financial modelling, FP&A, business valuation and management reporting — designed with hiring needs of BFSI, consulting and corporate finance in mind.",
    highlights: [
      "End-to-end 3-statement modelling",
      "FP&A dashboards in Excel",
      "Valuation case studies",
      "Capstone live company project",
    ],
    whoFor: ["Finance graduates", "Working analysts", "MBA & CA aspirants targeting analyst roles"],
    outcomes: [
      "Build hire-ready financial models",
      "Prepare board-grade reporting",
      "Crack analyst interviews with confidence",
    ],
    syllabus: [
      { module: "Accounting Refresher", topics: ["Standards", "Adjustments", "Notes to accounts"] },
      { module: "Financial Modelling", topics: ["3-statement", "Drivers", "Sensitivities"] },
      { module: "FP&A", topics: ["Budgeting", "Variance analysis", "Dashboards"] },
      { module: "Valuation", topics: ["DCF", "Comps", "Precedent transactions"] },
      { module: "Capstone", topics: ["Live company project", "Pitch presentation"] },
    ],
    faqs: [
      { q: "Will this help me get a job?", a: "It builds the exact toolkit hiring managers expect from analysts. We also share interview prep." },
    ],
    featured: true,
  },
  {
    slug: "certification-finance-market-research",
    title: "Certification into Finance & Market Research",
    shortTitle: "Finance & Market Research",
    tagline: "Our most comprehensive program for institutional-grade research careers.",
    price: 120000,
    mrp: 130000,
    duration: "9 Months",
    mode: "Live Online + Mentorship",
    level: "Advanced",
    language: "English",
    certification: "Certified Finance & Market Research Professional",
    hero: "Train for buy-side and sell-side research roles.",
    overview:
      "An immersive program combining macro analysis, sector research, equity & credit modelling, primary research, and report writing. Mentored by practitioners from research desks and asset managers.",
    highlights: [
      "Macro, sector & company research",
      "Buy-side & sell-side report writing",
      "Primary research methods",
      "1:1 mentor reviews",
      "Placement assistance",
    ],
    whoFor: ["Aspiring research analysts", "Finance professionals targeting research roles", "MBA / CFA candidates"],
    outcomes: [
      "Publish institutional-grade research notes",
      "Build & defend stock pitches",
      "Interview for analyst & associate roles",
    ],
    syllabus: [
      { module: "Macro & Markets", topics: ["Cycles", "Policy", "Cross-asset"] },
      { module: "Sector Research", topics: ["Frameworks", "Channel checks", "KPIs"] },
      { module: "Equity Research", topics: ["Models", "Initiations", "Earnings notes"] },
      { module: "Credit Research", topics: ["Ratings", "Spread analysis", "Default models"] },
      { module: "Report Writing", topics: ["Structure", "Visualisation", "Editorial standards"] },
      { module: "Mentorship & Placement", topics: ["Mock interviews", "Portfolio reviews", "Referrals"] },
    ],
    faqs: [
      { q: "Is placement guaranteed?", a: "We offer placement assistance — interview prep, referrals and resume reviews. Outcomes depend on your performance." },
    ],
    featured: true,
  },
  {
    slug: "stock-market-foundation-program",
    title: "Stock Market Foundation Program",
    shortTitle: "Foundation",
    tagline: "Start your market journey the right way — clear, structured, jargon-free.",
    price: 9900,
    mrp: 14900,
    duration: "4 Weeks",
    mode: "Live Online",
    level: "Beginner",
    language: "English / Hindi",
    certification: "Foundation Certificate",
    hero: "Begin with clarity. Build with confidence.",
    overview:
      "A beginner-friendly bootcamp covering market basics, charting, investing principles and your first guided trades. The perfect on-ramp before our advanced certifications.",
    highlights: [
      "Market & instrument basics",
      "Guided first trades",
      "Investing vs trading framework",
      "Tools & broker setup",
    ],
    whoFor: ["Absolute beginners", "Students exploring finance", "Professionals new to markets"],
    outcomes: [
      "Confidently navigate trading platforms",
      "Read charts and basic financials",
      "Make informed first investments",
    ],
    syllabus: [
      { module: "Market Basics", topics: ["Equity, F&O, MF", "How markets work", "Key participants"] },
      { module: "Charting 101", topics: ["Candles", "Trends", "Support & resistance"] },
      { module: "Investing Principles", topics: ["Risk", "Diversification", "Long-term mindset"] },
      { module: "Your First Trade", topics: ["Broker setup", "Order placement", "Review"] },
    ],
    faqs: [
      { q: "I know nothing about markets — is this right for me?", a: "Yes. This program is built specifically for absolute beginners." },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
