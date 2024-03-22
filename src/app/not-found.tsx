import Button from "@/components/button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid text-center place-content-center h-full">
      <h1 className="font-bold">Not found the page</h1>
      <p className="my-5">Could not find requested resource !</p>
      <Button className="mx-auto">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
