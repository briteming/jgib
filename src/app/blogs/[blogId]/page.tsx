import getBlog from "@/api/getBlog";
import Button from "@/components/Button";
import { getFormattedDate } from "@/utils/dateHelper";
import { marked } from "marked";

export default async function Page({ params }: { params: { blogId: string } }) {
  const { title, body, createdAt, updatedAt } = await getBlog(params.blogId);
  return (
    <div>
      <h2>{title}</h2>
      <p className="text-right">Created at {getFormattedDate(createdAt)}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(body) }}></div>
      <p className="text-right">
        <i>Last update at {getFormattedDate(updatedAt)}</i>
      </p>
      <div className="text-right">
        <Button>Edit</Button>
      </div>
    </div>
  );
}
