interface Link {
  label: string;
  link: string;
}

import type React from "react";
interface NavbarProps {
  children?: React.ReactNode;
}

import ThemeSwitchButton from "./ThemeSwitchButton";
// import LinkText from "../components/LinkText.astro"

export default function Navbar({ children }: NavbarProps) {
  return (
    <nav className="hidden md:flex max-w-[950px] m-auto py-10 px-5 items-center justify-between">
      {children} 
      <div className="w-6 h-6 bg-black rounded-sm" />
    </nav>
  );
}