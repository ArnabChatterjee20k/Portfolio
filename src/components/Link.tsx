import React from "react";
import { twMerge } from "tailwind-merge";
import Vectorarrow from "../icons/Vectorarrow";
interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  text: string;
  svgClassName?: React.HTMLProps<"svg">["className"];
}

export default function Link({
  className,
  text,
  href,
  svgClassName,
}: LinkProps) {
  return (
    <a
      href={href}
      className={twMerge(
        "text-xl text-slate-700 dark:text-gray-200 flex items-center gap-3 cursor-pointer hover:text-black dark:hover:text-white hover:font-medium",
        className
      )}
    >
      {text}
      <Vectorarrow className={twMerge("h-4 w-5 fill-black", svgClassName)} />
    </a>
  );
}
