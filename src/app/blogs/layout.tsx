import Alert from "@/components/Alert";
import LoadingMask from "@/components/LoadingMask";
import Modal from "@/components/Modal";
import React from "react";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="py-10">
      <Modal />
      <Alert />
      <LoadingMask />
      {children}
    </div>
  );
}
