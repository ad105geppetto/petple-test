import * as S from "./Signup.styles";
import { type ISignupUIProps } from "./Signup.types";
import ErrorModal from "../../commons/modal/error";

export default function SignupUI(props: ISignupUIProps) {
  return (
    <S.Wrapper>
      {props.isOpen ? <ErrorModal onCancel={props.onClickCancel} /> : ""}
      <S.Title>펫플 {props.isSignup ? "회원가입" : "로그인"}</S.Title>
      <S.Group>
        <S.H3>
          <S.Label htmlFor="email">이메일{props.isSignup ? "*" : ""}</S.Label>
          {props.emailError && (
            <S.ErrorMessage>필수 정보입니다.</S.ErrorMessage>
          )}
        </S.H3>
        <S.Input
          type="text"
          id="email"
          onBlur={props.onChangeEmail}
          placeholder="이메일"
          autoComplete="off"
        />
        <S.H3>
          <S.Label htmlFor="password">
            비밀번호{props.isSignup ? "*" : ""}
          </S.Label>
          {props.passwordError && (
            <S.ErrorMessage>필수 정보입니다.</S.ErrorMessage>
          )}
        </S.H3>
        <S.Input
          type="password"
          id="password"
          onBlur={props.onChangePassword}
          placeholder="비밀번호"
          autoComplete="off"
        />
        {props.isSignup ? (
          <>
            <S.H3>
              <S.Label htmlFor="password_check">비밀번호 확인*</S.Label>
              {props.passwordCheckError ? (
                <S.ErrorMessage>필수 정보입니다.</S.ErrorMessage>
              ) : (
                props.passwordEqualError && (
                  <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
                )
              )}
            </S.H3>
            <S.Input
              type="password"
              id="password_check"
              onBlur={props.onChangePasswordCheck}
              placeholder="비밀번호 확인"
              autoComplete="off"
            />
            <S.H3>
              <S.Label htmlFor="name">이름*</S.Label>
              {props.nameError && (
                <S.ErrorMessage>필수 정보입니다.</S.ErrorMessage>
              )}
            </S.H3>
            <S.Input
              type="text"
              id="name"
              onBlur={props.onChangeName}
              placeholder="이름"
              autoComplete="off"
            />
          </>
        ) : (
          ""
        )}
      </S.Group>
      <S.Group>
        <S.SignupButton
          onClick={props.isSignup ? props.onClickSignup : props.onClickLogin}
        >
          {props.isSignup ? "가입하기" : "로그인"}
        </S.SignupButton>
      </S.Group>
    </S.Wrapper>
  );
}
