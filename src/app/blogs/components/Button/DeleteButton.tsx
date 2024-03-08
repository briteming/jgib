"use client";

import updateBlog from "@/api/updateBlog";
import action from "@/app/actions";
import Button from "@/components/Button";
type propsType = {
  id: string;
};

function DeleteButton({ id }: propsType) {
  const deleteBlogHandler = async () => {
    const isSuccess = await updateBlog(id, { state: "closed" });
    if (isSuccess) {
      action();
    }
  };

  return <Button onClick={deleteBlogHandler}>DeleteButton</Button>;
}
export default DeleteButton;
