"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <div>
      <h2>The Blog is fixing...</h2>
    </div>
  );
}
