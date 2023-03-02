import ErrorModal from "../../commons/modal/error";
import NewPasswordModal from "../../commons/modal/newPassword";
import * as S from "./Mypage.styles";
import { type IMypageUIProps } from "./Mypage.types";

export default function MypageUI(props: IMypageUIProps) {
  return (
    <>
      {props.isOpenError ? <ErrorModal onCancel={props.onCancelError} /> : ""}
      {props.isOpen ? <NewPasswordModal onCancel={props.onCancel} /> : ""}
      <S.Title>개인정보 {">"} 비밀번호 변경</S.Title>
      <S.InputWrapper>
        새 비밀번호
        <S.Input
          type="password"
          placeholder="새 비밀번호를 입력해주세요."
          onChange={props.onChangeNewPassword}
          autoComplete="off"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        새 비밀번호 확인
        <S.Input
          type="password"
          placeholder="새 비밀번호를 확인해주세요."
          onChange={props.onChangeNewPasswordCheck}
          autoComplete="off"
        />
      </S.InputWrapper>
      <S.Submit onClick={props.onClickSubmit}>비밀번호 변경</S.Submit>
    </>
  );
}
