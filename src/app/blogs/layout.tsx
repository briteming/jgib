import Alert from "@/components/Alert";
import Modal from "@/components/Modal";
import React from "react";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="py-10">
      <Modal />
      <Alert />
      {children}
    </div>
  );
}
