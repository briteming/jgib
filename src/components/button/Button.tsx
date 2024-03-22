"use client";
import { ComponentProps, PropsWithChildren } from "react";

type propsType = {
  variant?: "contained" | "outlined";
};

export default function Button({
  children,
  variant = "contained",
  ...restProps
}: PropsWithChildren<propsType> & ComponentProps<"button">) {
  const variantClass =
    variant === "contained"
      ? "bg-secondary hover:bg-primary "
      : "hover:bg-primaryOpacity";
  return (
    <button
      {...restProps}
      className={`flex justify-center items-center border border-primary rounded-md p-2  disabled:cursor-not-allowed disabled:hover:bg-white 
          ${restProps.className ?? ""} ${variantClass}`}
    >
      {children}
    </button>
  );
}
