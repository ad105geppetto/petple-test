import styled from "@emotion/styled";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const Wrapper = styled.div`
  margin: 0px;
`;

export const CommentWriteWrapper = styled.div`
  margin-top: 40px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0;
  margin: 20px 0;
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
  margin-bottom: 2px;
`;

export const Comment = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Date = styled.div`
  font-size: 12px;
`;

export const IconWrapper = styled(Space)`
  position: relative;
`;

export const DeleteIcon = styled(CloseOutlined)`
  position: absolute;
  top: 20px;
  right: 0px;
  cursor: pointer;
`;
export const EditIcon = styled(EditOutlined)`
  position: absolute;
  top: 20px;
  right: 31px;
  cursor: pointer;
`;
