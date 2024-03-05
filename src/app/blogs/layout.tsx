import React from "react";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return <div className="py-10">{children}</div>;
}
