import getBlogList from "@/api/getBlogList";
import { BlogType } from "@/types/blogType";
import { getFormattedDate } from "@/utils/date";
import BlogCard from "./BlogCard";
import BlogLinkTitle from "./BlogLinkTitle";

export default async function BlogList() {
  const blogList = await getBlogList();
  return (
    <div>
      {blogList.map((blogItem: BlogType) => {
        return (
          <BlogCard key={blogItem.title}>
            <div>
              <BlogLinkTitle id={blogItem.id} title={blogItem.title} />
              <div className="flex justify-between">
                <p>{blogItem.body}</p>
                <p>{getFormattedDate(blogItem.createdAt)}</p>
              </div>
            </div>
          </BlogCard>
        );
      })}
    </div>
  );
}
