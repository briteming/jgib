import { gitHubIssuesUrl } from "@/constants/urls";
import type { BlogType } from "@/types/blogType";
import { IGithubIssue } from "@/types/githubType";
import { getFormattedBlog, getGitHubApiHeader } from "@/utils/apiHelper";
async function getBlog(id: string): Promise<BlogType> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res = await fetch(`${gitHubIssuesUrl}/${id}`, {
    method: "GET",
    headers: getGitHubApiHeader(token),
    next: { tags: ["blogItem"] },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as IGithubIssue;
  const formattedData = getFormattedBlog(data);
  return formattedData;
}

export default getBlog;
