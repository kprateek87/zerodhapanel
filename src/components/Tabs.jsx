import { NavLink } from "react-router-dom";
import { bottomTabs } from "../assets/data";

export default function Tabs() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
      <div className="flex justify-center py-2 gap-6">
        {bottomTabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `
              group relative flex flex-col items-center text-sm font-medium px-3 py-1 transition-all duration-200
              ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
              }
              `
            }
          >
            <div
              className={`
                transition-transform duration-300 group-hover:-translate-y-1
              `}
            >
              {tab.icon}
            </div>
            <span className="text-xs mt-1">{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
