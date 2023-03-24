import {
  CREATE_USER,
  LOGIN_USER,
} from "../../src/components/units/signup/Signup.querys";

export const propsMock = {
  onChangeName: jest.fn(),
  nameError: false,
  onChangeEmail: jest.fn(),
  emailError: false,
  onChangePassword: jest.fn(),
  passwordError: false,
  onChangePasswordCheck: jest.fn(),
  passwordCheckError: false,
  passwordEqualError: false,
  onClickSignup: jest.fn(),
  isSignup: false,
  onClickLogin: jest.fn(),
  isOpen: false,
  onClickCancel: jest.fn(),
};

export const mocks = [
  {
    request: {
      query: LOGIN_USER,
      variables: {
        email: "test@test.com",
        password: "1234",
      },
    },
    result: {
      data: {
        loginUser: {
          accessToken: "hi*=6409e139118asd275002sd8ee7891",
        },
      },
    },
  },
  {
    request: {
      query: CREATE_USER,
      variables: {
        createUserInput: {
          email: "test@test.com",
          password: "1234",
          name: "lee",
        },
      },
    },
    result: {
      data: {
        createUser: {
          _id: "d2152d1f5d2",
        },
      },
    },
  },
];
