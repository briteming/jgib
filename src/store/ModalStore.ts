import { ReactElement } from "react";
import { create } from "zustand";

type ModalButtonType = {
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

type ModalStoreType = {
  isOpen: boolean;
  content: ReactElement | null;
  buttonInfo: ModalButtonType;
  openModal: (content: ReactElement | null) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  isOpen: false,
  content: null,
  buttonInfo: {
    confirmText: "confirm",
    cancelText: "cancel",
    onConfirm: () => set({ isOpen: false }),
    onCancel: () => set({ isOpen: false }),
  },
  openModal: (content) =>
    set({
      isOpen: true,
      content,
    }),
  closeModal: () => set({ isOpen: false }),
}));
