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
        "text-xl text-slate-700 flex items-center gap-3 cursor-pointer hover:text-black hover:font-medium",
        className
      )}
    >
      {text}
      <Vectorarrow className={twMerge("h-4 w-5 fill-black", svgClassName)} />
    </a>
  );
}
