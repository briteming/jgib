"use client";

import PostForm from "@/app/blogs/components/PostForm";
import penIcon from "@/assets/img/pen.svg";
import { useModalStore } from "@/store/ModalStore";
import { BlogType } from "@/types/blogType";
import { BlogActionEnum } from "@/utils/enum";
import Image from "next/image";
import { ComponentProps } from "react";
import Button from "./Button";

type propsType = {
  blogItem: BlogType;
};
export default function EditorButton({
  blogItem,
  ...restProps
}: propsType & ComponentProps<typeof Button>) {
  const { openModal } = useModalStore();
  const editBlogHandler = async () => {
    openModal(<PostForm blogItem={blogItem} action={BlogActionEnum.UPDATE} />);
  };

  return (
    <Button onClick={editBlogHandler} {...restProps}>
      <Image src={penIcon} alt="edit" width={20} height={20} />
      <span className="ml-1">Edit</span>
    </Button>
  );
}
