import * as S from "./SearchBar.styles";
import { type ISearchBarUIProps } from "./SearchBar.types";

export default function SearchBarUI(props: ISearchBarUIProps) {
  return (
    <S.Wrapper>
      <S.SearchLogo />
      <S.SearchBar
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={props.onChangeSearch}
      />
    </S.Wrapper>
  );
}
