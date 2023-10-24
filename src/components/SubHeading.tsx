import type React from "react";
import { twMerge } from "tailwind-merge";

export default function SubHeading({
  children,
  className,
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={twMerge(
        "font-medium text-4xl leading-normal",
        className
      )}
    >
      {children}
    </h3>
  );
}
