import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 767px;
  }
`;

export const MadeBy = styled.div`
  font-size: 24px;
`;
