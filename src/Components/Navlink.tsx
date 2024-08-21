import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function NavLink({
  className,
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href="#"
      {...props}
      className={clsx(
        "relative flex items-center from-primary-green to-primary-cyan text-sm font-bold text-zinc-400 outline-none transition-all duration-100 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:opacity-0 after:transition-all after:duration-100 hover:text-primary-blue hover:after:opacity-100 focus:text-primary-blue focus:after:opacity-100 group-data-[highlighted]:text-primary-blue group-data-[highlighted]:after:opacity-100",
        className,
      )}
    />
  );
}
