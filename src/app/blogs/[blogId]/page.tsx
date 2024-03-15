import getBlog from "@/api/getBlog";
import getCommentList from "@/api/getCommentList";
import getUser from "@/api/getUser";
import EditorButton from "@/components/button/EditorButton";
import { userName } from "@/constants/commons";
import { getFormattedDate } from "@/utils/dateHelper";
import { marked } from "marked";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

export default async function Page({ params }: { params: { blogId: string } }) {
  const blogItem = await getBlog(params.blogId);
  const commentList = await getCommentList(params.blogId);
  const user = await getUser();
  const isAuthor = user.name === userName;

  const { title, body, createdAt, updatedAt } = blogItem;

  return (
    <div>
      <h2>{title}</h2>
      <p className="text-right">Created at {getFormattedDate(createdAt)}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(body) }}></div>
      <p className="text-right">
        <i>Last update at {getFormattedDate(updatedAt)}</i>
      </p>
      {isAuthor && (
        <div className="text-right">
          <EditorButton blogItem={blogItem} />
        </div>
      )}
      {user.name && <CommentInput user={user} blogId={params.blogId} />}
      <Comment commentList={commentList} />
    </div>
  );
}
