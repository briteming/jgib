"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { cookies } from "next/headers";

async function addComment(
  id: string,
  comment: { body: string }
): Promise<boolean> {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) return false;

  const res = await fetch(`${gitHubIssuesUrl}/${id}/comments`, {
    method: "POST",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(comment),
  });

  return res.ok;
}

export default addComment;
