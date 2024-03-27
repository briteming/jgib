import { AlertStatusEnum } from "@/utils/enum";
import { create } from "zustand";

type AlertStatusType = AlertStatusEnum.FAIL | AlertStatusEnum.SUCCESS;

type AlertStoreType = {
  isShow: boolean;
  status: AlertStatusType;
  message: string;
  showSuccessAlert: (message?: string) => void;
  showFailAlert: (message?: string) => void;
  hideAlert: () => void;
};

export const useAlertStore = create<AlertStoreType>((set) => ({
  isShow: false,
  status: AlertStatusEnum.SUCCESS,
  message: "Success",
  showSuccessAlert: (message = "Success") => {
    set({ isShow: true, status: AlertStatusEnum.SUCCESS, message });
  },
  showFailAlert: (message = "Fail") => {
    set({ isShow: true, status: AlertStatusEnum.FAIL, message });
  },
  hideAlert: () => {
    set({ isShow: false });
  },
}));
