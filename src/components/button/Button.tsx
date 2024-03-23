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
      className={`flex justify-center items-center border border-primary rounded-md py-2 px-3  disabled:cursor-not-allowed disabled:bg-white disabled:hover:bg-white disabled:hover:scale-100 hover:scale-105  
          ${restProps.className ?? ""} ${variantClass}`}
    >
      {children}
    </button>
  );
}
