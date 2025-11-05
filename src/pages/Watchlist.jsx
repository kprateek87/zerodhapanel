import { useState } from "react";
import { watchlistData, watchlistdemoItems } from "../assets/data";
import SearchBar from "../components/SearchBar";
import { IndianRupee } from "lucide-react";
import TabBar from "../components/TabBar";

function Watchlist() {
  const [activeTab, setActiveTab] = useState("Stocks");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStocks = watchlistData.filter(
    (stock) =>
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <TabBar onTabChange={setActiveTab} />
      <SearchBar onSearch={setSearchTerm} />
      <div className="mt-4 w-full">
        {activeTab === "Stocks" && (
          <div className="max-h-[400px] overflow-y-auto bg-white py-5 rounded shadow">
            {filteredStocks.length > 0 ? (
              filteredStocks.map((stock) => (
                <div
                  key={stock.ticker}
                  className="flex justify-between p-3 border-b border-gray-200 hover:bg-gray-50 transition-all items-center"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{stock.ticker}</span>
                    <span className="text-xs text-gray-500">
                      {stock.name}{" "}
                      <span className="bg-gray-200 text-[10px] px-1 rounded">
                        {stock.exchange}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" /> {stock.price}
                    </span>
                    <span className="text-xs text-gray-400">{"(00.00)"}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No stocks found.</p>
            )}
          </div>
        )}

        {["Indices", "F&O", "Mutual Funds"].includes(activeTab) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {watchlistdemoItems[activeTab].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-blue-500 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-center text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
