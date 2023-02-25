import styled from "@emotion/styled";

export const H2 = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const TitleWrapperWithNonMember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleInputWithNonMember = styled.input`
  width: 550px;
  padding: 12.5px 15px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

export const H4 = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 12.5px 15px;
`;

export const ContentsWrapper = styled.div`
  margin-bottom: 60px;
`;

export const ImageUploadGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 77px;
`;

export const ImageUploadWrapper = styled.div`
  margin-right: 20px;
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
