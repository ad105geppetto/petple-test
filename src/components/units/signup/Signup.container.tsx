import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { accessTokenState, modalMessageState } from "../../../commons/store";
import {
  type IMutationLoginUserArgs,
  type IMutation,
  type IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignupUI from "./Signup.presenter";
import { CREATE_USER, LOGIN_USER } from "./Signup.querys";
import { type ISignupProps } from "./Signup.types";

export default function Signup(props: ISignupProps) {
  const router = useRouter();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setModalMessage = useSetRecoilState(modalMessageState);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [passwordEqualError, setPasswordEqualError] = useState(false);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(event.target.value);
  };

  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setPasswordCheckError(true);
    } else {
      setPasswordCheckError(false);
    }

    if (password !== event.target.value) {
      setPasswordEqualError(true);
    } else {
      setPasswordEqualError(false);
    }

    setPasswordCheck(event.target.value);
  };

  const onClickSignup = async () => {
    if (!name || !email || !password || !passwordCheck) {
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      if (!passwordCheck) setPasswordCheckError(true);

      setIsOpen(true);
      setModalMessage("필수 정보를 입력해주세요.");
      return;
    }

    // eslint-disable-next-line no-useless-escape
    const regex = /[0-9a-zA-Z]+\@[0-9a-zA-Z]+\.[a-zA-Z]+/g;

    if (!regex.test(email)) {
      setIsOpen(true);
      setModalMessage("이메일을 입력해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      setIsOpen(true);
      setModalMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await createUser({
        variables: {
          createUserInput: { name, email, password },
        },
      });

      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        setIsOpen(true);
        setModalMessage("로그인에 실패하였습니다.");
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);

      void router.replace("/boards");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name);
        console.log(error.stack);
        console.log(error.message);
        setIsOpen(true);
        setModalMessage("이미 존재하는 회원입니다.");
      }
    }
  };

  const onClickLogin = async () => {
    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);

      setIsOpen(true);
      setModalMessage("필수 정보를 입력해주세요.");
      return;
    }

    // eslint-disable-next-line no-useless-escape
    const regex = /[0-9a-zA-Z]+\@[0-9a-zA-Z]+\.[a-zA-Z]+/g;

    if (!regex.test(email)) {
      setIsOpen(true);
      setModalMessage("이메일을 입력해주세요.");
      return;
    }

    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        setIsOpen(true);
        setModalMessage("로그인에 실패하였습니다.");
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);

      void router.replace("/boards");
    } catch (error) {
      if (error instanceof Error) {
        setIsOpen(true);
        setModalMessage("잘못된 요청입니다.");
      }
    }
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <SignupUI
      onChangeName={onChangeName}
      nameError={nameError}
      onChangeEmail={onChangeEmail}
      emailError={emailError}
      onChangePassword={onChangePassword}
      passwordError={passwordError}
      onChangePasswordCheck={onChangePasswordCheck}
      passwordCheckError={passwordCheckError}
      passwordEqualError={passwordEqualError}
      onClickSignup={onClickSignup}
      isSignup={props.isSignup}
      onClickLogin={onClickLogin}
      isOpen={isOpen}
      onClickCancel={onClickCancel}
    />
  );
}
