import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export default function Button({
  children,
  ...restProps
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="border rounded-md p-2 hover:bg-blue-100"
      {...restProps}
    >
      {children}
    </button>
  );
}
