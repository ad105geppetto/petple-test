import { type ChangeEvent } from "react";

export interface IMypageUIProps {
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNewPasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
