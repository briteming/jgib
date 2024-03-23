"use server";
import { showPerPage } from "@/constants/commons";
import { gitHubIssuesUrl } from "@/constants/urls";
import type { BlogType } from "@/types/blogType";
import { IGithubIssue } from "@/types/githubType";
import { getFormattedBlog, getGitHubApiHeader } from "@/utils/apiHelper";
async function getBlogList(page = 1): Promise<BlogType[]> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res = await fetch(
    `${gitHubIssuesUrl}?state=open&per_page=${showPerPage}&page=${page}`,
    {
      method: "GET",
      headers: getGitHubApiHeader(token),
      next: { tags: ["blogList"] },
    }
  );
  const data = (await res.json()) as IGithubIssue[];
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const formattedData = data.map(getFormattedBlog);
  return formattedData;
}

export default getBlogList;
