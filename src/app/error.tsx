"use client";

import Button from "@/components/button/Button";
import { deleteCookie } from "@/utils/cookiesHelper";
import { GithubApiStatusEnum } from "@/utils/enum";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  useEffect(() => {
    if (error.message === GithubApiStatusEnum.UNAUTHORIZED) {
      deleteCookie("accessToken");
    }
  }, [error]);

  return (
    <div className="py-56 text-center">
      {error.message === GithubApiStatusEnum.UNAUTHORIZED ? (
        <>
          <h1>Authentication Required</h1>
          <p className="my-5">
            It seems you are not authenticated or your session has expired.
          </p>
          <Button className="mx-auto" onClick={() => reset()}>
            Try Again
          </Button>
        </>
      ) : (
        <>
          <h1>The Blog is fixing 🚧</h1>
          <p className="my-10">Please try again or view other pages. Thanks!</p>
          <div className="flex justify-center gap-5">
            <Link href="/" className="block">
              <Button>Go Home</Button>
            </Link>
            <Button onClick={() => reset()}>Try Again</Button>
            <Link href="/about" className="block">
              <Button>About Me</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
