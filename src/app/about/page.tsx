import getAuthor from "@/api/getAuthor";
import Image from "next/image";

export default async function page() {
  const author = await getAuthor();
  return (
    <div className="p-20 grid place-content-center h-full text-center">
      <h1>About Me</h1>
      <div className="w-36 h-36 mx-auto my-10 rounded-full overflow-hidden border-4 border-primary">
        <Image src={author.avatarUrl} alt="avatar" width={200} height={200} />
      </div>
      Hi there! This is the about page. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed euismod, nisl id tincidunt ultrices, mauris nunc
      tincidunt arcu, id tincidunt nunc mauris eu nunc. Nulla facilisi. Sed id
      justo id nunc luctus eleifend. Nullam auctor, mauris id lacinia tincidunt,
      nunc nunc ultricies nunc, id ultrices nunc nunc auctor nunc. Sed id justo
      id nunc luctus eleifend. Nullam auctor, mauris id lacinia tincidunt, nunc
      nunc ultricies nunc, id ultrices nunc nunc auctor nunc. Sed id justo id
      nunc luctus eleifend. Nullam auctor, mauris id lacinia tincidunt, nunc
      nunc ultricies nunc, id ultrices nunc nunc auctor nunc.
    </div>
  );
}
