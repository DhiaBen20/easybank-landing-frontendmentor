import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function PrimaryButton({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full bg-gradient-to-r from-primary-green to-primary-cyan px-7 py-3 text-start text-sm font-semibold text-white transition-opacity duration-100 hover:opacity-70",
        className,
      )}
    />
  );
}
