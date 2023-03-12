import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mocks, propsMock } from "./login.mocks";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import MypageUI from "../../src/components/units/mypage/Mypage.presenter";
import Mypage from "../../src/components/units/mypage/Mypage.container";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("마이페이지 Unit Test & Integration Test", () => {
  it("마이페이지 스냅샷 테스트", () => {
    const result = render(
      <RecoilRoot>
        <MockedProvider mocks={mocks} addTypename={false}>
          <MypageUI {...propsMock} />
        </MockedProvider>
      </RecoilRoot>
    );

    expect(result.container).toMatchSnapshot();
  });

  it("필수 정보 입력 후 비밀번호 변경 버튼 클릭시, 페이지 이동합니다.", async () => {
    const router = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(
      <RecoilRoot>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Mypage />
        </MockedProvider>
      </RecoilRoot>
    );

    const password = screen.getByPlaceholderText("새 비밀번호를 입력해주세요.");
    fireEvent.change(password, { target: { value: "qwerty123" } });
    //prettier-ignore
    const passwordCheck = screen.getByPlaceholderText("새 비밀번호를 확인해주세요.");
    fireEvent.change(passwordCheck, { target: { value: "qwerty123" } });

    const onClickLogin = screen.getByText("비밀번호 변경");
    fireEvent.click(onClickLogin);

    await waitFor(() => {
      const onClickOK = screen.getByText("OK");
      fireEvent.click(onClickOK);
    });

    expect(router.push).toHaveBeenCalledWith("/");
  });
});
