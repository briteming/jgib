"use server";
import { showPerPage } from "@/constants/commons";
import { gitHubIssuesUrl } from "@/constants/urls";
import type { BlogType } from "@/types/blogType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
async function getBlogList(page = 1): Promise<BlogType[]> {
  console.log(page);
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res: any = await fetch(
    `${gitHubIssuesUrl}?state=open&per_page=${showPerPage}&page=${page}`,
    {
      method: "GET",
      headers: getGitHubApiHeader(token),
      next: { tags: ["blogList"] },
    }
  );
  const data = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const formattedData = data.map(getFormattedData);
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
