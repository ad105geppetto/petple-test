import * as S from "./banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};

export default function LayoutBanner() {
  return (
    <S.Wapper>
      <Slider {...settings}>
        <S.SliderItem>
          <S.SliderTitle>
            ALOE TIKI THAI
            <br />
            DECORATION
          </S.SliderTitle>
          <S.SliderText>나만의 반려 식물 자랑해보세요!</S.SliderText>
          <S.SliderImage src="1.png" />
        </S.SliderItem>
        <S.SliderItem>
          <S.SliderTitle>
            GASTERIA
            <br />
            THE BEST CHOICE
          </S.SliderTitle>
          <S.SliderText>나와 맞는 반려 식물 찾아보세요!</S.SliderText>
          <S.SliderImage src="2.png" />
        </S.SliderItem>
      </Slider>
    </S.Wapper>
  );
}
