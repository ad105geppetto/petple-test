import { type ApolloQueryResult } from "@apollo/client";
import {
  type IQueryFetchBoardsArgs,
  type IQueryFetchBoardsCountArgs,
  type IQuery,
} from "../../../../commons/types/generated/types";
import { type Dispatch, type SetStateAction } from "react";

export interface IBoardListProps {
  data: Pick<IQuery, "fetchBoards" | "fetchBoardsCount"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs>
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchBoards" | "fetchBoardsCount">>
  >;
  startPage: number;
  currentPage: number;
  endPage: number;
  pages: number;
  keyword: string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setStartPage: Dispatch<SetStateAction<number>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  onClickMoveToBoardDetail: (id: string) => () => void;
  onClickMoveToBoardNew: () => void;
  onClickFirstPage: () => void;
  onClickLastPage: () => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickButton: (page: number) => () => void;
}

export interface IClickButtonProps {
  isActive: boolean;
}
