"use client";
import getAccessToken from "@/api/getAccessToken";
import fileIcon from "@/assets/img/file.svg";
import Button from "@/components/button/Button";
import { useModalStore } from "@/store/ModalStore";
import { BlogActionEnum } from "@/utils/enum";
import Image from "next/image";
import { PropsWithChildren, useEffect } from "react";
import PostForm from "./PostForm";

export default function BlogListWrapper({
  children,
  isAuthor,
}: PropsWithChildren<{ isAuthor: boolean }>) {
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
      <h1 className="text-5xl">My Blog</h1>
      {isAuthor && (
        <Button onClick={addPostHandler} className="absolute right-0 top-0">
          <Image src={fileIcon} alt="new post" width={20} height={20} />
          <span className="ml-1">New Post</span>
        </Button>
      )}
      {children}
    </div>
  );
}
