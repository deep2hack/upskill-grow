import forexImg from "@/assets/courses/forex-trading.png";
import charteredImg from "@/assets/courses/chartered-stock.png";
import cryptoImg from "@/assets/courses/crypto-mastery.png";
import marketMasteryImg from "@/assets/courses/market-mastery.png";
import intradayImg from "@/assets/courses/intraday-trading.png";
import candlestickImg from "@/assets/courses/candlestick-pattern.png";
import optionImg from "@/assets/courses/option-mastery.png";

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
  image?: string;
};

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const courses: Course[] = [
  {
    slug: "forex-trading-program",
    image: forexImg,
    title: "Professional Forex Trading Program",
    shortTitle: "Forex Trading",
    tagline: "Master Smart Money Concepts, liquidity & prop firm strategies for modern Forex trading.",
    price: 9499,
    mrp: 14999,
    duration: "3 Months",
    mode: "Live Online + Recordings",
    level: "All Levels",
    language: "English / Hindi",
    certification: "Professional Forex Trader Certificate",
    hero: "Learn. Practice. Earn. Repeat — institutional Forex trading made practical.",
    overview:
      "A complete professional Forex Trading program for beginners to advanced traders covering price action, Smart Money Concepts (SMC), liquidity, market structure, high probability setups, risk management, psychology, live trading and prop firm strategies. Built around modern institutional concepts and real-world execution.",
    highlights: [
      "Smart Money Concepts & ICT frameworks",
      "Liquidity sweep & sniper entry strategies",
      "Prop firm passing strategy (FTMO style)",
      "Live London & New York session trading",
      "Risk management & winning trader psychology",
    ],
    whoFor: ["Beginner Forex traders", "Intraday & swing traders", "Aspiring prop firm traders", "Anyone serious about institutional trading"],
    outcomes: [
      "Read market structure like an institution",
      "Execute high-probability sniper entries",
      "Pass prop firm challenges with discipline",
      "Build a consistent Forex trading edge",
    ],
    syllabus: [
      { module: "Forex Basics", topics: ["Forex market", "Currency pairs", "Pips, lots & leverage", "Bid & ask", "Spread & swap", "Trading sessions", "Bank movement concepts"] },
      { module: "Price Action Trading", topics: ["Candlestick psychology", "Support & resistance", "Trendlines", "Breakout & retest", "Market structure", "BOS & CHOCH"] },
      { module: "Smart Money Concepts", topics: ["Liquidity", "Order blocks", "Fair value gaps", "Inducement", "Stop hunts", "Institutional concepts"] },
      { module: "Forex Chart Patterns", topics: ["Double top / bottom", "Head & shoulders", "Triangles", "Flags & pennants"] },
      { module: "Forex Sessions Strategy", topics: ["London open", "New York open", "Kill zones", "Session liquidity sweep"] },
      { module: "High Probability Setups", topics: ["Sniper entry", "Breakout retest", "Scalping", "Swing trading", "Intraday setups"] },
      { module: "Risk Management", topics: ["Position sizing", "Risk reward", "Compounding", "Capital protection"] },
      { module: "Trading Psychology", topics: ["Fear & greed", "Overtrading", "Discipline", "Emotional control"] },
      { module: "Advanced Forex Concepts", topics: ["DXY", "Gold correlation", "News trading", "Multi timeframe analysis"] },
      { module: "Live Trading", topics: ["Live market analysis", "Trade execution", "Trade management", "Case studies"] },
      { module: "Bonus — Prop Firm & AI", topics: ["Prop firm trading", "FTMO challenge", "AI tools for traders", "Trading workspace setup"] },
    ],
    faqs: [
      { q: "Do I need prior trading experience?", a: "No — we start from Forex basics and progress to institutional concepts." },
      { q: "Will this help me pass prop firm challenges?", a: "Yes. A dedicated module covers FTMO-style prop firm passing strategies." },
    ],
    featured: true,
  },
  {
    slug: "chartered-stock-fundamental-analysis",
    image: charteredImg,
    title: "Chartered Stock Market Fundamental Analysis & Investing Strategy",
    shortTitle: "Fundamental Analysis",
    tagline: "Read the Janam Kundli of companies — multibagger investing & financial analysis mastery.",
    price: 20558,
    mrp: 35558,
    duration: "4 Months",
    mode: "Live Online + Case Studies",
    level: "Intermediate",
    language: "English / Hindi",
    certification: "Chartered Fundamental Analyst Certificate",
    hero: "Discover. Analyze. Invest. Multiply Wealth — find potential jackpot companies.",
    overview:
      "A complete professional Fundamental Analysis & Investing Strategy course designed for investors, traders and job seekers who want to master company analysis, financial statement reading, valuation techniques and long-term wealth creation. Focused on multibagger identification, Warren Buffett ratios, DCF & Benjamin Graham valuation, industry analysis and real-world investing frameworks.",
    highlights: [
      "Multibagger stock selection framework",
      "Annual report & investor presentation deep-dives",
      "DCF, Benjamin Graham & intrinsic value models",
      "Warren Buffett ratios & debt analysis",
      "Real company case studies & live calculations",
    ],
    whoFor: ["Long-term & value investors", "Traders learning financial analysis", "Beginner investors", "Job seekers for financial analyst roles"],
    outcomes: [
      "Identify multibagger stocks with confidence",
      "Read balance sheet, P&L and cash flow professionally",
      "Build DCF and Graham valuation models",
      "Develop a research-driven investor mindset",
    ],
    syllabus: [
      { module: "Multibagger Strategies", topics: ["Stock selection framework", "Long-term wealth creation", "Investor mindset"] },
      { module: "Financial Statements", topics: ["Balance sheet", "Profit & loss", "Cash flow", "Annual report reading"] },
      { module: "Margins & Ratios", topics: ["Gross & operating margins", "Warren Buffett ratios", "Debt analysis", "EBITDA / EBIT / PAT / EPS"] },
      { module: "Valuation Models", topics: ["Intrinsic value", "DCF valuation", "Benjamin Graham", "Stock valuation techniques"] },
      { module: "Industry & Business Analysis", topics: ["Industry shortlisting", "Capex tracking", "Competitive advantage", "Management commentary"] },
      { module: "Due Diligence & Risk", topics: ["Financial due diligence", "Bankruptcy & solvency", "Asset turnover", "Future outlook analysis"] },
    ],
    faqs: [
      { q: "Do I need a finance background?", a: "No — we cover fundamentals from scratch with real company case studies." },
      { q: "Will I learn Excel-based valuation?", a: "Yes — hands-on DCF, Graham and intrinsic value calculations." },
    ],
    featured: true,
  },
  {
    slug: "crypto-mastery-complete-course",
    image: cryptoImg,
    title: "Crypto Mastery Complete Course",
    shortTitle: "Crypto Mastery",
    tagline: "From scratch to advanced — the complete crypto trading university.",
    price: 9599,
    mrp: 19999,
    duration: "3 Months",
    mode: "Live Online + Recordings",
    level: "All Levels",
    language: "English / Hindi",
    certification: "Crypto Mastery Certificate",
    hero: "Master Bitcoin, Altcoins, DeFi, Web3, NFTs & the future of money.",
    overview:
      "A practical Crypto Learning Program for beginners, traders and investors. Covers blockchain fundamentals, Bitcoin & altcoin ecosystems, spot & futures trading, Smart Money Concepts, on-chain analysis, whale tracking, DeFi, NFTs, Web3 and AI crypto trends — a complete transformation from beginner to advanced crypto trader.",
    highlights: [
      "Smart Money & institutional crypto setups",
      "Whale tracking & on-chain analysis",
      "Futures, leverage & spot trading mastery",
      "DeFi, NFTs, Web3 & AI coin concepts",
      "1000+ trading concepts & lifetime support",
    ],
    whoFor: ["Crypto beginners", "Crypto traders & investors", "Futures & leverage traders", "Web3 / Blockchain enthusiasts"],
    outcomes: [
      "Trade crypto futures & spot with confidence",
      "Track whales and read on-chain data",
      "Build a smart crypto portfolio",
      "Understand DeFi, NFTs and AI coin trends",
    ],
    syllabus: [
      { module: "Crypto & Blockchain Basics", topics: ["Cryptocurrency fundamentals", "Blockchain technology", "Bitcoin, Ethereum & altcoins"] },
      { module: "Web3, DeFi & NFTs", topics: ["DeFi concepts", "NFTs", "Web3 ecosystem", "AI crypto trends"] },
      { module: "Trading Foundations", topics: ["Spot trading", "Futures & leverage", "Price action", "Market structure"] },
      { module: "Smart Money Concepts", topics: ["Liquidity & manipulation", "Institutional setups", "High probability entries"] },
      { module: "Risk & Psychology", topics: ["Risk management", "Trading psychology", "Capital protection"] },
      { module: "On-chain & Whale Tracking", topics: ["On-chain analysis", "Whale tracking", "Smart money flows"] },
      { module: "Portfolio & AI Tools", topics: ["Crypto portfolio management", "AI tools for traders", "Live market analysis"] },
    ],
    faqs: [
      { q: "Is this safe for crypto beginners?", a: "Yes — we start from zero and progress to advanced setups responsibly." },
      { q: "Do you cover futures & leverage?", a: "Yes, with strict risk management frameworks." },
    ],
    featured: true,
  },
  {
    slug: "market-mastery-pro-trader",
    image: marketMasteryImg,
    title: "Market Mastery — Pro Trader Program (Zero to Hero)",
    shortTitle: "Market Mastery Pro",
    tagline: "India's complete real-time trading & investing transformation program.",
    price: 17499,
    mrp: 34999,
    duration: "5 Months",
    mode: "Hybrid — Classroom + Live + Recordings",
    level: "All Levels",
    language: "English / Hindi",
    certification: "Pro Trader Mastery Certificate",
    hero: "Trade smart. Invest wisely. Grow consistently — your future, your rules.",
    overview:
      "India's first hybrid trading mentorship combining classroom-based learning, recorded sessions, live market execution and continuous mentor support. Built for beginners, traders, investors and working professionals to understand how smart money operates across Forex, Commodity, Equity, Crypto and Global markets.",
    highlights: [
      "Live market brain transfer program",
      "Real-time trade execution with mentors",
      "Smart Money & institutional concepts",
      "Forex, Commodity, Equity & Crypto coverage",
      "Professional trading psychology training",
    ],
    whoFor: ["Beginners entering trading", "Traders seeking consistency", "Investors learning professional analysis", "Working professionals interested in markets"],
    outcomes: [
      "Operate with a professional trader mindset",
      "Execute high-probability setups in real time",
      "Manage risk and emotions like a pro",
      "Trade across multiple asset classes confidently",
    ],
    syllabus: [
      { module: "Stock Market Foundation Mastery", topics: ["Indian & global markets", "Forex, Commodity, Equity & Crypto basics", "News manipulation", "Market participants & smart money"] },
      { module: "Price Action & Chart Reading", topics: ["Candlestick psychology", "Support & resistance", "Trendlines", "Market structure", "Breakouts & reversals"] },
      { module: "Smart Money Concepts", topics: ["Liquidity", "Order blocks", "Fair value gaps", "Stop hunts", "Institutional trading"] },
      { module: "Live Trading Strategies", topics: ["Intraday setups", "Scalping", "Swing trading", "Futures trading", "High probability entries"] },
      { module: "Psychology & Risk Management", topics: ["Fear & greed", "Discipline", "Risk management", "Capital protection", "Trader mindset"] },
      { module: "Real-Time Market Execution", topics: ["Live market analysis", "Trade execution", "Entry & exit planning", "Trade management"] },
    ],
    faqs: [
      { q: "Is this a theory-only course?", a: "No — it is a real-time trading transformation with live execution and mentor support." },
      { q: "Which markets are covered?", a: "Forex, Commodity, Equity, Crypto and global markets." },
    ],
    featured: true,
  },
  {
    slug: "intraday-trading-strategies",
    image: intradayImg,
    title: "Intraday Trading Strategies for Index & Stocks",
    shortTitle: "Intraday Strategies",
    tagline: "India's 1st complete intraday crash course at a limited price — decode, execute, profit.",
    price: 2064,
    mrp: 10064,
    duration: "4 Weeks",
    mode: "Live Online + Recordings",
    level: "Beginner",
    language: "English / Hindi",
    certification: "Intraday Strategy Certificate",
    hero: "Learn smart. Trade confidently. Earn consistently. Grow exponentially.",
    overview:
      "A powerful crash course to master high-accuracy intraday setups for Index & Stocks. Focused on real market execution, professional intraday strategies, entry-to-exit frameworks, smart trader psychology and disciplined risk management.",
    highlights: [
      "High accuracy intraday setups",
      "Index & stock trading strategies",
      "Live market execution concepts",
      "Practical chart assignments",
      "Trade execution assistance",
    ],
    whoFor: ["Beginner traders", "Intraday traders", "Stock & index traders", "Anyone wanting fast practical trading skills"],
    outcomes: [
      "Select high-momentum stocks daily",
      "Execute breakout, reversal & momentum setups",
      "Manage entries, exits and stop-losses with precision",
      "Build consistency through disciplined psychology",
    ],
    syllabus: [
      { module: "Market Foundation & Mindset", topics: ["Real market structure", "How big players move markets", "Smart trader psychology", "Retail mistakes", "Intraday rules", "Best trading timings"] },
      { module: "Stock Selection Strategies", topics: ["High momentum stocks", "OHL technique", "Gap up / gap down", "Volume-based selection", "Watchlist building"] },
      { module: "Intraday Trading Setups", topics: ["Breakout trading", "Reversal trading", "Momentum trading", "Scalping", "Index setups", "High probability entries"] },
      { module: "Live Execution & Trade Management", topics: ["Entry & exit planning", "Stop loss placement", "Trade management", "Risk-to-reward", "Live execution"] },
      { module: "Psychology & Consistency", topics: ["Fear & greed control", "Discipline building", "Consistency framework", "Trader mindset"] },
    ],
    faqs: [
      { q: "Is this suitable for complete beginners?", a: "Yes — it is built as a beginner-friendly intraday crash course." },
      { q: "Will I get live examples?", a: "Yes — real-time index and stock chart examples are covered." },
    ],
  },
  {
    slug: "candlestick-pattern-strategy",
    image: candlestickImg,
    title: "Candlestick Pattern Trading Strategy Program",
    shortTitle: "Candlestick Mastery",
    tagline: "Decode every candle — accurate entries, confident trades, consistent profits.",
    price: 2000,
    mrp: 6500,
    duration: "3 Weeks",
    mode: "Live Online + Recordings",
    level: "Beginner",
    language: "English / Hindi",
    certification: "Candlestick Strategy Certificate",
    hero: "Every candle tells a story — learn the secret behind every move.",
    overview:
      "A complete practical program focused on mastering the most profitable Japanese candlestick patterns with real-world live chart examples from Index & Stocks. Build deep chart-reading confidence and identify high-probability trade opportunities with precision.",
    highlights: [
      "Live market candlestick examples",
      "High accuracy intraday setups",
      "Entry, exit & stop-loss mastery",
      "Single, dual & triple candlestick patterns",
      "Real-time chart analysis",
    ],
    whoFor: ["Beginner traders", "Intraday & swing traders", "Technical analysis learners", "Anyone wanting chart-reading mastery"],
    outcomes: [
      "Recognise high-probability candlestick patterns instantly",
      "Place precise entries, exits and stops",
      "Apply patterns to intraday & swing trading",
      "Improve trade accuracy with confirmation techniques",
    ],
    syllabus: [
      { module: "Candlestick Foundations", topics: ["Candlestick psychology", "Market emotions", "Reading real intraday charts"] },
      { module: "Single Candlestick Patterns", topics: ["Spinning top", "Pin bar", "Doji", "Star doji", "Hammer", "Hanging man", "Inverted hammer", "Shooting star"] },
      { module: "Dual Candlestick Patterns", topics: ["Bullish & bearish engulfing", "Bullish & bearish harami", "Tweezer top & bottom"] },
      { module: "Triple Candlestick Patterns", topics: ["Morning star", "Evening star", "Advanced confirmation patterns"] },
      { module: "Trading Strategies", topics: ["Entry identification", "Exit strategies", "Stop loss placement", "Trend confirmation", "Intraday & swing application"] },
      { module: "Live Practical Learning", topics: ["Live index & stock examples", "High probability trade setups", "Accuracy improvement"] },
    ],
    faqs: [
      { q: "Is prior trading knowledge required?", a: "No — we start from candlestick basics with live chart practice." },
    ],
  },
  {
    slug: "options-trader-strategy-program",
    image: optionImg,
    title: "Options Trader Strategy Program",
    shortTitle: "Options Mastery",
    tagline: "Master option buying, Greeks, IV & institutional setups — profit in any market.",
    price: 6999,
    mrp: 18999,
    duration: "8 Weeks",
    mode: "Live Online + Recordings",
    level: "Intermediate",
    language: "English / Hindi",
    certification: "Options Trader Strategy Certificate",
    hero: "Decode. Strategize. Execute. Profit — win in bull or bear markets.",
    overview:
      "A complete practical options trading program to master professional option buying strategies, institutional & FII market movement, single-legged setups, Greeks, Implied Volatility and high-probability trading frameworks. Strong emphasis on psychology, timing and market structure.",
    highlights: [
      "Live intraday option buying strategies",
      "Institutional & FII movement understanding",
      "Greeks & Implied Volatility mastery",
      "Trend identification techniques",
      "High accuracy single-legged setups",
    ],
    whoFor: ["Beginner option traders", "Intraday traders", "Working professionals", "Traders wanting institutional understanding"],
    outcomes: [
      "Build your own option buying strategy",
      "Apply Greeks & IV in real market trades",
      "Identify FII & smart money movements",
      "Trade options with consistency and confidence",
    ],
    syllabus: [
      { module: "Options Market Foundation", topics: ["Options basics", "Call & put", "Option chain reading", "Open interest", "Institutional activity"] },
      { module: "Single Legged Strategies", topics: ["Option buying setups", "Intraday option strategies", "Momentum entries", "Breakout trading", "High probability setups"] },
      { module: "Greeks Mastery", topics: ["Delta", "Gamma", "Theta", "Vega", "Real market application"] },
      { module: "Implied Volatility Analysis", topics: ["IV understanding", "Historical volatility", "Volatility expansion & compression", "IV-based selection"] },
      { module: "Institutional Trading Concepts", topics: ["FII & smart money", "Hourly & daily levels", "Buying & selling zones", "Market direction confirmation"] },
      { module: "Professional Trading Strategies", topics: ["Trend identification", "Working professional strategies", "Swing option trading", "Risk management & capital protection"] },
    ],
    faqs: [
      { q: "Do I need to know options already?", a: "No — we begin with option basics and progress to institutional concepts." },
      { q: "Is this option buying or selling focused?", a: "Primarily single-legged option buying with strong institutional context." },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
