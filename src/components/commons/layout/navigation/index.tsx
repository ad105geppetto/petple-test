import * as S from "./navigation.styles";
import { useRouter } from "next/router";
import { useState, type MouseEvent } from "react";

const NAVIGATION_MANUS = [
  { name: "홈", page: "/" },
  { name: "자유게시판", page: "/boards" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen);
    void router.push(event.currentTarget.id);
  };
  const onClickHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Wapper>
        <S.HamburgerMenuWrapper onClick={onClickHamburgerMenu}>
          <S.HamburgerMenu>
            <span></span>
            <span></span>
            <span></span>
          </S.HamburgerMenu>
        </S.HamburgerMenuWrapper>
        <S.DropdownMenu>
          {NAVIGATION_MANUS.map((menu, index) => (
            <S.MenuItem
              key={index}
              id={menu.page}
              isOpen={isOpen}
              onClick={onClickMenu}
            >
              {menu.name}
            </S.MenuItem>
          ))}
        </S.DropdownMenu>
      </S.Wapper>
    </S.Container>
  );
}
