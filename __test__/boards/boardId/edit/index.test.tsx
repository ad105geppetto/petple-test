import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import React, { useState as useStateMock } from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import BoardWriteUI from "../../../../src/components/units/board/write/BoardWrite.presenter";
import { mocks, propsMock } from "./boardEdit.mocks";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockImplementation(() => ({
  push: jest.fn(),
  query: { boardId: "6409e1391182750028ee7891" },
}));

describe("자유게시판 수정 페이지 Unit Test & Integration Test", () => {
  it("게시판 수정 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWriteUI {...propsMock} />
        </MockedProvider>
      );

      expect(result.container).toMatchSnapshot();
    });
  });

  it("내용작성 후 '수정하기' 버튼 클릭시, 페이지 이동합니다.", async () => {
    const router = useRouter();
    const setContents = jest.fn();

    await act(async () => {
      render(
        <RecoilRoot>
          <MockedProvider mocks={mocks} addTypename={false}>
            <BoardWrite
              isEdit={true}
              router={router}
              contents={"update_test"}
              setContents={setContents}
            />
          </MockedProvider>
        </RecoilRoot>
      );
    });

    const password = screen.getByRole("password");
    fireEvent.change(password, { target: { value: "1234" } });
    const title = screen.getByRole("title");
    fireEvent.change(title, { target: { value: "update_test" } });

    const onClickList = screen.getByText("수정하기");
    fireEvent.click(onClickList);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalled();
    });
  });
});
