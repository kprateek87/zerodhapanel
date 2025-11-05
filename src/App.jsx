import { Navigate, Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";
import { Bids, Orders, Portfolio, Profile, Watchlist } from "./pages";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="pb-16 min-h-screen bg-gray-100">
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/watchlist" />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      <Tabs />
    </div>
  );
}
