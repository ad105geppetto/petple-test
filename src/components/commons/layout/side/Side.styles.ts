import styled from "@emotion/styled";
import { UserOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 20%;
  padding: 0px 50px;
  margin-top: 64px;
`;

export const Mypage = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #999;
`;

export const UserIcon = styled(UserOutlined)`
  padding: 8px 5px 2px 0px;
  margin: 5px 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h4`
  font-weight: 700;
  padding: 5px 0px;
  margin: 5px 0px;
`;

export const SubTitle = styled.h4`
  font-weight: 700;
  padding: 5px 0px;
  margin: 5px 0px 5px 21px;
`;
