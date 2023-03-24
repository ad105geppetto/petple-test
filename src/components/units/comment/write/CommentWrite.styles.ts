import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-top: 40px;
  border-top: 1px solid #999;

  @media screen and (max-width: 767px) {
    padding: 40px 30px 0px 30px;
  }
`;

export const H5 = styled.h5`
  font-size: 17px;
  padding-left: 10px;
`;

interface IProps {
  isEdit: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: ${(props: IProps) => (props.isEdit ? "0" : "0px 30px 0px 30px")};
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-right: 10px;
`;

export const UserInput = styled.input`
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

export const CommentWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    padding: ${(props: IProps) => (props.isEdit ? "0" : "0px 30px 0px 30px")};
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 100px;
  padding: 0px 21px 50px 21px;
  &:focus {
    outline: none;
  }
`;

export const CommentLimit = styled.div`
  position: absolute;
  bottom: 16px;
  left: 21px;

  @media screen and (max-width: 767px) {
    left: ${(props: IProps) => (props.isEdit ? "21px" : "51px")};
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  width: 91px;
  height: 52px;
  bottom: 0px;
  right: 0px;
  background-color: #749c06;
  color: #ffffff;
  border: 2px solid #749c06;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    border: 2px solid #000000;
  }

  @media screen and (max-width: 767px) {
    right: ${(props: IProps) => (props.isEdit ? "0px" : "30px")};
  }
`;
