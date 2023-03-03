import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import _ from "lodash";
import {
  type IQuery,
  type IQueryFetchBoardsArgs,
  type IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import { type ApolloQueryResult } from "@apollo/client";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "../../../commons/store";
import SearchBarUI from "./SearchBar.presenter";

interface ISearchBarProps {
  setStartPage: Dispatch<SetStateAction<number>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs | IQueryFetchBoardsCountArgs>
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchBoards" | "fetchBoardsCount">>
  >;
}

export default function SearchBar(props: ISearchBarProps) {
  const setCurrentPage = useSetRecoilState(currentPageState);

  const getDebounce = _.debounce((value) => {
    props.setStartPage(1);
    setCurrentPage(1);
    void props.refetch({ search: value, page: 1 });
    props.setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <SearchBarUI onChangeSearch={onChangeSearch} />;
}
