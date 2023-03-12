import { FETCH_BOARD } from "../../../src/components/units/board/detail/BoardDetail.querys";
import { IBoardDetailProps } from "../../../src/components/units/board/detail/BoardDetail.types";
import { FETCH_BOARD_COMMENTS } from "../../../src/components/units/comment/list/CommentList.querys";

const data = {
  fetchBoard: {
    _id: "6409e1391182750028ee7891",
    writer: "test",
    title: "test",
    contents: "test",
    images: [],
    dislikeCount: 0,
    createdAt: "2023-02-23T22:22:32.753Z",
    likeCount: 0,
    updatedAt: "",
  },
};
const onClickList = jest.fn();
const onClickUpdate = jest.fn();
export const props: IBoardDetailProps = {
  data,
  onClickList,
  onClickUpdate,
};

export const mocks = [
  {
    request: {
      query: FETCH_BOARD,
      variables: {
        boardId: "6409e1391182750028ee7891",
      },
    },
    result: {
      data: {
        fetchBoard: {
          _id: "6409e1391182750028ee7891",
          writer: "test",
          title: "test",
          contents: "test",
          images: [],
          createdAt: "2023-02-23T22:22:32.753Z",
        },
      },
    },
  },
  {
    request: {
      query: FETCH_BOARD_COMMENTS,
      variables: {
        boardId: "6409e1391182750028ee7891",
      },
    },
    result: {
      data: {
        fetchBoardComments: {
          _id: "6409e1391182750028ee7891",
          writer: "test",
          contents: "test",
          createdAt: "2023-02-23T22:22:32.753Z",
        },
      },
    },
  },
];

export default Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
