import { useMutation } from "@apollo/client";
import { type ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  type IMutation,
  type IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWrite.query";
import CommentWriteUI from "./CommentWrite.presenter";

export default function CommentWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

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
      alert("댓글 작성자를 입력해주세요.");
      return;
    }
    if (!password) {
      alert("댓글 비밀번호를 입력해주세요.");
      return;
    }
    if (!contents) {
      alert("댓글을 입력해주세요.");
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

  return (
    <CommentWriteUI
      writer={writer}
      password={password}
      contents={contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
