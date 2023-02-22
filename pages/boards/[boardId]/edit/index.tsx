import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQueryFetchBoardArgs,
  type IQuery,
} from "../../../../src/commons/types/generated/types";
import { useState, useEffect } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  useEffect(() => {
    if (data) {
      setContents(String(data.fetchBoard.contents));
    }
  }, [data]);

  return (
    <BoardWrite
      isEdit={true}
      data={data}
      router={router}
      contents={contents}
      setContents={setContents}
    />
  );
}
