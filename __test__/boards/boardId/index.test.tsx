import { props, mocks } from "./boardDetail.mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import BoardDetailUI from "../../../src/components/units/board/detail/BoardDetail.presenter";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import { useRouter } from "next/router";

describe("자유게시판 상세페이지 Unit Test & Integration Test", () => {
  it("게시판 상세페이지 스냅샷 테스트", () => {
    const mockedUseRouter = jest.spyOn(require("next/router"), "useRouter");
    mockedUseRouter.mockImplementation(() => ({
      query: { boardId: "6409e1391182750028ee7891" },
    }));

    const result = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BoardDetailUI {...props} />
      </MockedProvider>
    );

    expect(result.container).toMatchSnapshot();
  });

  it("'목록으로' 버튼 클릭시, 페이지를 이동합니다.", () => {
    const router = {
      push: jest.fn(),
      query: { boardId: "6409e1391182750028ee7891" },
    };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BoardDetail />
      </MockedProvider>
    );

    const onClickList = screen.getByText("목록으로");
    fireEvent.click(onClickList);

    expect(router.push).toHaveBeenCalled();
  });

  it("'수정하기' 버튼 클릭시, 페이지를 이동합니다.", () => {
    const router = {
      push: jest.fn(),
      query: { boardId: "6409e1391182750028ee7891" },
    };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BoardDetail />
      </MockedProvider>
    );

    const onClickList = screen.getByText("수정하기");
    fireEvent.click(onClickList);

    expect(router.push).toHaveBeenCalled();
  });
});
