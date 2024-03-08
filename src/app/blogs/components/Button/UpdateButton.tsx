"use client";

import updateBlog from "@/api/updateBlog";
import action from "@/app/actions";
import Button from "@/components/Button";
import { useBlogStore } from "@/store/ModalStore";
import { UpdateBlogType } from "@/types/blogType";
import { ButtonHTMLAttributes } from "react";
interface propsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  modalContent: UpdateBlogType;
}

function UpdateButton({ id, modalContent, ...restProps }: propsType) {
  const { closeModal } = useBlogStore();
  const editBlogHandler = async () => {
    const isSuccess = await updateBlog(id, modalContent);
    if (isSuccess) {
      closeModal();
      action();
    }
  };
  return (
    <Button onClick={editBlogHandler} {...restProps}>
      UpdateButton
    </Button>
  );
}
export default UpdateButton;
