// import { useState } from "react";

export default function ToggleDarkMode() {
  return (
    <div className="absolute z-50 flex items-center top-4 right-4 ">
      <label className="relative cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#E69E25]"></div>
      </label>
    </div>
  );
}
