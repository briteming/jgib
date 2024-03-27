"use client";
import { useAlertStore } from "@/store/AlertStore";
import { AlertStatusEnum } from "@/utils/enum";
import { Ref, forwardRef, useEffect } from "react";
import Transition from "./Transition";

export default function Alert() {
  const { isShow } = useAlertStore();

  useEffect(() => {
    let time: ReturnType<typeof setTimeout>;
    if (isShow) {
      time = setTimeout(() => {
        useAlertStore.getState().hideAlert();
      }, 1500);
    }
    return () => {
      clearTimeout(time);
    };
  }, [isShow]);

  return (
    <Transition isShow={isShow}>
      <AlertChild />
    </Transition>
  );
}

const AlertChild = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  const { status, message } = useAlertStore();
  const isSuccess = status === AlertStatusEnum.SUCCESS;
  return (
    <div
      ref={ref}
      className={`fixed bottom-8 right-10 px-3 py-2 border rounded-sm ${isSuccess ? "bg-successBg border-successBorder" : "bg-failBg border-failBorder"}`}
    >
      {message}
    </div>
  );
});

AlertChild.displayName = "AlertChild";
