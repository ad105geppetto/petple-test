import * as S from "./header.styles";

export default function LayoutHeader() {
  return (
    <S.Container>
      <S.Wapper>
        <S.LogoWapper>PETPLE</S.LogoWapper>
        <S.SearchWapper>
          <S.Search type="text" />
        </S.SearchWapper>
        <S.LoginWapper>
          <S.Login>Log In</S.Login>
        </S.LoginWapper>
        <S.SignupWapper>
          <S.Signup>Sign Up</S.Signup>
        </S.SignupWapper>
      </S.Wapper>
    </S.Container>
  );
}
