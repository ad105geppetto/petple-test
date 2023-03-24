import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { type IQuery } from "../../../../commons/types/generated/types";
import LogoutModal from "../../modal/logout";
import * as S from "./header.styles";
import { useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data, client } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickMoveToSignup = () => {
    void router.push("/signup");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  const onClickMoveToLogout = async () => {
    setIsOpen(true);
  };

  const onClickLogout = async () => {
    setIsOpen(false);
    localStorage.removeItem("accessToken");
    await client.clearStore();
    setAccessToken("");
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <S.Container>
      {isOpen ? (
        <LogoutModal onLogout={onClickLogout} onCancle={onClickCancel} />
      ) : (
        ""
      )}
      <S.Wapper>
        <S.LogoWapper>PETPLE</S.LogoWapper>
        {accessToken ? (
          <S.Group>
            <S.LogoutWapper>
              <S.Logout>{data?.fetchUserLoggedIn.name} 님</S.Logout>
            </S.LogoutWapper>
            <S.SignupWapper>
              <S.Signup onClick={onClickMoveToLogout}>로그아웃</S.Signup>
            </S.SignupWapper>
          </S.Group>
        ) : (
          <S.Group>
            <S.LoginWapper>
              <S.Login onClick={onClickMoveToLogin}>로그인</S.Login>
            </S.LoginWapper>
            <S.SignupWapper>
              <S.Signup onClick={onClickMoveToSignup}>회원가입</S.Signup>
            </S.SignupWapper>
          </S.Group>
        )}
      </S.Wapper>
    </S.Container>
  );
}
