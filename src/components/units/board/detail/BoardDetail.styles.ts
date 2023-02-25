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
`;

export const ImageText = styled.div`
  position: absolute;
  top: 60%;
  left: 25%;
  font-size: 100px;
  color: #999;
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
  font-weight: 400;
  border: 1px solid #999;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #88e25d;
    color: #ffffff;
    border: 1px solid #88e25d;
  }
`;
