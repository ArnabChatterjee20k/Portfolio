import React, { useState, useEffect } from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

export default function ThemeSwitchButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Load the initial theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  function changeTheme() {
    const isDarkMode = theme === "dark";

    const newTheme = isDarkMode ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);

    // Update the theme in localStorage
    localStorage.setItem('theme', newTheme);
  }

  return (
    <button
      onClick={changeTheme}
      className="hover:bg-gray-300 bg-slate-200 dark:bg-secondary-dark rounded-lg flex items-center justify-center p-2 shadow-2xl"
    >
      {theme === "dark" && (
        <Sun className="w-14 h-14 md:w-5 md:h-5 fill-black dark:fill-yellow-500" />
      )}
      {theme === "light" && (
        <Moon className="w-14 h-14 md:w-5 md:h-5 fill-black dark:fill-gray-200" />
      )}
    </button>
  );
}