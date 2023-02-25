import * as S from "./Side.styles";

export default function Side() {
  return (
    <S.Wrapper>
      <S.Mypage>MYPAGE</S.Mypage>
      <div>
        <S.TitleWrapper>
          <S.UserIcon />
          <S.Title>개인정보</S.Title>
        </S.TitleWrapper>
        <S.SubTitle>비밀번호 변경</S.SubTitle>
      </div>
    </S.Wrapper>
  );
}
