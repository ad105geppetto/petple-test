import * as S from "./BoardWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { type IBoardWriteProps } from "./BoardWrite.types";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function BoardWriteUI(props: IBoardWriteProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.H2>게시물 등록</S.H2>
        <S.TitleWrapperWithNonMember>
          <S.TitleWrapper>
            <S.H4>작성자</S.H4>
            <S.TitleInputWithNonMember
              type="text"
              onChange={props.onChangeWriter}
            />
          </S.TitleWrapper>
          <S.TitleWrapper>
            <S.H4>비밀번호</S.H4>
            <S.TitleInputWithNonMember
              type="password"
              onChange={props.onChangePassword}
            />
          </S.TitleWrapper>
        </S.TitleWrapperWithNonMember>
        <S.TitleWrapper>
          <S.H4>제목</S.H4>
          <S.TitleInput type="text" onChange={props.onChangeTitle} />
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.H4>내용</S.H4>
          <ReactQuill
            onChange={props.onChangeContents}
            style={{ height: "500px" }}
          />
        </S.ContentsWrapper>
        <S.H4>사진 첨부</S.H4>
        <S.ImageUploadGroup>
          {props.imageUrls.map((imageUrl, index) => (
            <S.ImageUploadWrapper key={index}>
              {imageUrl ? (
                <S.Image
                  src={imageUrl}
                  alt=""
                  onClick={props.onClickImage(index)}
                />
              ) : (
                <S.ImageUpload onClick={props.onClickImage(index)}>
                  <S.TextPlus>+</S.TextPlus>
                  <S.TextUpload>Upload</S.TextUpload>
                </S.ImageUpload>
              )}
              <S.ImageInput
                onChange={props.onChangeUploadFile(index)}
                type="file"
                ref={(element) => {
                  props.fileRef.current[index] = element;
                }}
                accept={"image/jpeg, image/jpg, image/png"}
              />
            </S.ImageUploadWrapper>
          ))}
        </S.ImageUploadGroup>
        <S.RegisterWrapper>
          <S.Register onClick={props.onClickSubmit}>등록하기</S.Register>
        </S.RegisterWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
