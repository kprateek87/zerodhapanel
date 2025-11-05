import { useState } from "react";
import { Bell } from "lucide-react";
import ProfileMenu from "../components/ProfileMenu";

function Profile() {
  const [user, setUser] = useState({
    name: "Prateek .",
    id: "RGB583",
    email: "kprateek787@gmail.com",
  });

  const [privacyMode, setPrivacyMode] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <Bell className="text-gray-600 w-5 h-5" />
      </div>
      <div className="m-4 p-5 rounded-xl bg-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-medium text-lg text-gray-800">
              {privacyMode ? "***" : user.id}
            </span>
            <span className="text-xs text-gray-400">
              {privacyMode ? "***@***.com" : user.email}
            </span>
          </div>

          <div className="w-16 h-16 rounded-full bg-cyan-100 flex justify-center items-center">
            <span className="text-2xl font-semibold text-cyan-500">
              {user.name?.[0] || "P"}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-3 bg-white rounded-xl px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="text-sm font-medium text-gray-700">Privacy Mode</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={privacyMode}
            onChange={() => setPrivacyMode(!privacyMode)}
          />
          <div className="relative w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors">
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
          </div>
        </label>
      </div>
      <ProfileMenu />
    </div>
  );
}

export default Profile;
