import getBlog from "@/api/getBlog";
import { getFormattedDate } from "@/utils/dateHelper";

export default async function Page({ params }: { params: { blogId: string } }) {
  const { title, body, createdAt, updatedAt } = await getBlog(params.blogId);
  return (
    <div>
      <h2>{title}</h2>
      <p>Created at {getFormattedDate(createdAt)}</p>
      <div>{body}</div>
      <i>Last update at {getFormattedDate(updatedAt)}</i>
    </div>
  );
}
