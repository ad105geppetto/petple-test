import styled from "@emotion/styled";

export const Wapper = styled.div`
  height: calc(100vh - 173px);

  @media screen and (max-width: 767px) {
    height: 350px;
  }
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: calc(100vh - 173px);

  @media screen and (max-width: 767px) {
    height: 350px;
  }
`;

export const SliderTitle = styled.h1`
  position: absolute;
  margin-top: 162px;
  left: 10%;
  font-size: 82px;

  @media screen and (max-width: 767px) {
    margin-top: 122px;
    font-size: 32px;
    color: #f2f2f5;
    text-shadow: #000000 1px 0 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 142px;
    font-size: 62px;
  }
`;

export const SliderText = styled.h3`
  position: absolute;
  margin-top: 402px;
  left: 10%;
  font-size: 30px;

  @media screen and (max-width: 767px) {
    margin-top: 228px;
    font-size: 18px;
    text-shadow: #f2f2f5 1px 0 1px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 328px;
    font-size: 20px;
  }
`;
