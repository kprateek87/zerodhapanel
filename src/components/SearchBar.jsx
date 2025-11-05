// src/components/SearchBar.jsx
import { useState, useEffect } from "react";

function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/stockticker?name=${query}`,
          {
            headers: {
              "X-Api-Key": "S70AYfjFrCBR9ScHL4lAJg==GjNiynxHB4V5lOh9",
            },
          }
        );
        const data = await res.json();
        setResults(data.slice(0, 10));
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search stocks or indices..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-10 max-h-60 overflow-y-auto">
          {results.map((stock) => (
            <div
              key={stock.symbol}
              onClick={() => {
                onSelect(stock);
                setQuery("");
                setResults([]);
              }}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex justify-between"
            >
              <span className="font-medium text-gray-700">{stock.name}</span>
              <span className="text-sm text-gray-500">{stock.symbol}</span>
            </div>
          ))}
        </div>
      )}
      {loading && (
        <div className="absolute right-3 top-2 text-gray-400 text-sm animate-pulse">
          Loading...
        </div>
      )}
    </div>
  );
}

export default SearchBar;
