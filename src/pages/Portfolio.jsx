import { useState } from "react";
import TabBar from "../components/TabBar";
import { portfoliodemoItems } from "../assets/data";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Holdings");

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <TabBar onTabChange={setActiveTab} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
        {portfoliodemoItems[activeTab].map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="text-purple-500 mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-400 text-center text-sm mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
