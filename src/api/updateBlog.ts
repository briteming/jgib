"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { BlogStatusType, UpdateBlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";

async function updateBlog(
  id: string,
  body: UpdateBlogType | BlogStatusType
): Promise<boolean> {
  const token = await getCookie("accessToken");
  if (!token) return false;

  const res = await fetch(`${gitHubIssuesUrl}/${id}`, {
    method: "PATCH",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(body),
  });

  return res.ok;
}

export default updateBlog;
