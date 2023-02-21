import styled from "@emotion/styled";
import { type IClickButtonProps } from "./BoardList.types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1156px;
`;

export const SearchWrapper = styled.div`
  background-color: yellow;
  margin-bottom: 64px;
`;

export const BoardListWrapper = styled.div`
  border-top: 2px solid black;
`;

export const BoardItemsTop = styled.div`
  border-bottom: 1px solid #999;
  font-weight: 600;
  padding: 15px 0;
`;

export const BoardItems = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  cursor: pointer;
  &:last-child {
    border-bottom: 2px solid black;
  }
`;

export const ItemNumber = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 10%;
  text-align: center;
`;

export const ItemTitleTop = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  text-align: center;
`;

export const ItemTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  text-align: left;
`;

export const ItemContents = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  text-align: center;
`;

export const ItemDate = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  text-align: center;
`;

export const BoardPageWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const BoardPage = styled.div`
  margin-top: 31px;
  text-align: center;
`;

export const PageButton = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #999;
  border-left: 0;
  vertical-align: middle;
  line-height: 100%;
  padding-top: 4px;
  font-size: 1.2rem;
  color: ${(props: IClickButtonProps) =>
    props.isActive ? "#88E25D" : "default"};
  cursor: pointer;
  &:first-of-type {
    border-left: 1px solid #999;
  }
`;

export const PageMoveButton = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #999;
  border-left: 0;
  vertical-align: middle;
  line-height: 100%;
  padding-top: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  &:first-of-type {
    border-left: 1px solid #999;
  }
`;

export const Register = styled.div`
  position: absolute;
  padding: 4px 20px;
  top: 1px;
  left: 88%;
  border: 1px solid #999;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #88e25d;
    color: #ffffff;
    border: none;
  }
`;
