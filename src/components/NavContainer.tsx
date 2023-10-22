interface Link {
  label: string;
  link: string;
}

interface NavbarProps {
  children?: React.ReactNode;
}

import type React from "react";
import ThemeSwitchButton from "./ThemeSwitchButton";
// import LinkText from "../components/LinkText.astro"

export default function Navbar({ children }: NavbarProps) {
  return (
    <nav className="flex max-w-[950px] m-auto py-10 items-center justify-between">
      {children} 
      <div className="w-6 h-6 bg-black rounded-sm" />
    </nav>
  );
}