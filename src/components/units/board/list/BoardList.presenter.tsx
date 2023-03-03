import { getDate } from "../../../../commons/utils/utils";
import { type IBoardListProps } from "./BoardList.types";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../searchbar/SearchBar.container";

const SEPARATOR = uuidv4();

export default function BoardListUI(props: IBoardListProps) {
  return (
    <>
      <SearchBar
        setStartPage={props.setStartPage}
        setKeyword={props.setKeyword}
        refetch={props.refetch}
      />
      <S.BoardListWrapper>
        <S.BoardItemsTop>
          <S.ItemNumber>번호</S.ItemNumber>
          <S.ItemTitleTop>제목</S.ItemTitleTop>
          <S.ItemWriter>작성자</S.ItemWriter>
          <S.ItemDate>등록일자</S.ItemDate>
        </S.BoardItemsTop>
        {props.data?.fetchBoards.map((board, index) => (
          <S.BoardItems
            key={board._id}
            onClick={props.onClickMoveToBoardDetail(board._id)}
          >
            {props.data && (
              <S.ItemNumber>
                {props.data?.fetchBoardsCount -
                  (index + (props.currentPage - 1) * 10)}
              </S.ItemNumber>
            )}
            <S.ItemTitle>
              {board.title
                .replaceAll(
                  props.keyword,
                  `${SEPARATOR}${props.keyword}${SEPARATOR}`
                )
                .split(`${SEPARATOR}`)
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: el === props.keyword ? "#749c06" : "" }}
                  >
                    {el}
                  </span>
                ))}
            </S.ItemTitle>
            <S.ItemWriter>{board.writer}</S.ItemWriter>
            <S.ItemDate>{getDate(board.createdAt)}</S.ItemDate>
          </S.BoardItems>
        ))}
      </S.BoardListWrapper>
      <S.BoardPageWrapper>
        <S.BoardPage>
          <S.PageMoveButton onClick={props.onClickFirstPage}>
            {"<<"}
          </S.PageMoveButton>
          <S.PageMoveButton onClick={props.onClickPrev}>{"<"}</S.PageMoveButton>
          {Array(props.pages)
            .fill(props.startPage)
            .filter((_, idx) => idx + props.startPage <= props.endPage)
            .map((_, idx) => (
              <S.PageButton
                key={idx + props.startPage}
                onClick={props.onClickButton}
                isActive={idx + props.startPage === props.currentPage}
              >
                {idx + props.startPage}
              </S.PageButton>
            ))}
          <S.PageMoveButton onClick={props.onClickNext}>{">"}</S.PageMoveButton>
          <S.PageMoveButton onClick={props.onClickLastPage}>
            {">>"}
          </S.PageMoveButton>
        </S.BoardPage>
        <S.Register onClick={props.onClickMoveToBoardNew}>등록하기</S.Register>
      </S.BoardPageWrapper>
    </>
  );
}
