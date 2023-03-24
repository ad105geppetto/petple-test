import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { mocks } from "./boardWrite.mocks";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("자유게시판 등록 페이지 Unit Test & Integration Test", () => {
  it("작성자 입력창이 존재합니다.", async () => {
    const setContents = jest.fn();
    const router = useRouter();
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWrite
            isEdit={false}
            router={router}
            contents={""}
            setContents={setContents}
          />
        </MockedProvider>
      );
    });

    const writer = screen.getByRole("heading", { level: 4, name: "작성자" });
    expect(writer).toBeInTheDocument();
  });

  it("비밀번호 입력창이 존재합니다.", async () => {
    const setContents = jest.fn();
    const router = useRouter();
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWrite
            isEdit={false}
            router={router}
            contents={""}
            setContents={setContents}
          />
        </MockedProvider>
      );
    });

    const password = screen.getByRole("heading", {
      level: 4,
      name: "비밀번호",
    });
    expect(password).toBeInTheDocument();
  });

  it("제목 입력창이 존재합니다.", async () => {
    const setContents = jest.fn();
    const router = useRouter();
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWrite
            isEdit={false}
            router={router}
            contents={""}
            setContents={setContents}
          />
        </MockedProvider>
      );
    });

    const title = screen.getByRole("heading", { level: 4, name: "제목" });
    expect(title).toBeInTheDocument();
  });

  it("내용 입력창이 존재합니다.", async () => {
    const setContents = jest.fn();
    const router = useRouter();
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWrite
            isEdit={false}
            router={router}
            contents={""}
            setContents={setContents}
          />
        </MockedProvider>
      );
    });

    const contents = screen.getByRole("heading", { level: 4, name: "내용" });
    expect(contents).toBeInTheDocument();
  });

  it("사진 첨부 입력창이 존재합니다.", async () => {
    const setContents = jest.fn();
    const router = useRouter();
    await act(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardWrite
            isEdit={false}
            router={router}
            contents={""}
            setContents={setContents}
          />
        </MockedProvider>
      );
    });

    const images = screen.getByRole("heading", { level: 4, name: "사진 첨부" });
    expect(images).toBeInTheDocument();
  });

  it("게시물 등록버튼이 존재합니다.", async () => {
    const router = {
      ...jest.requireActual("next/router"),
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(router);
    const setContents = jest.fn();

    await act(async () => {
      render(
        <RecoilRoot>
          <MockedProvider mocks={mocks} addTypename={false}>
            <BoardWrite
              isEdit={false}
              router={router}
              contents={"test"} // contents 부분 test위해 작성
              setContents={setContents}
            />
          </MockedProvider>
        </RecoilRoot>
      );
    });

    const writer = screen.getByRole("writer");
    fireEvent.change(writer, { target: { value: "test" } });
    const password = screen.getByRole("password");
    fireEvent.change(password, { target: { value: "1234" } });
    const title = screen.getByRole("title");
    fireEvent.change(title, { target: { value: "test" } });

    const register = screen.getByText("등록하기");
    fireEvent.click(register);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith(
        "/boards/6409e1391182750028ee7891"
      );
    });
  });
});
