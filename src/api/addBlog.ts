"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { AddBlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { cookies } from "next/headers";

async function addBlog(body: AddBlogType): Promise<boolean> {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) return false;

  const res = await fetch(`${gitHubIssuesUrl}`, {
    method: "POST",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(body),
  });

  return res.ok;
}

export default addBlog;
