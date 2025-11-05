import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { tabsConfig } from "../assets/data";

function TabBar({ onTabChange }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  const currentSection =
    Object.keys(tabsConfig).find((key) => location.pathname.includes(key)) ||
    "watchlist";

  const tabs = tabsConfig[currentSection];

  useEffect(() => {
    setActiveTab(tabs[0]);
    onTabChange?.(tabs[0]);
  }, [currentSection]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="my-4 flex justify-center gap-6 border-b border-gray-200 overflow-x-auto scrollbar-none px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`pb-2 text-sm font-medium transition-all ${
            activeTab === tab
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
