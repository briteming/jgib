import { gitHubIssuesUrl } from "@/constants/urls";
import type { BlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/api";
async function getBlog(id: string): Promise<BlogType> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res: any = await fetch(`${gitHubIssuesUrl}/${id}`, {
    method: "GET",
    headers: getGitHubApiHeader(token),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const formattedData = getFormattedData(data);
  return formattedData;
}

export default getBlog;

/* -------------------------------------------------------------------------- */
/*                               utils function                               */
/* -------------------------------------------------------------------------- */

function getFormattedData(data: any): BlogType {
  const { id, title, body, created_at, updated_at } = data;
  return {
    id: id.toString(),
    title,
    body,
    createdAt: created_at,
    updatedAt: updated_at,
  };
}
