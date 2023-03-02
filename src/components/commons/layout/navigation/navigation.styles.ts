import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  padding: 0 232px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const HamburgerMenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #749c06;
    padding: 10px 0px;
    cursor: pointer;
  }
`;

export const HamburgerMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  margin-left: 20px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
  }
`;

export const DropdownMenu = styled.div`
  @media screen and (max-width: 767px) {
    display: "";
    position: absolute;
    width: 100%;
    top: 124px;
    z-index: 1;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 767px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    margin-bottom: 10px;
  }
`;

interface IMenuItemProps {
  isOpen: boolean;
  onClick: (event: any) => void;
}

export const MenuItem = styled.div`
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: ${(props: IMenuItemProps) => (props.isOpen ? "" : "none")};
    padding: 10px 0px;
    background-color: #ffffff;
    border-bottom: 1px solid black;
    text-align: center;
  }
`;
