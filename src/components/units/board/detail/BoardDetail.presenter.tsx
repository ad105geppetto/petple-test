import { getDate } from "../../../../commons/utils/utils";
import * as S from "./BoardDetail.styles";
import Dompurify from "dompurify";
import { type IBoardDetailProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImageWrapper>
          {
            <S.Image
              src={
                props.data?.fetchBoard.images?.length
                  ? props.data?.fetchBoard.images[0]
                  : "https://i.pinimg.com/564x/fe/ea/bb/feeabbad8d01214c9cc82e5647467b47.jpg"
              }
            />
          }
          {props.data?.fetchBoard.images?.length ? (
            ""
          ) : (
            <S.ImageText>이미지 없음</S.ImageText>
          )}
        </S.ImageWrapper>
        <S.ProfileWrapper>
          <S.Profile src="/profile.webp" />
          <S.UserWrapper>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.Date>{getDate(props.data?.fetchBoard.createdAt)}</S.Date>
          </S.UserWrapper>
        </S.ProfileWrapper>
        <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>
        {typeof window !== "undefined" ? (
          <S.BoardContents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchBoard.contents)
              ),
            }}
          ></S.BoardContents>
        ) : (
          <S.BoardContents></S.BoardContents>
        )}
        <S.ButtonItemWrapper>
          <S.ButtonItem onClick={props.onClickList}>목록으로</S.ButtonItem>
          <S.ButtonItem onClick={props.onClickUpdate}>수정하기</S.ButtonItem>
        </S.ButtonItemWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
