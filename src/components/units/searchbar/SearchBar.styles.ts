import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  position: relative;
  margin-left: 10px;

  @media screen and (max-width: 767px) {
    margin: 0px 30px;
  }
`;

export const SearchLogo = styled(SearchOutlined)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const SearchBar = styled.input`
  width: 500px;
  height: 40px;
  padding: 5px 30px;
  margin: 20px 0px;
  border: 1px solid #000;
  border-radius: 15px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
