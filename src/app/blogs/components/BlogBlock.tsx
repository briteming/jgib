"use client";

import updateBlog from "@/api/updateBlog";
import { blogListAction } from "@/app/actions";
import Button from "@/components/Button";
import { useModalStore } from "@/store/ModalStore";
import { BlogType } from "@/types/blogType";
import { getFormattedDate } from "@/utils/dateHelper";
import { BlogActionEnum } from "@/utils/enum";
import { marked } from "marked";
import Link from "next/link";
import PostForm from "./PostForm";
type propsType = {
  blogItem: BlogType;
  isAuthor: boolean;
};
export default function BlogBlock({ blogItem, isAuthor }: propsType) {
  const { title, body, id, createdAt } = blogItem;
  const { openModal } = useModalStore();
  const editBlogHandler = async () => {
    openModal(<PostForm blogItem={blogItem} action={BlogActionEnum.UPDATE} />);
  };
  const deleteBlogHandler = async () => {
    const isSuccess = await updateBlog(id, { state: "closed" });
    if (isSuccess) {
      blogListAction();
    }
  };
  return (
    <div className="border-b-2 px-3 py-5">
      <h2 className="mb-2">
        <Link href={`blogs/${id}`}>{title}</Link>
      </h2>
      <div className="flex justify-between ">
        <div
          className="line-clamp-6"
          dangerouslySetInnerHTML={{ __html: marked(body) }}
        ></div>
        {isAuthor && (
          <div>
            <Button onClick={editBlogHandler}>edit</Button>
            <Button onClick={deleteBlogHandler}>delete</Button>
          </div>
        )}
        <p>{getFormattedDate(createdAt)}</p>
      </div>
    </div>
  );
}
