import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Title = styled.h2`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  padding-bottom: 30px;
`;

export const Group = styled.div`
  width: 460px;
  margin-bottom: 50px;
`;

export const H3 = styled.h3`
  display: flex;
  margin-top: 19px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  cursor: "pointer";
`;

export const ErrorMessage = styled.div`
  padding: 0px 20px;
  color: red;
`;

export const Input = styled.input`
  padding: 0px 12px;
  width: 100%;
  height: 51px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 51px;
  font-size: 20px;
  font-weight: 700;
  background-color: #749c06;
  color: #ffffff;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #000000;
    transition: background-color 0.3s ease-in-out;
  }
`;
