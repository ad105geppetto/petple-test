import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 120px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1156px;
`;

export const LogoWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 212px;
  font-style: italic;
  font-size: 32px;
  font-weight: bold;
  margin-right: 118px;
`;

export const SearchWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 496px;
  margin-right: 67px;
`;

export const Search = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 27px;
  border: 1px solid #e1e1e1;
  border-radius: 27px;
`;

export const LogoutWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  position: relative;
  margin-right: 23px;
`;

export const Logout = styled.div`
  font-weight: bold;
`;

export const LoginWapper = styled.div`
  width: 120px;
  position: relative;
  margin-right: 23px;
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #749c06;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #000000;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const SignupWapper = styled.div`
  width: 120px;
  position: relative;
`;

export const Signup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #749c06;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #000000;
    transition: background-color 0.3s ease-in-out;
  }
`;
