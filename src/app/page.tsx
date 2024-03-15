"use client";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full">
      <h1 className="text-4xl">Welcome to my blog</h1>
      <Link href="/blogs">
        <Button>All My Posts</Button>
      </Link>
    </div>
  );
}
