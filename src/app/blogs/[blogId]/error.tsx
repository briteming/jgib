"use client";
import AuthorizeError from "@/app/error";
import Button from "@/components/button/Button";
import { GithubApiStatusEnum } from "@/utils/enum";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  const status = error.message;
  return status === GithubApiStatusEnum.UNAUTHORIZED ? (
    <AuthorizeError error={error} reset={reset} />
  ) : (
    <div className="flex flex-col justify-center items-center gap-10 text-center py-56">
      <h1>Can&apos;t found the blog post</h1>
      <p>Ops! You might have entered the wrong blog id.</p>
      <Link href="/blogs" className="block">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
}
