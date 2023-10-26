import type React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}
export default function Heading({
  children,
  className,
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={twMerge(
        "font-black text-primary-light dark:text-primary-dark text-6xl md:text-5xl mb-8 md:mb-1",
        className
      )}
    >
      {children}
    </h3>
  );
}
