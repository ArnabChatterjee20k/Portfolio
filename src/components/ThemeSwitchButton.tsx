import { useState } from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

export default function ThemeSwitchButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  function changeTheme() {
    const themeState = document.documentElement.classList;
    if (themeState.contains("dark")) {
      themeState.add("light");
      setTheme("light");
      themeState.remove("dark");
      return;
    }
    themeState.remove("light");
    setTheme("dark")
    themeState.add("dark");
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
