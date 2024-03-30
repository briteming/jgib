// reference: https://stackoverflow.com/questions/76901594/nextjs13-revalidatetag-loading-modal-while-waiting-for-revalidation
"use client";

import { useLoadingMaskStore } from "@/store/LoadingMaskStore";
import { useEffect, useRef, useState, useTransition } from "react";

export const useServerAction = <P, R>(
  action: (_: P) => Promise<R>
): [(_: P) => Promise<R | undefined>, boolean] => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<R>();
  const { showLoadingMask, hideLoadingMask } = useLoadingMaskStore();
  const resolver = useRef<(value?: R | PromiseLike<R>) => void>();

  useEffect(() => {
    if (!result) return;
    resolver.current?.(result);
  }, [result]);

  useEffect(() => {
    if (isPending) {
      showLoadingMask();
    }
    if (!isPending) {
      hideLoadingMask();
    }
  }, [isPending, hideLoadingMask, showLoadingMask]);

  const runAction = async (args: P): Promise<R | undefined> => {
    startTransition(async () => {
      const data = await action(args);
      setResult(data);
    });

    return new Promise((resolve) => {
      resolver.current = resolve;
    });
  };

  return [runAction, isPending];
};
