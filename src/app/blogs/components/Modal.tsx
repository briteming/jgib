"use client";
import Button from "@/components/Button";
import { useBlogStore } from "@/store/ModalStore";
import { MouseEventHandler, useEffect, useState } from "react";
import UpdateButton from "./Button/UpdateButton";

export default function Modal() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id, content, isOpen, closeModal } = useBlogStore();

  const clickBgHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  useEffect(() => {
    setTitle(content.title);
    setBody(content.body);
  }, [content]);

  return (
    <>
      {isOpen && (
        <div
          onClick={clickBgHandler}
          className="absolute z-10 bg-opacity-45 bg-black inset-0"
        >
          <div className="absolute  bg-white inset-y-20 inset-x-96 sm:inset-x-40 rounded-2xl">
            <Button onClick={closeModal} className="absolute right-5 top-5">
              X
            </Button>
            <div className="h-full flex flex-col px-10 pt-10 pb-20">
              <div className="flex gap-5 mb-10">
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  id="title"
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex gap-5 flex-1">
                <label htmlFor="body">Body:</label>
                <textarea
                  className="w-full h-full resize-none"
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
            <UpdateButton
              className="absolute bottom-5 right-5"
              id={id}
              modalContent={{ title, body }}
            />
          </div>
        </div>
      )}
    </>
  );
}
