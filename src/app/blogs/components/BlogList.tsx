import getBlogList from "@/api/getBlogList";
import getUser from "@/api/getUser";
import { userName } from "@/constants/commons";
import { BlogType } from "@/types/blogType";
import { getFormattedDate } from "@/utils/date";
import BlogCard from "./BlogCard";
import BlogLinkTitle from "./BlogLinkTitle";
import DeleteButton from "./Button/DeleteButton";
import EditButton from "./Button/EditButton";

export default async function BlogList() {
  const blogList = await getBlogList();
  const user = await getUser();
  const isAuthor = user.name === userName;

  return (
    <div>
      {blogList.map((blogItem: BlogType) => {
        const { title, body, id } = blogItem;
        return (
          <BlogCard key={id}>
            <div>
              <BlogLinkTitle id={id} title={title} />
              <div className="flex justify-between">
                <p>{body}</p>
                {isAuthor && (
                  <div>
                    <EditButton id={id} content={{ title, body }} />
                    <DeleteButton id={blogItem.id} />
                  </div>
                )}
                <p>{getFormattedDate(blogItem.createdAt)}</p>
              </div>
            </div>
          </BlogCard>
        );
      })}
    </div>
  );
}
