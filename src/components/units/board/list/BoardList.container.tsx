import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchBoardsCountArgs,
  type IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS_WITH_COUNT } from "./BoardList.querys";
import { useState, type MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards" | "fetchBoardsCount">,
    IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_WITH_COUNT);

  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const endPage = data ? Math.ceil(data.fetchBoardsCount / 10) : 1;

  const onClickMoveToBoardDetail = (id: string) => () => {
    void router.push(`boards/${id}`);
  };
  const onClickMoveToBoardNew = () => {
    void router.push(`boards/new`);
  };

  const onClickFirstPage = () => {
    if (currentPage === 1) return;
    setStartPage(1);
    setCurrentPage(1);
    void refetch({ page: 1 });
  };
  const onClickLastPage = () => {
    if (startPage + 10 <= endPage) {
      setStartPage(
        endPage % 10 === 0 ? endPage - 9 : endPage - (endPage % 10) + 1
      );
      setCurrentPage(endPage);
      void refetch({ page: endPage });
    }
  };
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrentPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNext = () => {
    if (startPage + 10 <= endPage) {
      setStartPage((prev) => prev + 10);
      setCurrentPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  const onClickButton = (event: MouseEvent<HTMLDivElement>) => {
    setCurrentPage(Number(event.currentTarget.innerText));
    void refetch({ page: Number(event.currentTarget.innerText) });
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      startPage={startPage}
      currentPage={currentPage}
      endPage={endPage}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickFirstPage={onClickFirstPage}
      onClickLastPage={onClickLastPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickButton={onClickButton}
    />
  );
}
