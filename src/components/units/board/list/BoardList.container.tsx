import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  type IQuery,
  type IQueryFetchBoardsCountArgs,
  type IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS_WITH_COUNT } from "./BoardList.querys";
import { useEffect, useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards" | "fetchBoardsCount">,
    IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_WITH_COUNT, { fetchPolicy: "network-only" });

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

  const onClickFirstPage = async () => {
    if (currentPage === 1) return;
    await refetch({ page: 1 });
    setStartPage(1);
    setCurrentPage(1);
  };
  const onClickLastPage = async () => {
    if (startPage + pages <= endPage) {
      await refetch({ page: endPage });
      setStartPage(
        endPage % pages === 0
          ? endPage - (pages - 1)
          : endPage - (endPage % pages) + 1
      );
      setCurrentPage(endPage);
    }
  };
  const onClickPrev = async () => {
    if (startPage === 1) return;
    await refetch({ page: startPage - pages });
    setStartPage((prev) => prev - pages);
    setCurrentPage(startPage - pages);
  };
  const onClickNext = async () => {
    if (startPage + 10 <= endPage) {
      await refetch({ page: startPage + pages });
      setStartPage((prev) => prev + pages);
      setCurrentPage(startPage + pages);
    }
  };
  const onClickButton = (page: number) => async () => {
    await refetch({ page });
    setCurrentPage(page);
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
      setCurrentPage={setCurrentPage}
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
