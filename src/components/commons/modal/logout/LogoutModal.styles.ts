import styled from "@emotion/styled";
import { CheckOutlined } from "@ant-design/icons";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 20%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #79a206;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
    width: calc(100% - 30px);
  }
`;

export const ModalHead = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckLogo = styled(CheckOutlined)`
  color: #ffffff;
`;

export const ModalBody = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #ffffff;
`;

export const TitleBox = styled.div`
  text-align: center;
  width: 100%;
  margin: 20px 0px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ModalFoot = styled.div`
  width: 100%;
  height: 50px;
`;

interface ConfirmProps {
  isLogout: boolean;
}

export const Confirm = styled.div`
  display: inline-flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  float: left;
  color: #ffffff;
  cursor: pointer;
  &:first-of-type {
    border-right: ${(props: ConfirmProps) =>
      props.isLogout ? "" : "1px solid #ffffff"};
  }
`;
