import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import BoardsList from "../../src/components/units/board/list/BoardList.container";
import "@testing-library/jest-dom";
import { mocks } from "./boardsMock";
import { useRouter } from "next/router";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Initialize ApolloClient with MockedProvider
const client = new ApolloClient({
  cache: new InMemoryCache(),
});

// Render the component with ApolloProvider
const renderWithApollo = (component: JSX.Element) => {
  return render(
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        {component}
      </MockedProvider>
    </ApolloProvider>
  );
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("자유게시판 목록 페이지 Unit Test & Integration Test", () => {
  describe("검색창 Component", () => {
    it("검색창이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const searchBar = screen.getByPlaceholderText("검색어를 입력해주세요.");
      expect(searchBar).toBeInTheDocument();
    });

    it("검색어 입력시 페이지 변경합니다.", async () => {
      renderWithApollo(<BoardsList />);

      const searchInput = screen.getByPlaceholderText("검색어를 입력해주세요.");
      fireEvent.change(searchInput, { target: { value: "테스트" } });
      await waitFor(() => {
        const elements = screen.getAllByText("테스트");
        elements.forEach((element) => {
          expect(element).toBeVisible();
        });
      });
    });
  });

  describe("게시글 목록 Component", () => {
    it("목록 페이지에서 목록을 볼 수 있습니다.", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      await waitFor(() => {
        const boardItem = screen.getAllByTestId("boardItem");
        expect(boardItem.length).toBe(10);
      });
    });

    it("페이지 목록 클릭시, 페이지를 이동합니다.", async () => {
      const router = {
        push: jest.fn(),
      };
      (useRouter as jest.Mock).mockReturnValue(router);

      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      await waitFor(() => {
        const boardItem = screen.getAllByTestId("boardItem");
        fireEvent.click(boardItem[0]);
        expect(router.push).toHaveBeenCalledWith(
          "boards/64077d771182750028ee76dc"
        );
      });
    });
  });

  describe("페이지 이동버튼 Component", () => {
    it("페이지 이동 버튼 개수는 10개입니다.", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      await waitFor(() => {
        const pageButton = screen.getAllByTestId("pageButton");
        expect(pageButton.length).toBe(10);
      });
    });

    it("페이지 이동 버튼 클릭시, 페이지를 이동합니다.", async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      let initialText: string;
      await waitFor(() => {
        const initialPage = screen.getAllByTestId("boardItem");
        if (!initialPage[0].children[1].textContent) return;
        initialText = initialPage[0].children[1].textContent;
      });

      fireEvent.click(screen.getByText(4)); // 번호 변경시, boardMock.ts에서 page 번호도 변경 필수

      await waitFor(() => {
        const currentPage = screen.getAllByTestId("boardItem");
        let curruntText = currentPage[0].children[1].textContent;
        expect(initialText !== curruntText).toBe(true);
      });
    });

    it("맨 앞으로 가기 버튼이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const boardWriteButton = screen.getByText("<<");
      expect(boardWriteButton).toBeInTheDocument();
    });

    it("맨 뒤로 가기 버튼이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const boardWriteButton = screen.getByText(">>");
      expect(boardWriteButton).toBeInTheDocument();
    });

    it("앞으로 가기 버튼이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const boardWriteButton = screen.getByText("<");
      expect(boardWriteButton).toBeInTheDocument();
    });

    it("뒤로 가기 버튼이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const boardWriteButton = screen.getByText(">");
      expect(boardWriteButton).toBeInTheDocument();
    });

    it("[모바일 환경] 페이지 이동 버튼 개수는 5개입니다.", async () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 766,
      });
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      await waitFor(() => {
        const pageButton = screen.getAllByTestId("pageButton");
        expect(window.innerWidth).toBe(766);
        expect(pageButton.length).toBe(5);
      });
    });
  });

  describe("등록하기 버튼 Component", () => {
    it("등록하기 버튼이 존재합니다.", () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const boardWriteButton = screen.getByText("등록하기");
      expect(boardWriteButton).toBeInTheDocument();
    });

    it("등록하기 버튼 클릭시, 페이지를 이동합니다.", () => {
      const router = {
        push: jest.fn(),
      };
      (useRouter as jest.Mock).mockReturnValue(router);

      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BoardsList />
        </MockedProvider>
      );

      const addButton = screen.getByText("등록하기");
      fireEvent.click(addButton);
      expect(router.push).toHaveBeenCalledWith("boards/new");
    });
  });
});
