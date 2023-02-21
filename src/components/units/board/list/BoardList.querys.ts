import { gql } from "@apollo/client";

export const FETCH_BOARDS_WITH_COUNT = gql`
  query fetchBoardsWithCount($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
    fetchBoardsCount
  }
`;
