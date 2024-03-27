"use client";
import { useLoadingMaskStore } from "@/store/LoadingMaskStore";

export default function LoadingMask() {
  const { isShowLoadingMask } = useLoadingMaskStore();
  return (
    isShowLoadingMask && (
      <div className="fixed inset-0 z-20 bg-black bg-opacity-10 grid place-content-center">
        <div className="flex space-x-2 justify-center items-center">
          <div className="h-6 w-6 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-6 w-6 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-6 w-6 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    )
  );
}
