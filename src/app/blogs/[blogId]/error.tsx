"use client";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <div className="grid place-content-center text-center h-full">
      <h1>Can&apos;t found the blog post</h1>
      <p>Ops! You might have entered the wrong blog id.</p>
      <Link href="/blogs" className="block">
        Go Back
      </Link>
    </div>
  );
}
