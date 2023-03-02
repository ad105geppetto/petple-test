import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0px 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 767px;
    margin: 0px 30px;
  }
`;

export const Title = styled.h2`
  padding: 20px 0;
  margin: 50px 0;
  font-size: 42px;
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 129px;
  margin-bottom: 150px;

  @media screen and (max-width: 767px) {
    grid-column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ItemsGroup = styled.div`
  height: 229px;

  @media screen and (max-width: 767px) {
    height: 180px;
    &:nth-of-type(n + 5):nth-of-type(-n + 8) {
      display: none;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &:nth-of-type(n + 7):nth-of-type(-n + 8) {
      display: none;
    }
  }
`;

export const ItemsImages = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemsTitle = styled.p`
  font-size: 24px;
`;

export const ItemsPrice = styled.div`
  font-size: 24px;
`;

export default function Home() {
  const images = new Array(8).fill({
    src: "https://htmldemo.net/lukani/lukani/assets/img/product/product1.jpg",
    alt: "image",
  });

  return (
    <Container>
      <Wapper>
        <Title>Our Products</Title>
        <ItemsWrapper>
          {images.map((image, index) => (
            <ItemsGroup key={index}>
              <ItemsImages src={image.src} alt={image.alt} />
              <ItemsTitle>Commodo Augue Nisi</ItemsTitle>
              <ItemsPrice>10,000원</ItemsPrice>
            </ItemsGroup>
          ))}
        </ItemsWrapper>
      </Wapper>
    </Container>
  );
}
