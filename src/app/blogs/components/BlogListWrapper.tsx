"use client";
import getAccessToken from "@/api/getAccessToken";
import Button from "@/components/Button";
import { useModalStore } from "@/store/ModalStore";
import { PropsWithChildren, useEffect } from "react";
import PostForm from "./PostForm";
import { BlogActionEnum } from "@/utils/enum";

export default function BlogListWrapper({ children }: PropsWithChildren) {
  const { openModal } = useModalStore();

  const addPostHandler = () => {
    openModal(<PostForm action={BlogActionEnum.CREATE} />);
  };

  useEffect(() => {
    // get access token from code
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

  return (
    <div className="relative">
      <h1>My Blog</h1>
      <Button onClick={addPostHandler} className="absolute right-0 top-0">
        New Post
      </Button>
      {children}
    </div>
  );
}
