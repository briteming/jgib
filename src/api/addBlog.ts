"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { AddBlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";

async function addBlog(body: AddBlogType): Promise<boolean> {
  const token = await getCookie("accessToken");
  if (!token) return false;

  const res = await fetch(`${gitHubIssuesUrl}`, {
    method: "POST",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(body),
  });

  return res.ok;
}

export default addBlog;
