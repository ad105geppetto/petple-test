import { useRouter } from "next/router";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";
import { useState } from "react";

export default function BoardWritePage() {
  const router = useRouter();
  const [contents, setContents] = useState("");

  return (
    <BoardWrite
      isEdit={false}
      router={router}
      contents={contents}
      setContents={setContents}
    />
  );
}
