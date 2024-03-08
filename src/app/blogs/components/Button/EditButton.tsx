"use client";

import Button from "@/components/Button";
import { useBlogStore } from "@/store/ModalStore";
import { UpdateBlogType } from "@/types/blogType";
type propsType = {
  id: string;
  content: UpdateBlogType;
};

function EditButton({ id, content }: propsType) {
  const { openModal } = useBlogStore();
  const editBlogHandler = async () => {
    console.log(id);
    openModal(id, content);
  };
  return <Button onClick={editBlogHandler}>EditButton</Button>;
}
export default EditButton;
