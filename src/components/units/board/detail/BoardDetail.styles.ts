import styled from "@emotion/styled";

export const SliderWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  width: 677px;
  height: 500px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 350px;
    height: 300px;
  }
`;

export const ImageText = styled.div`
  position: absolute;
  top: 60%;
  left: 25%;
  font-size: 100px;
  color: #999;

  @media screen and (max-width: 767px) {
    left: 20%;
    font-size: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    left: 25%;
    font-size: 80px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  margin-bottom: 32px;
  border-bottom: 1px solid #999;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserWrapper = styled.div`
  padding-left: 17px;
`;

export const Writer = styled.div`
  font-weight: 700;
  padding-bottom: 4px;
`;

export const Date = styled.div`
  font-size: 12px;
`;

export const BoardTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 20px;
`;

export const BoardContents = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #999;
`;

export const ButtonItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const ButtonItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 52px;
  margin: 0 12px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #999;
  border-radius: 3px;
  background-color: #749c06;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;
    transition: background-color 0.3s ease-in-out;
  }
`;
