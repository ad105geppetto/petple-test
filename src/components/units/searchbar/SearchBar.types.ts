import { type ApolloQueryResult } from "@apollo/client";
import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import {
  type IQuery,
  type IQueryFetchBoardsArgs,
  type IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

export interface ISearchBarProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setStartPage: Dispatch<SetStateAction<number>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs>
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchBoards" | "fetchBoardsCount">>
  >;
}

export interface ISearchBarUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
