"use server";
import { gitHubUserUrl } from "@/constants/urls";
import { IGithubUser } from "@/types/githubType";
import { UserType } from "@/types/userType";
import { getFormattedUser, getGitHubApiHeader } from "@/utils/apiHelper";
import { cookies } from "next/headers";

async function getUser(): Promise<UserType> {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) return {} as UserType;
  const res = await fetch(gitHubUserUrl, {
    method: "GET",
    headers: getGitHubApiHeader(token),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as IGithubUser;
  return getFormattedUser(data);
}

export default getUser;
