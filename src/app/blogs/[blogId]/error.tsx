"use client";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <div>
      <h2>Can&apos;t found the blog post</h2>
      <Link href="/blogs">
        <button type="button">Go Back</button>
      </Link>
    </div>
  );
}
