import React, { useEffect, useState } from "react";

function Topbar() {
  const [prices, setPrices] = useState({
    nifty: null,
    banknifty: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const niftyRes = await fetch(
          "https://api.api-ninjas.com/v1/stockprice?ticker=%5ENSEI",
          {
            headers: {
              "X-Api-Key": "S70AYfjFrCBR9ScHL4lAJg==GjNiynxHB4V5lOh9",
            },
          }
        );
        if (!niftyRes.ok)
          throw new Error(`Nifty API error: ${niftyRes.status}`);
        const niftyData = await niftyRes.json();
        const bankniftyRes = await fetch(
          "https://api.api-ninjas.com/v1/stockprice?ticker=%5ENSEBANK",
          {
            headers: {
              "X-Api-Key": "S70AYfjFrCBR9ScHL4lAJg==GjNiynxHB4V5lOh9",
            },
          }
        );
        if (!bankniftyRes.ok)
          throw new Error(`BankNifty API error: ${bankniftyRes.status}`);
        const bankniftyData = await bankniftyRes.json();

        setPrices({
          nifty: niftyData.price,
          banknifty: bankniftyData.price,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-900 text-white flex justify-center gap-8 py-3 sticky top-0 z-50 shadow-md">
      {error && <p className="text-red-400">Error: {error}</p>}

      <div className="flex gap-2 items-center">
        <span className="font-semibold text-gray-300">NIFTY 50:</span>
        {prices.nifty ? (
          <span className="text-green-400 font-bold">₹{prices.nifty}</span>
        ) : (
          <span className="text-gray-400">Loading...</span>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <span className="font-semibold text-gray-300">BANK NIFTY:</span>
        {prices.banknifty ? (
          <span className="text-green-400 font-bold">₹{prices.banknifty}</span>
        ) : (
          <span className="text-gray-400">Loading...</span>
        )}
      </div>
    </div>
  );
}

export default Topbar;
