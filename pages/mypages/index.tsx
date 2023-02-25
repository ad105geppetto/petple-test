import Mypage from "../../src/components/units/mypage/Mypage.container";
import { accessTokenState } from "../../src/commons/store";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MypagesPage() {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      void router.push("/login");
    }
  }, [accessToken]);

  return <>{accessToken ? <Mypage /> : ""}</>;
}
