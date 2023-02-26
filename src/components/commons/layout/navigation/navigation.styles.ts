import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 53px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  padding: 0 232px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 767px;
    padding: 0 132px;
  }
`;

export const MenuItem = styled.div`
  font-weight: 600;
  cursor: pointer;
`;
