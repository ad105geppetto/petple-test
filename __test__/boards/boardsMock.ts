import { FETCH_BOARDS_WITH_COUNT } from "../../src/components/units/board/list/BoardList.querys";

export const mocks = [
  {
    request: {
      query: FETCH_BOARDS_WITH_COUNT,
    },
    result: {
      data: {
        fetchBoards: [
          {
            _id: "64077d771182750028ee76dc",
            writer: "33",
            title: "11",
            createdAt: "2023-03-07T18:07:51.111Z",
          },
          {
            _id: "640754b81182750028ee76d9",
            writer: "123123123",
            title: "123123123",
            createdAt: "2023-03-07T15:14:00.878Z",
          },
          {
            _id: "6407525d1182750028ee76d8",
            writer: "홍길동",
            title: "제목",
            createdAt: "2023-03-07T15:03:57.024Z",
          },
          {
            _id: "640752471182750028ee76d7",
            writer: "홍길동",
            title: "sdfsdfsfsfsdf",
            createdAt: "2023-03-07T15:03:35.262Z",
          },
          {
            _id: "64074eb31182750028ee76d6",
            writer: "홍길동",
            title: "제목",
            createdAt: "2023-03-07T14:48:19.413Z",
          },
          {
            _id: "64074d691182750028ee76d5",
            writer: "sdfsdf",
            title: "fsdfsdf",
            createdAt: "2023-03-07T14:42:49.714Z",
          },
          {
            _id: "640738e41182750028ee76d4",
            writer: "124214asd",
            title: "asd",
            createdAt: "2023-03-07T13:15:16.847Z",
          },
          {
            _id: "6407246b1182750028ee76cc",
            writer: "sdgfvds",
            title: "sdgsdg",
            createdAt: "2023-03-07T11:47:55.028Z",
          },
          {
            _id: "6407243e1182750028ee76ca",
            writer: "dg",
            title: "ddfg",
            createdAt: "2023-03-07T11:47:10.309Z",
          },
          {
            _id: "640724301182750028ee76c9",
            writer: "sdf",
            title: "sdfsd",
            createdAt: "2023-03-07T11:46:56.791Z",
          },
        ],
        fetchBoardsCount: 1118,
      },
    },
  },
  {
    request: {
      query: FETCH_BOARDS_WITH_COUNT,
      variables: { page: 4 },
    },
    result: {
      data: {
        fetchBoards: [
          {
            _id: "6406e8261182750028ee7690",
            writer: "123",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:30:46.317Z",
          },
          {
            _id: "6406e5bf1182750028ee768f",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:20:31.061Z",
          },
          {
            _id: "6406e4ed1182750028ee768e",
            writer: "ㅇㅁㄴ",
            title: "das",
            createdAt: "2023-03-07T07:17:01.784Z",
          },
          {
            _id: "6406e4c21182750028ee768d",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:16:18.370Z",
          },
          {
            _id: "6406e4b61182750028ee768c",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:16:06.962Z",
          },
          {
            _id: "6406e4b61182750028ee768b",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:16:06.953Z",
          },
          {
            _id: "6406e4a31182750028ee768a",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:15:47.882Z",
          },
          {
            _id: "6406e4261182750028ee7688",
            writer: "철수",
            title: "제목입니다.",
            createdAt: "2023-03-07T07:13:42.355Z",
          },
          {
            _id: "6406dc6d1182750028ee767e",
            writer: "ergfve",
            title: "kjnkjn",
            createdAt: "2023-03-07T06:40:45.233Z",
          },
          {
            _id: "6406dc101182750028ee767d",
            writer: "lkln",
            title: "nlknkln",
            createdAt: "2023-03-07T06:39:12.130Z",
          },
        ],
        fetchBoardsCount: 1118,
      },
    },
  },
  {
    request: {
      query: FETCH_BOARDS_WITH_COUNT,
      variables: { page: 1, search: "테스트" },
    },
    result: {
      data: {
        fetchBoards: [
          {
            _id: "640799091182750028ee76e4",
            writer: "유젬",
            title: "23-03-08 테스트",
            createdAt: "2023-03-07T20:05:29.315Z",
          },
          {
            _id: "6407525d1182750028ee76d8",
            writer: "홍길동",
            title: "제목테스트",
            createdAt: "2023-03-07T15:03:57.024Z",
          },
          {
            _id: "64074eb31182750028ee76d6",
            writer: "홍길동",
            title: "테스트 제목",
            createdAt: "2023-03-07T14:48:19.413Z",
          },
          {
            _id: "64071f621182750028ee76b9",
            writer: "안녕하세요2",
            title: "테스트입니다.2",
            createdAt: "2023-03-07T11:26:26.225Z",
          },
          {
            _id: "6406fa841182750028ee76a4",
            writer: "테스트",
            title: "테스트용글",
            createdAt: "2023-03-07T08:49:08.588Z",
          },
          {
            _id: "640626d41182750028ee761e",
            writer: "제제제",
            title: "3차 테스트",
            createdAt: "2023-03-06T17:45:56.157Z",
          },
          {
            _id: "64060eb81182750028ee760f",
            writer: "안녕하세요",
            title: "테스트입니다.",
            createdAt: "2023-03-06T16:03:04.580Z",
          },
          {
            _id: "640333851182750028ee74af",
            writer: "홍길동",
            title: "테스트중입니다아ㅏㅏㅏㅏ",
            createdAt: "2023-03-04T12:03:17.832Z",
          },
          {
            _id: "64032de41182750028ee74aa",
            writer: "테스트",
            title: "제목 테스트중입니다",
            createdAt: "2023-03-04T11:39:16.538Z",
          },
          {
            _id: "640323251182750028ee74a4",
            writer: "홍길동",
            title: "테스트",
            createdAt: "2023-03-04T10:53:25.182Z",
          },
        ],
        fetchBoardsCount: 50,
      },
    },
  },
];
