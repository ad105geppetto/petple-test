import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignupUI from "../../src/components/units/signup/Signup.presenter";
import Signup from "../../src/components/units/signup/Signup.container";
import { mocks, propsMock } from "./login.mocks";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("로그인 Unit Test & Integration Test", () => {
  it("로그인 스냅샷 테스트", () => {
    const result = render(
      <RecoilRoot>
        <MockedProvider mocks={mocks} addTypename={false}>
          <SignupUI {...propsMock} />
        </MockedProvider>
      </RecoilRoot>
    );

    expect(result.container).toMatchSnapshot();
  });

  it("이메일과 비밀번호 입력 후 로그인 버튼 클릭시, 페이지 이동합니다.", async () => {
    const router = {
      replace: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(router);

    render(
      <RecoilRoot>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Signup isSignup={false} />
        </MockedProvider>
      </RecoilRoot>
    );

    const email = screen.getByPlaceholderText("이메일");
    fireEvent.blur(email, { target: { value: "test@test.com" } });
    const password = screen.getByPlaceholderText("비밀번호");
    fireEvent.blur(password, { target: { value: "1234" } });

    const onClickLogin = screen.getByText("로그인");
    fireEvent.click(onClickLogin);

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith("/boards");
    });
  });
});
