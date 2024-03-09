import { UpdateBlogType } from "@/types/blogType";
import { ZodType, z } from "zod";

export const BlogSchema: ZodType<UpdateBlogType> = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(10, "Body at least 10 characters long"),
});
