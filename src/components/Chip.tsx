import { twMerge } from "tailwind-merge";
export default function Chip({
  className,
  children,
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div className="px-2 py-1 text-2xl md:text-xs md:mt-2 font-bold rounded-lg bg-gray-200">
      {children}
    </div>
  );
}
