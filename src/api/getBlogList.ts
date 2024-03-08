import { gitHubIssuesUrl } from "@/constants/urls";
import type { BlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/api";
async function getBlogList(): Promise<BlogType[]> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res: any = await fetch(gitHubIssuesUrl, {
    method: "GET",
    headers: getGitHubApiHeader(token),
    next: { tags: ["blogList"] },
  });
  const data = await res.json();
  const formattedData = data.map(getFormattedData);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return formattedData;
}

export default getBlogList;

/* -------------------------------------------------------------------------- */
/*                               utils function                               */
/* -------------------------------------------------------------------------- */

function getFormattedData(data: any): BlogType {
  const { number, title, body, created_at, updated_at } = data;
  return {
    id: number.toString(),
    title,
    body,
    createdAt: created_at,
    updatedAt: updated_at,
  };
}
