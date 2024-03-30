"use server";

import { gitHubIssuesUrl } from "@/constants/urls";
import { BlogStatusType, UpdateBlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";
import { revalidateTag } from "next/cache";

type UpdateBlogProps = {
  id: string;
  blogItem: UpdateBlogType | BlogStatusType;
};

async function updateBlog(Item: UpdateBlogProps): Promise<boolean> {
  const token = await getCookie("accessToken");
  if (!token) return false;
  const { id, blogItem } = Item;

  const res = await fetch(`${gitHubIssuesUrl}/${id}`, {
    method: "PATCH",
    headers: getGitHubApiHeader(token),
    body: JSON.stringify(blogItem),
  });

  if (res.ok) {
    revalidateTag("blogList");
    revalidateTag("blogItem");
  }

  return res.ok;
}

export default updateBlog;
