import addBlog from "@/api/addBlog";
import updateBlog from "@/api/updateBlog";
import { blogListAction } from "@/app/actions";
import Button from "@/components/Button";
import { useModalStore } from "@/store/ModalStore";
import { BlogType } from "@/types/blogType";
import { BlogActionEnum } from "@/utils/enum";
import { useState } from "react";

type updatePropsType = {
  blogItem: BlogType;
  action: BlogActionEnum.UPDATE;
};

type createPropsType = {
  action: BlogActionEnum.CREATE;
};

type propsType = updatePropsType | createPropsType;

export default function PostForm(props: propsType) {
  const { closeModal } = useModalStore();
  const { action } = props;
  let [initialTitle, initialBody] = ["", ""];
  if (props.action === BlogActionEnum.UPDATE) {
    initialTitle = props.blogItem.title;
    initialBody = props.blogItem.body;
  }
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const confirmHandler = async () => {
    if (action === BlogActionEnum.UPDATE) {
      const isSuccess = await updateBlog(props.blogItem.id, { title, body });
      if (isSuccess) {
        blogListAction();
      }
    } else {
      const isSuccess = await addBlog({ title, body });
      if (isSuccess) {
        blogListAction();
      }
    }
    closeModal();
  };
  return (
    <div className="h-full flex flex-col gap-10 px-10 p-10">
      <div className="flex gap-5 ">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          className="w-full border-black border border-1 rounded-md p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex gap-5 flex-1 ">
        <label htmlFor="body">Body:</label>
        <textarea
          className="w-full h-full resize-none border border-black border-1 rounded-md p-2"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="flex gap-10 justify-end">
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={confirmHandler}>
          {action === BlogActionEnum.UPDATE ? "Update" : "Create"}
        </Button>
      </div>
    </div>
  );
}
