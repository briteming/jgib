import Modal from "@/components/Modal";
import React from "react";
import style from "./blog.module.scss";

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={`${style.blog} py-10`}>
      <Modal />
      {children}
    </div>
  );
}
