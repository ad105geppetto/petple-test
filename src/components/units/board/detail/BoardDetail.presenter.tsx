import { getDate } from "../../../../commons/utils/utils";
import * as S from "./BoardDetail.styles";
import Dompurify from "dompurify";
import { type IBoardDetailProps } from "./BoardDetail.types";
import CommentWrite from "../../comment/write/CommentWrite.container";
import CommentList from "../../comment/list/CommentList.container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.SliderWrapper>
          <Slider {...settings}>
            {props.data?.fetchBoard.images?.length ? (
              props.data?.fetchBoard.images?.map((image, index) => (
                <S.ImageWrapper key={index}>
                  {<S.Image src={`https://storage.googleapis.com/${image}`} />}
                </S.ImageWrapper>
              ))
            ) : (
              <S.ImageWrapper>
                <S.Image src="https://i.pinimg.com/564x/fe/ea/bb/feeabbad8d01214c9cc82e5647467b47.jpg" />
                <S.ImageText>이미지 없음</S.ImageText>
              </S.ImageWrapper>
            )}
          </Slider>
        </S.SliderWrapper>
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
        <CommentWrite
          isEdit={false}
          boardCommentId=""
          editWriter=""
          setIsEdit={() => {}}
          setEditCommentId={() => {}}
        />
        <CommentList />
      </S.Wrapper>
    </S.Container>
  );
}
