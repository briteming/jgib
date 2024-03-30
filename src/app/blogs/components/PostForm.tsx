"use client";
import addBlog from "@/api/addBlog";
import updateBlog from "@/api/updateBlog";
import Button from "@/components/button/Button";
import { useServerAction } from "@/hooks/useServerAction";
import { useAlertStore } from "@/store/AlertStore";
import { useModalStore } from "@/store/ModalStore";
import { BlogType, UpdateBlogType } from "@/types/blogType";
import { AlertStatusEnum, BlogActionEnum } from "@/utils/enum";
import { BlogSchema } from "@/utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
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
  const { action } = props;
  const isUpdateBlog = action === BlogActionEnum.UPDATE;
  const isCreateBlog = action === BlogActionEnum.CREATE;
  const [updateBlogAction, isUpdatePending] = useServerAction(updateBlog);
  const [createBlogAction, isCreatePending] = useServerAction(addBlog);
  const { closeModal } = useModalStore();
  const { showSuccessAlert, showFailAlert } = useAlertStore();
  const apiStatusRef = useRef<undefined | string>();

  let [initialTitle, initialBody] = ["", ""];
  if (isUpdateBlog) {
    initialTitle = props.blogItem.title;
    initialBody = props.blogItem.body;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBlogType>({ resolver: zodResolver(BlogSchema) });

  const submit: SubmitHandler<UpdateBlogType> = async ({ title, body }) => {
    let isSuccess: boolean | undefined = false;
    if (isUpdateBlog) {
      isSuccess = await updateBlogAction({
        id: props.blogItem.id,
        blogItem: { title, body },
      });
    }
    if (isCreateBlog) {
      isSuccess = await createBlogAction({ title, body });
    }
    apiStatusRef.current = isSuccess
      ? AlertStatusEnum.SUCCESS
      : AlertStatusEnum.FAIL;
  };

  useEffect(() => {
    if ((!isUpdatePending || !isCreatePending) && apiStatusRef.current) {
      let type = "";
      switch (action) {
        case BlogActionEnum.UPDATE:
          type = "Update";
          break;
        case BlogActionEnum.CREATE:
          type = "Add blog";
          break;
        default:
          type = "No type found...";
          break;
      }
      if (apiStatusRef.current === AlertStatusEnum.SUCCESS) {
        showSuccessAlert(`${type} success!`);
        closeModal();
      }
      if (apiStatusRef.current === AlertStatusEnum.FAIL) {
        showFailAlert(`${type} success!`);
        closeModal();
      }
    }
  }, [
    action,
    closeModal,
    isUpdatePending,
    isCreatePending,
    showFailAlert,
    showSuccessAlert,
  ]);

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
