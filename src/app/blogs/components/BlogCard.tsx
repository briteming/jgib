import React from "react";
export default function BlogCard({ children }: React.PropsWithChildren) {
  return <div className="border-b-2 px-3 py-5">{children}</div>;
}
