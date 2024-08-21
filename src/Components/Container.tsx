import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

export function Container({
  className,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div className={clsx("mx-auto max-w-6xl px-4", className)} {...props} />
  );
}
