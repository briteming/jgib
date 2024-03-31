import { AlertStatusEnum } from "@/utils/enum";
import { create } from "zustand";

type AlertStatusType = AlertStatusEnum.FAIL | AlertStatusEnum.SUCCESS;

type AlertStoreType = {
  isShow: boolean;
  status: AlertStatusType;
  message: string;
};

export const useAlertStore = create<AlertStoreType>(() => ({
  isShow: false,
  status: AlertStatusEnum.SUCCESS,
  message: "Success",
}));

export const showSuccessAlert = (message = "Success") =>
  useAlertStore.setState({
    isShow: true,
    status: AlertStatusEnum.SUCCESS,
    message,
  });

export const showFailAlert = (message = "Fail") =>
  useAlertStore.setState({
    isShow: true,
    status: AlertStatusEnum.FAIL,
    message,
  });

export const hideAlert = () => useAlertStore.setState({ isShow: false });
