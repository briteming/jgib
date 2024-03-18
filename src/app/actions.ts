"use server";

import { revalidateTag } from "next/cache";

export const blogAction = () => {
  revalidateTag("blogList");
  revalidateTag("blogItem");
};

export const commentListAction = () => {
  revalidateTag("commentList");
};
