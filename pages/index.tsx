import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1156px;
`;

export const Title = styled.h2`
  padding: 20px 0;
  margin: 50px 0;
  font-size: 42px;
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 129px;
  margin-bottom: 150px;
`;

export const ItemsGroup = styled.div`
  height: 229px;
`;

export const ItemsImages = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemsTitle = styled.div`
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
