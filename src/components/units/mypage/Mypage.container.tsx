import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, type ChangeEvent } from "react";
import {
  type IMutation,
  type IMutationResetUserPasswordArgs,
} from "../../../commons/types/generated/types";
import MypageUI from "./Mypage.presenter";
import { RESET_USER_PASSWORD } from "./Mypage.query";

export default function Mypage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

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
        alert("비밀번호가 동일하지 않습니다.");
        return;
      }

      await resetUserPassword({
        variables: { password: newPassword },
      });

      alert("비밀번호가 변경되었습니다.");

      router.back();
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <MypageUI
      onChangeNewPassword={onChangeNewPassword}
      onChangeNewPasswordCheck={onChangeNewPasswordCheck}
      onClickSubmit={onClickSubmit}
    />
  );
}
