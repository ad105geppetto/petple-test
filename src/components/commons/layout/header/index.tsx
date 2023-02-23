import { useRouter } from "next/router";
import * as S from "./header.styles";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToSignup = () => {
    void router.push("/signup");
  };
  return (
    <S.Container>
      <S.Wapper>
        <S.LogoWapper>PETPLE</S.LogoWapper>
        <S.SearchWapper>
          <S.Search type="text" />
        </S.SearchWapper>
        <S.LoginWapper>
          <S.Login>로그인</S.Login>
        </S.LoginWapper>
        <S.SignupWapper>
          <S.Signup onClick={onClickMoveToSignup}>회원가입</S.Signup>
        </S.SignupWapper>
      </S.Wapper>
    </S.Container>
  );
}
