import React from "react";
import Modal from "./components/Modal";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="py-10">
      <Modal />
      {children}
    </div>
  );
}
