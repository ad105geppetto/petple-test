import { type ChangeEvent } from "react";

export interface IMypageUIProps {
  isOpen: boolean;
  isOpenError: boolean;
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNewPasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onCancel: () => void;
  onCancelError: () => void;
}
