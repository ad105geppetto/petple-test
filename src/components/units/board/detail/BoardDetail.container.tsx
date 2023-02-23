import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.querys";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );

  const onClickList = () => {
    void router.push("/boards");
  };

  const onClickUpdate = () => {
    void router.push(`/boards/${String(router.query.boardId)}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickList={onClickList}
      onClickUpdate={onClickUpdate}
    />
  );
}
