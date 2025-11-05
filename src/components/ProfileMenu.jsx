import React from "react";
import { profileMenu } from "../assets/data";

function ProfileMenu() {
  return (
    <div className="overflow-y-auto h-[calc(100%-64px)] p-4 space-y-6">
      {profileMenu.map((section) => (
        <div key={section.heading}>
          <h3 className="text-gray-500 text-xs font-semibold mb-2 uppercase">
            {section.heading}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item, idx) => {
              const isStringItem = typeof item === "string";
              const key = isStringItem ? item : item.name;

              return (
                <li
                  key={key}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                    }
                  }}
                  className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {isStringItem ? (
                    <span className="text-blue-600">{item}</span>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-gray-700">
                        {React.cloneElement(item.icon, {
                          className: "w-5 h-5 text-gray-500",
                        })}
                        <span>{item.name}</span>
                      </div>
                      {item.name === "Funds" && (
                        <span className="text-gray-400 font-semibold">₹</span>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProfileMenu;
