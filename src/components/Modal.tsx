"use client";
import Button from "@/components/Button";
import { useModalStore } from "@/store/ModalStore";
import { MouseEventHandler } from "react";

export default function Modal() {
  const { isOpen, closeModal, content } = useModalStore();

  const clickBgHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={clickBgHandler}
          className="absolute z-10 bg-opacity-45 bg-black inset-0"
        >
          <div className="absolute  bg-white inset-y-20 inset-x-96 sm:inset-x-40 rounded-2xl py-16 px-10">
            <Button onClick={closeModal} className="absolute right-5 top-5">
              X
            </Button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
