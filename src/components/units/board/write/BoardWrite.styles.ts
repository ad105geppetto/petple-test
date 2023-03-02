import styled from "@emotion/styled";

export const H2 = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (max-width: 767px) {
    font-size: 26px;
    margin: 30px 0px;
  }
`;

export const TitleWrapperWithNonMember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TitleInputWithNonMember = styled.input`
  width: 500px;
  padding: 12.5px 15px;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 8.5px 15px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 372px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (max-width: 767px) {
    margin: 0px 30px 16px 30px;
  }
`;

export const H4 = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 12.5px 15px;

  @media screen and (max-width: 767px) {
    padding: 8.5px 15px;
  }
`;

export const ContentsWrapper = styled.div`
  padding-bottom: 60px;

  @media screen and (max-width: 767px) {
    margin: 0px 30px 50px 30px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 77px;
  @media screen and (max-width: 767px) {
    margin: 0px 30px 50px 30px;
  }
`;

export const ImageUploadGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const ImageUploadWrapper = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

export const ImageUpload = styled.div`
  width: 80px;
  height: 80px;
  background: #999;
  text-align: center;
  cursor: pointer;
`;

export const TextPlus = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const TextUpload = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 52px;
  margin-bottom: 50px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #749c06;
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
