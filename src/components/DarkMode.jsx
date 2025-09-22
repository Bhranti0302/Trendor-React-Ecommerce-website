import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply class to body
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded border"
    >
      {darkMode ? (
        <i className="ri-sun-foggy-fill text-yellow-500 hover:text-yellow-400"></i>
      ) : (
        <i className="ri-moon-clear-fill text-blue-600 hover:text-gray-500"></i>
      )}
    </button>
  );
}
