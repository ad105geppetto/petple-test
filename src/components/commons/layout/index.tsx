import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

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
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
