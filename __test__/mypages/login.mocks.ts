import { RESET_USER_PASSWORD } from "../../src/components/units/mypage/Mypage.query";

export const propsMock = {
  isOpen: false,
  isOpenError: false,
  onChangeNewPassword: jest.fn(),
  onChangeNewPasswordCheck: jest.fn(),
  onClickSubmit: jest.fn(),
  onCancel: jest.fn(),
  onCancelError: jest.fn(),
};

export const mocks = [
  {
    request: {
      query: RESET_USER_PASSWORD,
      variables: {
        password: "qwerty123",
      },
    },
    result: {
      data: { resetUserPassword: {} },
    },
  },
];
