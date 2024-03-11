import getBlogList from "@/api/getBlogList";
import getUser from "@/api/getUser";
import { userName } from "@/constants/commons";
import BlogList from "./components/BlogList";
import BlogListWrapper from "./components/BlogListWrapper";

export default async function Page() {
  const user = await getUser();
  const blogList = await getBlogList();
  const isAuthor = user.name === userName;
  return (
    <BlogListWrapper isAuthor={isAuthor}>
      <BlogList isAuthor={isAuthor} initialBlogList={blogList} />
    </BlogListWrapper>
  );
}
