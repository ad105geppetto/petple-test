import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import Side from "./side";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1024px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 767px;
  }
`;

export const SideBodyWrapper = styled.div`
  display: flex;
`;

export const Body = styled.div`
  width: 70%;
  margin-left: 60px;
  margin-top: 64px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 65%;
    margin-left: 0px;
  }
`;
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      {router.asPath === "/" && <LayoutBanner />}
      <Container>
        <Wrapper>
          {router.pathname === "/mypages" ? (
            <SideBodyWrapper>
              <Side />
              <Body>{props.children}</Body>
            </SideBodyWrapper>
          ) : (
            <>{props.children}</>
          )}
        </Wrapper>
      </Container>
      <LayoutFooter />
    </>
  );
}
