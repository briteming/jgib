"use client";
import addComment from "@/api/addComment";
import Spinner from "@/components/Spinner";
import Button from "@/components/button/Button";
import { useServerAction } from "@/hooks/useServerAction";
import { UserType } from "@/types/userType";
import { handleAlert } from "@/utils/alertHelper";
import { AlertStatusEnum } from "@/utils/enum";
import Image from "next/image";
import { FormEventHandler, useEffect, useRef, useState } from "react";

type propsType = {
  user: UserType;
  blogId: string;
};

export default function CommentInput({ user, blogId }: propsType) {
  const [inputValue, setInputValue] = useState("");
  const [addCommentAction, isAddCommentPending] = useServerAction(addComment);
  const apiStatusRef = useRef<undefined | AlertStatusEnum>();

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setInputValue("");
    const isSuccess = await addCommentAction({
      id: blogId,
      comment: { body: inputValue },
    });
    apiStatusRef.current = isSuccess
      ? AlertStatusEnum.SUCCESS
      : AlertStatusEnum.FAIL;
  };

  useEffect(() => {
    handleAlert({
      status: apiStatusRef.current,
      alertText: {
        success: "Add comment success!",
        fail: "Add comment failed!",
      },
    });
  }, [isAddCommentPending]);

  return (
    <div className="border border-commentBorder rounded-lg p-4 bg-commentBg mt-5">
      <form onSubmit={submitHandler}>
        <textarea
          disabled={isAddCommentPending}
          rows={3}
          value={inputValue}
          placeholder="Comment..."
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full min-h-20 max-h-96 p-2 rounded-lg border border-commentBorder bg-textareaBg focus:outline-none focus:border-primary focus:ring-1 focus:ring-commentBorder disabled:cursor-not-allowed"
        />
        <div className="flex justify-end items-center mt-2 gap-5">
          <span className="w-10 h-10 rounded-full overflow-hidden object-cover">
            <Image src={user.avatarUrl} alt="avatar" width="100" height="100" />
          </span>
          <span className="font-bold">{user.name}</span>
          <Button className="w-24 h-10" type="submit" disabled={!inputValue}>
            {isAddCommentPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              "Comment"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
