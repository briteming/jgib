import { showFailAlert, showSuccessAlert } from "@/store/AlertStore";
import { AlertStatusEnum } from "./enum";

type handleAlertType = {
  status?: AlertStatusEnum;
  alertText?: {
    success: string;
    fail: string;
  };
  onSuccessResult?: () => void;
  onFailResult?: () => void;
};

export const handleAlert = ({
  status,
  alertText,
  onSuccessResult,
  onFailResult,
}: handleAlertType) => {
  if (status === AlertStatusEnum.SUCCESS) {
    showSuccessAlert(alertText?.success);
    if (onSuccessResult) onSuccessResult();
  }
  if (status === AlertStatusEnum.FAIL) {
    showFailAlert(alertText?.fail);
    if (onFailResult) onFailResult();
  }
};
