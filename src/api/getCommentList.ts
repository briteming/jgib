import { gitHubIssuesUrl } from "@/constants/urls";
import type { CommentType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { getFormattedDate } from "@/utils/dateHelper";
async function getCommentList(id: string): Promise<CommentType[]> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res: any = await fetch(`${gitHubIssuesUrl}/${id}/comments`, {
    method: "GET",
    headers: getGitHubApiHeader(token),
    next: { tags: ["commentList"] },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  data.sort((a: CommentType, b: CommentType) => {
    return a.createdAt > b.createdAt ? 1 : -1;
  });
  const formattedData = data.map(getFormattedData);
  return formattedData;
}

export default getCommentList;

/* -------------------------------------------------------------------------- */
/*                               utils function                               */
/* -------------------------------------------------------------------------- */

function getFormattedData(data: any): CommentType {
  const { id, body, created_at, updated_at, user } = data;
  return {
    id: id.toString(),
    body,
    createdAt: getFormattedDate(created_at),
    updatedAt: getFormattedDate(updated_at),
    user: {
      name: user.login,
      avatarUrl: user.avatar_url,
    },
  };
}
