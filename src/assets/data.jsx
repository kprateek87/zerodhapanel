import {
  AlertTriangle,
  BarChart2,
  Bell,
  Box,
  CheckCircle,
  CircleQuestionMark,
  FileText,
  Gift,
  IndianRupee,
  LifeBuoy,
  LockOpen,
  LogOut,
  Package,
  Phone,
  PieChart,
  Settings,
  TrendingUp,
  User,
  UserPlus,
  Book,
  Bookmark,
  Briefcase,
  Gavel,
  User2,
} from "lucide-react";
export const bottomTabs = [
  {
    to: "/watchlist",
    label: "Watchlist",
    icon: <Bookmark className="size-6" />,
  },
  { to: "/orders", label: "Orders", icon: <Book className="size-6" /> },
  {
    to: "/portfolio",
    label: "Portfolio",
    icon: <Briefcase className="size-6" />,
  },
  { to: "/bids", label: "Bids", icon: <Gavel className="size-6" /> },
  { to: "/profile", label: "Profile", icon: <User2 className="size-6" /> },
];

export const tabsConfig = {
  watchlist: ["Stocks", "Indices", "F&O", "Mutual Funds"],
  orders: ["Open", "Executed", "GTT", "Basket", "SIPs", "Alerts"],
  portfolio: ["Holdings", "Positions"],
  bids: ["IPOs", "Govt. Securities", "Auctions"],
};

export const profileMenu = [
  {
    heading: "Account",
    items: [
      { name: "Funds", icon: <IndianRupee /> },
      { name: "App Code", icon: <LockOpen /> },
      { name: "Profile", icon: <User /> },
      { name: "Settings", icon: <Settings /> },
      { name: "Connected Apps", icon: <Box /> },
      { name: "Logout", icon: <LogOut /> },
    ],
  },
  {
    heading: "Console",
    items: [
      "Portfolio",
      "Tradebook",
      "P&L",
      "Tax P&L",
      "GIft Stocks",
      "Family",
      "Downloads",
    ],
  },
  {
    heading: "Support",
    items: [
      { name: "Support Portal", icon: <LifeBuoy /> },
      { name: "User Manual", icon: <CircleQuestionMark /> },
      { name: "Contact", icon: <Phone /> },
    ],
  },
  {
    heading: "Others",
    items: [
      { name: "Invite friends", icon: <UserPlus /> },
      { name: "Licenses", icon: <FileText /> },
    ],
  },
];
export const watchlistdemoItems = {
  Indices: [
    { name: "NIFTY 50", icon: <TrendingUp />, desc: "Top Indian Index" },
    { name: "BANKNIFTY", icon: <TrendingUp />, desc: "Bank sector index" },
    { name: "SENSEX", icon: <TrendingUp />, desc: "BSE Index" },
  ],
  "F&O": [
    { name: "NIFTY Options", icon: <BarChart2 />, desc: "Options data" },
    { name: "BANKNIFTY Futures", icon: <BarChart2 />, desc: "Futures data" },
  ],
  "Mutual Funds": [
    { name: "HDFC Top 100", icon: <PieChart />, desc: "Equity Fund" },
    { name: "ICICI Prudential", icon: <PieChart />, desc: "Debt Fund" },
    { name: "SBI Small Cap", icon: <PieChart />, desc: "Small Cap Fund" },
  ],
};
export const ordersdemoItems = {
  Open: [
    { name: "Open Orders", icon: <Package />, desc: "Your active orders" },
    { name: "Pending Orders", icon: <Bell />, desc: "Awaiting execution" },
  ],
  Executed: [
    {
      name: "Executed Orders",
      icon: <CheckCircle />,
      desc: "Completed trades",
    },
  ],
  GTT: [
    {
      name: "GTT Orders",
      icon: <AlertTriangle />,
      desc: "Good till trigger orders",
    },
  ],
  Basket: [
    {
      name: "Basket Orders",
      icon: <Gift />,
      desc: "Predefined stock baskets",
    },
  ],
  SIPs: [
    {
      name: "SIP Investments",
      icon: <FileText />,
      desc: "Scheduled investments",
    },
  ],
  Alerts: [
    {
      name: "Price Alerts",
      icon: <AlertTriangle />,
      desc: "Track price triggers",
    },
  ],
};

export const portfoliodemoItems = {
  Holdings: [
    {
      name: "Equity Holdings",
      icon: <PieChart />,
      desc: "Your stocks in portfolio",
    },
    {
      name: "Debt Holdings",
      icon: <PieChart />,
      desc: "Bonds & debt instruments",
    },
  ],
  Positions: [
    { name: "Open Positions", icon: <BarChart2 />, desc: "Active positions" },
    { name: "Closed Positions", icon: <BarChart2 />, desc: "Exited trades" },
  ],
};
export const bidsdemoItems = {
  IPOs: [
    {
      name: "Upcoming IPOs",
      icon: <TrendingUp />,
      desc: "Track new listings",
    },
    {
      name: "Open IPOs",
      icon: <TrendingUp />,
      desc: "Currently open for subscription",
    },
  ],
  "Govt. Securities": [
    { name: "G-Secs", icon: <BarChart2 />, desc: "Government Bonds" },
  ],
  Auctions: [
    { name: "Bond Auctions", icon: <PieChart />, desc: "Bid for bonds" },
  ],
};

const watchlistTickers = [
  "TCS.NS",
  "RELIANCE.NS",
  "INFY.NS",
  "HDFCBANK.NS",
  "SBIN.NS",
  "ICICIBANK.NS",
];
export const watchlistData = await Promise.all(
  watchlistTickers.map(async (ticker) => {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/stockprice?ticker=${ticker}`,
      {
        headers: {
          "X-Api-Key": "S70AYfjFrCBR9ScHL4lAJg==GjNiynxHB4V5lOh9",
        },
      }
    );
    const data = await res.json();
    return {
      ticker,
      name: data.name,
      price: data.price,
      exchange: data.exchange,
    };
  })
);
