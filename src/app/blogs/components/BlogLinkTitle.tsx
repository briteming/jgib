import Link from "next/link";

type propsType = {
  id: string;
  title: string;
};
export default function BlogLinkTitle({ id, title }: propsType) {
  return (
    <h2 className="mb-2">
      <Link href={`blogs/${id}`}>{title}</Link>
    </h2>
  );
}
