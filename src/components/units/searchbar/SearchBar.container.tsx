import { type ChangeEvent } from "react";
import _ from "lodash";
import SearchBarUI from "./SearchBar.presenter";
import { type ISearchBarProps } from "./SearchBar.types";

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((value) => {
    props.setStartPage(1);
    props.setCurrentPage(1);
    void props.refetch({ search: value, page: 1 });
    props.setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <SearchBarUI onChangeSearch={onChangeSearch} />;
}
