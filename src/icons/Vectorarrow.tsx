import React from "react";

export default function Vectorarrow({
  className,
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.7029 4.2103H0.380325V6.59542H14.7029V10.1731L19.4612 5.40286L14.7029 0.632629V4.2103Z" />
    </svg>
  );
}
