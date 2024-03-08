"use client";

import getAccessToken from "@/api/getAccessToken";
import React, { useEffect } from "react";

export default function OauthCallbackWrapper({
  children,
}: React.PropsWithChildren) {
  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const code = params.get("code");
    if (code) {
      getAccessToken(code);
      // remove code parameter from url
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      url.searchParams.delete("code");
      window.history.replaceState({}, document.title, url);
    }
  }, []);
  return children;
}
