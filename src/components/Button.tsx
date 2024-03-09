import { ComponentPropsWithRef, PropsWithChildren } from "react";

export default function Button({
  children,
  ...restProps
}: PropsWithChildren & ComponentPropsWithRef<"button">) {
  return (
    <button
      {...restProps}
      className={
        "border rounded-md p-2 hover:bg-blue-100 " + restProps.className
      }
    >
      {children}
    </button>
  );
}
