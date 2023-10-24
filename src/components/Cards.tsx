import type React from "react";
import { twMerge } from "tailwind-merge";
import SubHeading from "./SubHeading";

export function Cards({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg py-16 px-12 flex flex-col gap-8 shadow md:gap-2 md:w-[18rem] md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export const CardsTitle = ({
  children,
}: React.ComponentPropsWithoutRef<"h4">) => {
  return (
    <h4 className="font-bold text-primary-light text-4xl md:text-base">
      {children}
    </h4>
  );
};

export const CardsDescription = ({
  children,
}: React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p className="text-secondary-light text-3xl leading-snug md:text-sm">
      {children}
    </p>
  );
};
