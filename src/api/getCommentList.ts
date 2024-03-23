import { gitHubIssuesUrl } from "@/constants/urls";
import type { CommentType } from "@/types/blogType";
import { IGithubComment } from "@/types/githubType";
import { getFormattedComment, getGitHubApiHeader } from "@/utils/apiHelper";
async function getCommentList(id: string): Promise<CommentType[]> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res = await fetch(`${gitHubIssuesUrl}/${id}/comments`, {
    method: "GET",
    headers: getGitHubApiHeader(token),
    next: { tags: ["commentList"] },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as IGithubComment[];
  data.sort((a: IGithubComment, b: IGithubComment) => {
    return a.created_at > b.created_at ? -1 : 1;
  });
  const formattedData = data.map(getFormattedComment);
  return formattedData;
}

export default getCommentList;
