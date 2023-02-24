import { type ChangeEvent } from "react";

export interface ISignupUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  nameError: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  emailError: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordError: boolean;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordCheckError: boolean;
  passwordEqualError: boolean;
  onClickSignup: () => void;
  isSignup: boolean;
  onClickLogin: () => void;
}

export interface ISignupProps {
  isSignup: boolean;
}
