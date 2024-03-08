"use server";

import { gitHubTokenUrl } from "@/constants/urls";
import { cookies } from "next/headers";

async function getAccessToken(code: string): Promise<void> {
  const res = await fetch(`${gitHubTokenUrl}${code}`, {
    method: "POST",
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  console.log(data);
  if (data.access_token) {
    cookies().set("accessToken", data.access_token);
  } else {
    throw new Error("Get access token failed:" + JSON.stringify(data));
  }
}

export default getAccessToken;
