"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";
import { revalidateTag } from "next/cache";

type AddCommentProps = {
  id: string;
  comment: { body: string };
};

async function addComment(commentItem: AddCommentProps): Promise<boolean> {
  const token = await getCookie("accessToken");
  if (!token) return false;
  const { id, comment } = commentItem;

  const res = await fetch(`${gitHubIssuesUrl}/${id}/comments`, {
    method: "POST",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    revalidateTag("commentList");
  }

  return res.ok;
}

export default addComment;
