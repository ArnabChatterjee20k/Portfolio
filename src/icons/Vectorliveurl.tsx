import React from "react";

export default function Vectorliveurl({
  className,
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2532 13.1115H2.17725V2.30691H7.71522V0.763397H2.17725C1.29908 0.763397 0.594971 1.45798 0.594971 2.30691V13.1115C0.594971 13.9604 1.29908 14.655 2.17725 14.655H13.2532C14.1235 14.655 14.8355 13.9604 14.8355 13.1115V7.7092H13.2532V13.1115ZM9.2975 0.763397V2.30691H12.1377L4.36079 9.89327L5.4763 10.9815L13.2532 3.39509V6.16569H14.8355V0.763397H9.2975Z"
      />
    </svg>
  );
}
