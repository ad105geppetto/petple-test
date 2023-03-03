import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchBoardsCountArgs,
  type IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS_WITH_COUNT } from "./BoardList.querys";
import { useEffect, useState, type MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { currentPageState } from "../../../../commons/store";

export default function BoardList() {
  const router = useRouter();
  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards" | "fetchBoardsCount">,
    IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_WITH_COUNT);

  const [startPage, setStartPage] = useState(1);
  const endPage = data ? Math.ceil(data.fetchBoardsCount / 10) : 1;
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 767) {
      setPages(5);
    }
  }, [setPages]);

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
    if (startPage + pages <= endPage) {
      setStartPage(
        endPage % pages === 0
          ? endPage - (pages - 1)
          : endPage - (endPage % pages) + 1
      );
      setCurrentPage(endPage);
      void refetch({ page: endPage });
    }
  };
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - pages);
    setCurrentPage(startPage - pages);
    void refetch({ page: startPage - pages });
  };
  const onClickNext = () => {
    if (startPage + 10 <= endPage) {
      setStartPage((prev) => prev + pages);
      setCurrentPage(startPage + pages);
      void refetch({ page: startPage + pages });
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
      pages={pages}
      keyword={keyword}
      setStartPage={setStartPage}
      setKeyword={setKeyword}
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
