import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IMutation,
  type IMutationDeleteBoardCommentArgs,
  type IQuery,
  type IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.querys";
import { useState } from "react";
import CommentListUI from "./CommentList.presenter";
import { modalMessageState } from "../../../../commons/store";
import { useSetRecoilState } from "recoil";

export default function CommentList() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [editCommentId, setEditCommentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setModalMessage = useSetRecoilState(modalMessageState);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT, {
    refetchQueries: () => [
      {
        query: FETCH_BOARD_COMMENTS,
        variables: { boardId: String(router.query.boardId) },
      },
    ],
  });

  const onClickEdit = (boardCommentId: string) => () => {
    setEditCommentId(boardCommentId);
    setIsEdit(!isEdit);
  };

  const onClickDelete = (boardCommentId: string) => async () => {
    try {
      const password = prompt("댓글 비밀번호를 입력하세요.");
      await deleteBoardComment({
        variables: { password, boardCommentId },
      });
    } catch (error) {
      if (error instanceof Error) {
        setIsOpen(true);
        setModalMessage("잘못된 요청입니다.");
      }
    }
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <CommentListUI
      data={data}
      editCommentId={editCommentId}
      isEdit={isEdit}
      isOpen={isOpen}
      onCancel={onCancel}
      setIsEdit={setIsEdit}
      setEditCommentId={setEditCommentId}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
}
