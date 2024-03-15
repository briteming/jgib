"use client";

import PostForm from "@/app/blogs/components/PostForm";
import { useModalStore } from "@/store/ModalStore";
import { BlogType } from "@/types/blogType";
import { BlogActionEnum } from "@/utils/enum";
import Button from "./Button";

type propsType = {
  blogItem: BlogType;
};
export default function EditorButton({ blogItem }: propsType) {
  const { openModal } = useModalStore();
  const editBlogHandler = async () => {
    openModal(<PostForm blogItem={blogItem} action={BlogActionEnum.UPDATE} />);
  };

  return <Button onClick={editBlogHandler}>Edit</Button>;
}
