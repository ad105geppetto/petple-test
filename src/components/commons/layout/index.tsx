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
  width: 1156px;
`;

export const SideBodyWrapper = styled.div`
  display: flex;
`;

export const Body = styled.div`
  width: 80%;
  margin-left: 60px;
  margin-top: 64px;
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
          {router.asPath === "/mypages" ? (
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
