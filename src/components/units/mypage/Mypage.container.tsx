import { useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import { modalMessageState } from "../../../commons/store";
import {
  type IMutation,
  type IMutationResetUserPasswordArgs,
} from "../../../commons/types/generated/types";
import MypageUI from "./Mypage.presenter";
import { RESET_USER_PASSWORD } from "./Mypage.query";

export default function Mypage() {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [isOpenError, setIsOpenError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setModalMessage = useSetRecoilState(modalMessageState);

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const onChangeNewPasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordCheck(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      if (newPassword !== newPasswordCheck) {
        setIsOpenError(true);
        setModalMessage("비밀번호가 동일하지 않습니다.");
        return;
      }

      await resetUserPassword({
        variables: { password: newPassword },
      });

      setIsOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setIsOpenError(true);
        setModalMessage("잘못된 요청입니다.");
      }
    }
  };

  const onCancelError = () => {
    setIsOpenError(false);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <MypageUI
      isOpen={isOpen}
      isOpenError={isOpenError}
      onChangeNewPassword={onChangeNewPassword}
      onChangeNewPasswordCheck={onChangeNewPasswordCheck}
      onClickSubmit={onClickSubmit}
      onCancel={onCancel}
      onCancelError={onCancelError}
    />
  );
}
