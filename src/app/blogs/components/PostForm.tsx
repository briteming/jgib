import addBlog from "@/api/addBlog";
import updateBlog from "@/api/updateBlog";
import { blogAction } from "@/app/actions";
import Button from "@/components/button/Button";
import { useModalStore } from "@/store/ModalStore";
import { BlogType, UpdateBlogType } from "@/types/blogType";
import { BlogActionEnum } from "@/utils/enum";
import { BlogSchema } from "@/utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBlogType>({ resolver: zodResolver(BlogSchema) });

  const submit: SubmitHandler<UpdateBlogType> = async ({ title, body }) => {
    if (action === BlogActionEnum.UPDATE) {
      const isSuccess = await updateBlog(props.blogItem.id, { title, body });
      if (isSuccess) {
        blogAction();
      }
    } else {
      const isSuccess = await addBlog({ title, body });
      if (isSuccess) {
        blogAction();
      }
    }
    closeModal();
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="h-full flex flex-col gap-10 "
    >
      <div className="flex gap-5 relative">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          className="input"
          defaultValue={initialTitle}
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 absolute right-0 -bottom-8">
            {errors.title.message}
          </p>
        )}
      </div>
      <div className="flex gap-5 flex-1 relative">
        <label htmlFor="body">Body:</label>
        <textarea
          className="input h-full resize-none"
          id="body"
          defaultValue={initialBody}
          {...register("body")}
        />
        {errors.body && (
          <p className="text-red-500 absolute right-0 -bottom-8">
            {errors.body.message}
          </p>
        )}
      </div>
      <div className="flex gap-5 self-end w-40">
        <Button onClick={closeModal} variant="outlined" className="flex-1">
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          {action === BlogActionEnum.UPDATE ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
