"use client";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 py-64 justify-center items-center text-center">
      <h1 className="font-sans">Welcome to my blog</h1>
      <Link href="/blogs">
        <Button>All My Posts</Button>
      </Link>
    </div>
  );
}
