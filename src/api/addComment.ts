"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";

async function addComment(
  id: string,
  comment: { body: string }
): Promise<boolean> {
  const token = await getCookie("accessToken");
  if (!token) return false;

  const res = await fetch(`${gitHubIssuesUrl}/${id}/comments`, {
    method: "POST",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(comment),
  });

  return res.ok;
}

export default addComment;
