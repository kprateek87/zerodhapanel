import { useState } from "react";
import TabBar from "../components/TabBar";
import { ordersdemoItems } from "../assets/data";

function Orders() {
  const [activeTab, setActiveTab] = useState("Open");
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <TabBar onTabChange={setActiveTab} />

      <div className="mt-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {ordersdemoItems[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-green-500 mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-center text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
