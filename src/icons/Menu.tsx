import React from "react";

export default function Menu({
  className,
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 14"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      ></path>
    </svg>
  );
}
