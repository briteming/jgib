"use client";
import { CommentType } from "@/types/blogType";
import { marked } from "marked";
import Image from "next/image";

type propsType = {
  commentList: CommentType[];
};

export default function Comment({ commentList }: propsType) {
  return (
    <div>
      {commentList.map((commentItem) => {
        const { id, body, updatedAt, user } = commentItem;
        return (
          <div
            key={id}
            className="border border-commentBorder rounded-lg p-4 bg-commentBg mt-5"
          >
            <div className="flex justify-start items-center gap-5">
              <span className="w-10 h-10 rounded-full overflow-hidden object-cover">
                <Image
                  src={user.avatarUrl}
                  alt="avatar"
                  width="100"
                  height="100"
                />
              </span>
              <span className="font-bold">{user.name}</span>
              <span>{updatedAt}</span>
            </div>
            <div
              className="p-2"
              dangerouslySetInnerHTML={{ __html: marked(body ?? "") }}
            />
          </div>
        );
      })}
    </div>
  );
}
