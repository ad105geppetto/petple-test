import React from "react";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.querys";
import {
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "../../../../src/components/units/board/write/BoardWrite.querys";

export const propsMock = {
  imageUrls: [],
  fileRef: React.createRef<HTMLInputElement[]>(),
  isEdit: true,
  data: {
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
  },
  contents: "test",
  writer: "test",
  isOpen: false,
  onCancel: jest.fn(),
  onChangeWriter: jest.fn(),
  onChangePassword: jest.fn(),
  onChangeTitle: jest.fn(),
  onChangeContents: jest.fn(),
  onClickImage: jest.fn(),
  onChangeUploadFile: jest.fn(),
  onClickSubmit: jest.fn(),
  onClickEdit: jest.fn(),
};

export const mocks = [
  {
    request: {
      query: UPDATE_BOARD,
      variables: {
        updateBoardInput: {
          title: "update_test",
          contents: "update_test",
          images: [],
        },
        password: "1234",
        boardId: "6409e1391182750028ee7891",
      },
    },
    result: {
      data: {
        updateBoard: {
          _id: "6409e1391182750028ee7891",
        },
      },
    },
  },
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
