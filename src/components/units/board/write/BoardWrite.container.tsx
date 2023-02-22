import { useRef, useState, type ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import {
  type IMutation,
  type IMutationCreateBoardArgs,
  type IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./BoardWrite.querys";

export default function BoardWrite() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement[] | null[]>([null, null, null]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [files, setFiles] = useState<File[]>([]);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (value: string) => {
    setContents(value);
  };

  const onClickImage = (index: number) => () => {
    fileRef.current[index]?.click();
  };

  const onChangeUploadFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file?.size) {
        alert("파일이 없습니다.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다.(제한: 5MB)");
        return;
      }

      if (
        !file.type.includes("jpeg") &&
        !file.type.includes("jpg") &&
        !file.type.includes("png")
      ) {
        alert("이미지 파일 확장자는 png 또는 jpg, jpeg 여야 합니다.");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    const resultFiles = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    const resultUrls = resultFiles.map((el) =>
      el.data ? el.data?.uploadFile.url : ""
    );

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: resultUrls,
        },
      },
    });

    void router.push(`/boards/${String(result.data?.createBoard._id)}`);
  };
  return (
    <BoardWriteUI
      imageUrls={imageUrls}
      fileRef={fileRef}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickImage={onClickImage}
      onChangeUploadFile={onChangeUploadFile}
      onClickSubmit={onClickSubmit}
    />
  );
}
