import * as S from "./navigation.styles";
import { useRouter } from "next/router";
import { type MouseEvent } from "react";

const NAVIGATION_MANUS = [
  { name: "홈", page: "/" },
  { name: "자유게시판", page: "/boards" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigation() {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };
  return (
    <S.Container>
      <S.Wapper>
        {NAVIGATION_MANUS.map((menu, index) => (
          <div key={index}>
            <S.MenuItem id={menu.page} onClick={onClickMenu}>
              {menu.name}
            </S.MenuItem>
          </div>
        ))}
      </S.Wapper>
    </S.Container>
  );
}
