import { type ChangeEvent } from "react";

export interface ISearchBarUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
