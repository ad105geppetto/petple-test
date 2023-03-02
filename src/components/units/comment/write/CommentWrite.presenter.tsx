import * as S from "./CommentWrite.styles";
import { CommentOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { type ICommentWriteUIProps } from "./CommentWrite.types";
import ErrorModal from "../../../commons/modal/error";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <>
      {props.isOpen ? <ErrorModal onCancel={props.onCancel} /> : ""}
      {props.isEdit ? (
        ""
      ) : (
        <S.TitleWrapper>
          <Space>
            <CommentOutlined />
          </Space>
          <S.H5>댓글</S.H5>
        </S.TitleWrapper>
      )}
      <S.Wrapper>
        <>
          <S.Label htmlFor="writer">작성자</S.Label>
          <S.UserInput
            type="text"
            id="writer"
            onChange={props.onChangeWriter}
            value={props.isEdit ? props.editWriter : props.writer}
            autoComplete="off"
            readOnly={props.isEdit}
          />
        </>
        <>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.UserInput
            type="password"
            id="password"
            onChange={props.onChangePassword}
            value={props.password}
            autoComplete="off"
          />
        </>
      </S.Wrapper>
      <S.CommentWrapper>
        <S.CommentInput
          type="text"
          onChange={props.onChangeContents}
          value={props.contents}
          autoComplete="off"
        />
        <S.CommentLimit>{props.contents.length} / 100</S.CommentLimit>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          댓글 {props.isEdit ? "수정" : "작성"}
        </S.SubmitButton>
      </S.CommentWrapper>
    </>
  );
}
