import { create } from "zustand";

type LoadingMaskStore = {
  isShowLoadingMask: boolean;
  showLoadingMask: () => void;
  hideLoadingMask: () => void;
};

export const useLoadingMaskStore = create<LoadingMaskStore>((set) => ({
  isShowLoadingMask: false,
  showLoadingMask: () => set({ isShowLoadingMask: true }),
  hideLoadingMask: () => set({ isShowLoadingMask: false }),
}));
