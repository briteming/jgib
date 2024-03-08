import { UpdateBlogType } from "@/types/blogType";
import { create } from "zustand";

type ModalStoreType = {
  id: string;
  isOpen: boolean;
  content: UpdateBlogType;
  openModal: (id: string, content: UpdateBlogType) => void;
  closeModal: () => void;
};

export const useBlogStore = create<ModalStoreType>((set) => ({
  id: "",
  isOpen: false,
  content: { title: "", body: "" },
  openModal: (id, content) => set({ isOpen: true, content, id }),
  closeModal: () => set({ isOpen: false }),
}));
