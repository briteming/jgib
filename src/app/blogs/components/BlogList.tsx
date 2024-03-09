import getBlogList from "@/api/getBlogList";
import getUser from "@/api/getUser";
import { userName } from "@/constants/commons";
import { BlogType } from "@/types/blogType";
import BlogBlock from "./BlogBlock";

export default async function BlogList() {
  const blogList = await getBlogList();
  const user = await getUser();
  const isAuthor = user.name === userName;

  return (
    <div>
      {blogList.map((blogItem: BlogType) => {
        return (
          <BlogBlock
            key={blogItem.id}
            blogItem={blogItem}
            isAuthor={isAuthor}
          />
        );
      })}
    </div>
  );
}
