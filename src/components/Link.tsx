import type React from "react";
import { twMerge } from "tailwind-merge";
interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  text: string;
}
export default function Link({ className, text, href, children }: LinkProps) {
  return (
    <a href={href} className={twMerge("text-base text-slate-700", className)}>
      {text}
      {children}
    </a>
  );
}
