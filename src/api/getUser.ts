"use server";
import { gitHubUserUrl } from "@/constants/urls";
import { IGithubUser } from "@/types/githubType";
import { UserType } from "@/types/userType";
import { getFormattedUser, getGitHubApiHeader } from "@/utils/apiHelper";
import { getCookie } from "@/utils/cookiesHelper";

async function getUser(): Promise<UserType> {
  const token = await getCookie("accessToken");
  if (!token) return {} as UserType;
  const res = await fetch(gitHubUserUrl, {
    method: "GET",
    headers: getGitHubApiHeader(token),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(res.status.toString());
  }

  const data = (await res.json()) as IGithubUser;
  return getFormattedUser(data);
}

export default getUser;
