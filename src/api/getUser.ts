"use server";
import { gitHubUserUrl } from "@/constants/urls";
import { UserType } from "@/types/userType";
import { getGitHubApiHeader } from "@/utils/apiHelper";
import { cookies } from "next/headers";

async function getUser(): Promise<UserType> {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  if (!token) return {} as UserType;
  const res: any = await fetch(gitHubUserUrl, {
    method: "GET",
    headers: getGitHubApiHeader(token),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return getFormattedData(data);
}

export default getUser;

/* -------------------------------------------------------------------------- */
/*                               utils function                               */
/* -------------------------------------------------------------------------- */

function getFormattedData(data: any): UserType {
  const { login, avatar_url } = data;
  return {
    name: login,
    avatarUrl: avatar_url,
  };
}
