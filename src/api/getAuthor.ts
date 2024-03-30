import { gitHubAuthorUrl } from "@/constants/urls";
import { IGithubUser } from "@/types/githubType";
import { UserType } from "@/types/userType";
import { getFormattedUser, getGitHubApiHeader } from "@/utils/apiHelper";
async function getAuthor(): Promise<UserType> {
  const token = process.env.ACCESS_TOKEN;
  if (!token) throw new Error("ACCESS_TOKEN is not found");
  const res = await fetch(gitHubAuthorUrl, {
    method: "GET",
    headers: getGitHubApiHeader(token),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as IGithubUser;
  const formattedData = getFormattedUser(data);
  return formattedData;
}

export default getAuthor;
