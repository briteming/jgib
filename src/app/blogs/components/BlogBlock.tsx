"use client";

import updateBlog from "@/api/updateBlog";
import { blogListAction } from "@/app/actions";
import Button from "@/components/button/Button";
import EditorButton from "@/components/button/EditorButton";
import { BlogType } from "@/types/blogType";
import { getFormattedDate } from "@/utils/dateHelper";
import { marked } from "marked";
import Link from "next/link";
import { Ref, forwardRef } from "react";
type propsType = {
  blogItem: BlogType;
  isAuthor: boolean;
};
const BlogBlock = forwardRef((props: propsType, ref: Ref<HTMLDivElement>) => {
  const { blogItem, isAuthor } = props;
  const { title, body, id, createdAt } = blogItem;
  const deleteBlogHandler = async () => {
    const isSuccess = await updateBlog(id, { state: "closed" });
    if (isSuccess) {
      blogListAction();
    }
  };
  return (
    <div className="border-b-2 px-3 py-5" ref={ref}>
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
            <EditorButton blogItem={blogItem} />
            <Button onClick={deleteBlogHandler}>delete</Button>
          </div>
        )}
        <p>{getFormattedDate(createdAt)}</p>
      </div>
    </div>
  );
});

BlogBlock.displayName = "BlogBlock";

export default BlogBlock;
