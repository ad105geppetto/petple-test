import * as S from "./BoardWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { type IBoardWriteUIProps } from "./BoardWrite.types";
import ErrorModal from "../../../commons/modal/error";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen ? <ErrorModal onCancel={props.onCancel} /> : ""}
      <S.H2>게시물 {props.isEdit ? "수정" : "등록"}</S.H2>
      <S.TitleWrapperWithNonMember>
        <S.TitleWrapper>
          <S.H4>작성자</S.H4>
          <S.TitleInputWithNonMember
            type="text"
            role="writer"
            onChange={props.onChangeWriter}
            value={
              props.isEdit
                ? String(props.data?.fetchBoard.writer)
                : props.writer
            }
          />
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.H4>비밀번호</S.H4>
          <S.TitleInputWithNonMember
            type="password"
            role="password"
            onChange={props.onChangePassword}
          />
        </S.TitleWrapper>
      </S.TitleWrapperWithNonMember>
      <S.TitleWrapper>
        <S.H4>제목</S.H4>
        <S.TitleInput
          type="text"
          role="title"
          onChange={props.onChangeTitle}
          defaultValue={props.data && String(props.data?.fetchBoard.title)}
        />
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <S.H4>내용</S.H4>
        <ReactQuill
          onChange={props.onChangeContents}
          style={{ height: "500px" }}
          value={props.contents}
        />
      </S.ContentsWrapper>
      <S.ImageWrapper>
        <S.H4>사진 첨부</S.H4>
        <S.ImageUploadGroup>
          {new Array(3).fill("").map((_, index) => (
            <S.ImageUploadWrapper key={index}>
              {props.imageUrls[index] ? (
                <S.Image
                  src={props.imageUrls[index]}
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
                  if (!props.fileRef.current) return;
                  props.fileRef.current[index] = element;
                }}
                accept={"image/jpeg, image/jpg, image/png"}
              />
            </S.ImageUploadWrapper>
          ))}
        </S.ImageUploadGroup>
      </S.ImageWrapper>
      <S.RegisterWrapper>
        <S.Register
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.Register>
      </S.RegisterWrapper>
    </>
  );
}
