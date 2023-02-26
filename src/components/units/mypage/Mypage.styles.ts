import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 50px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 14px 16px;
  border: 1px solid #999;
  border-radius: 3px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  }
`;

export const Submit = styled.button`
  width: 180px;
  height: 52px;
  margin-top: 30px;
  margin-bottom: 400px;
  float: right;
  font-weight: 700;
  background-color: #749c06;
  color: white;
  transition: background-color 0.3s ease-in-out;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    transition: background-color 0.3s ease-in-out;
  }
`;
