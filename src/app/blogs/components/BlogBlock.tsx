"use client";

import updateBlog from "@/api/updateBlog";
import { blogAction } from "@/app/actions";
import trashIcon from "@/assets/img/trash.svg";
import Button from "@/components/button/Button";
import EditorButton from "@/components/button/EditorButton";
import { BlogType } from "@/types/blogType";
import { getFormattedDate } from "@/utils/dateHelper";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import { Ref, forwardRef } from "react";
import style from "./../blog.module.scss";

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
      blogAction();
    }
  };
  return (
    <div className={`${style.blog} border-b-2 px-3 py-5 relative`} ref={ref}>
      <h2 className="mb-2 pr-44">
        <Link href={`blogs/${id}`}>{title}</Link>
      </h2>
      <div className="flex flex-col gap-5">
        <div
          className="line-clamp-6"
          dangerouslySetInnerHTML={{ __html: marked(body ?? "") }}
        ></div>
        <div className="text-end">
          {isAuthor && (
            <div className="absolute top-10 right-0 w-52 flex gap-3">
              <EditorButton blogItem={blogItem} className="flex-1" />
              <Button
                onClick={deleteBlogHandler}
                variant="outlined"
                className="flex-1"
              >
                <Image src={trashIcon} alt="delete" width={20} height={20} />
                <span className="ml-1">delete</span>
              </Button>
            </div>
          )}
          <p>{getFormattedDate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
});

BlogBlock.displayName = "BlogBlock";

export default BlogBlock;
