import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 120px;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 767px;
  }
`;

export const LogoWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-style: italic;
  font-size: 32px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    width: 30%;
    font-size: 22px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 10%;
    font-size: 22px;
  }
`;

export const SearchWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72%;
  padding: 0 50px;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 57%;
    padding: 0px 30px 0px 60px;
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 27px;
  border: 1px solid #e1e1e1;
  border-radius: 27px;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 40px;
    border-radius: 20px;
    padding: 0px 30px 0px 60px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 28%;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 33%;
  }
`;

export const LogoutWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  position: relative;
`;

export const Logout = styled.div`
  font-weight: bold;
`;

export const LoginWapper = styled.div`
  width: 120px;
  position: relative;
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
