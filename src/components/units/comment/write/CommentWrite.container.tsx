import { useMutation } from "@apollo/client";
import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  type IMutationUpdateBoardCommentArgs,
  type IMutation,
  type IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.querys";
import CommentWriteUI from "./CommentWrite.presenter";
import { type ICommentWriteProps } from "./CommentWrite.types";
import { modalMessageState } from "../../../../commons/store";
import { useSetRecoilState } from "recoil";

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setModalMessage = useSetRecoilState(modalMessageState);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT, {
    refetchQueries: () => [
      {
        query: FETCH_BOARD_COMMENTS,
        variables: { boardId: String(router.query.boardId) },
      },
    ],
  });
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT, {
    refetchQueries: () => [
      {
        query: FETCH_BOARD_COMMENTS,
        variables: { boardId: String(router.query.boardId) },
      },
    ],
  });

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 100) {
      setContents(event.target.value);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setIsOpen(true);
      setModalMessage("댓글 작성자를 입력해주세요.");
      return;
    }
    if (!password) {
      setIsOpen(true);
      setModalMessage("댓글 비밀번호를 입력해주세요.");
      return;
    }
    if (!contents) {
      setIsOpen(true);
      setModalMessage("댓글을 입력해주세요.");
      return;
    }

    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: 0,
        },
        boardId: String(router.query.boardId),
      },
    });

    setWriter("");
    setPassword("");
    setContents("");
  };

  const onClickUpdate = async () => {
    if (!password) {
      setIsOpen(true);
      setModalMessage("댓글 비밀번호를 입력해주세요.");
      return;
    }
    if (!contents) {
      setIsOpen(true);
      setModalMessage("댓글을 입력해주세요.");
      return;
    }

    await updateBoardComment({
      variables: {
        updateBoardCommentInput: {
          contents,
          rating: 0,
        },
        password,
        boardCommentId: props.boardCommentId,
      },
    });

    props.setIsEdit(false);
    props.setEditCommentId("");
    setPassword("");
    setContents("");
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <CommentWriteUI
      writer={writer}
      password={password}
      contents={contents}
      isEdit={props.isEdit}
      editWriter={props.editWriter}
      isOpen={isOpen}
      onCancel={onCancel}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
