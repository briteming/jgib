"use client";
import closeIcon from "@/assets/img/close.svg";
import Button from "@/components/button/Button";
import { useModalStore } from "@/store/ModalStore";
import Image from "next/image";
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
          className="fixed z-10 bg-opacity-45 bg-black inset-0"
        >
          <div className="absolute bg-white inset-y-20 inset-x-96 sm:inset-x-40 rounded-2xl pt-16 pb-10 px-20">
            <Button
              onClick={closeModal}
              className="absolute right-5 top-5 !rounded-full"
            >
              <Image src={closeIcon} alt="close" width={20} height={20} />
            </Button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
