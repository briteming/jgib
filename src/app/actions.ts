"use server";

import { revalidateTag } from "next/cache";

export const blogListAction = () => {
  revalidateTag("blogList");
};
