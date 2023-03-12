import {
  CREATE_BOARD,
  UPLOAD_FILE,
} from "../../../src/components/units/board/write/BoardWrite.querys";

export const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        createBoardInput: {
          writer: "test",
          password: "1234",
          title: "test",
          contents: "test",
          images: [],
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "6409e1391182750028ee7891",
        },
      },
    },
  },
  {
    request: {
      query: UPLOAD_FILE,
      variables: {
        uploadFile: {
          file: "",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          url: "",
        },
      },
    },
  },
];
