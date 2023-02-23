import { getDate } from "../../../../commons/utils/utils";
import CommentWrite from "../write/CommentWrite.container";
import * as S from "./CommentList.styles";
import { type ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((comment) => (
        <S.Wrapper key={comment._id}>
          {props.editCommentId === comment._id ? (
            <S.CommentWriteWrapper>
              <CommentWrite
                isEdit={props.isEdit}
                boardCommentId={comment._id}
                editWriter={comment.writer ? comment.writer : ""}
                setIsEdit={props.setIsEdit}
                setEditCommentId={props.setEditCommentId}
              />
            </S.CommentWriteWrapper>
          ) : (
            <S.ProfileWrapper>
              <S.Profile src="/profile.webp" />
              <S.UserWrapper>
                <S.Writer>{comment.writer}</S.Writer>
                <S.Comment>{comment.contents}</S.Comment>
                <S.Date>{getDate(comment.createdAt)}</S.Date>
              </S.UserWrapper>
              <S.EditIcon onClick={props.onClickEdit(comment._id)} />
              <S.DeleteIcon onClick={props.onClickDelete(comment._id)} />
            </S.ProfileWrapper>
          )}
        </S.Wrapper>
      ))}
    </>
  );
}
