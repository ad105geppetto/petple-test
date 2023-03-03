import { gql } from "@apollo/client";

export const FETCH_BOARDS_WITH_COUNT = gql`
  query fetchBoardsWithCount($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
    fetchBoardsCount(search: $search)
  }
`;
