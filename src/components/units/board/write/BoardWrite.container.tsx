import { useRef, useState, type ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import {
  type IMutationUpdateBoardArgs,
  type IMutation,
  type IMutationCreateBoardArgs,
  type IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.querys";
import { type IBoardWriteProps } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const fileRef = useRef<HTMLInputElement[] | null[]>([null, null, null]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
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
    props.setContents(value);
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
          const tempFiles = [...files];

          if (tempUrls[index]) {
            tempUrls[index] = event.target?.result;
            tempFiles[index] = file;
          } else {
            tempUrls.push(event.target?.result);
            tempFiles.push(file);
          }

          setImageUrls(tempUrls);
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
          contents: props.contents,
          images: resultUrls,
        },
      },
    });

    void props.router.push(`/boards/${String(result.data?.createBoard._id)}`);
  };

  const onClickEdit = async () => {
    try {
      const resultFiles = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      const resultUrls = resultFiles.map((el) =>
        el.data ? el.data?.uploadFile.url : ""
      );

      const updateBoardInput: any = {};
      if (title) updateBoardInput.title = title;
      if (props.contents) updateBoardInput.contents = props.contents;
      if (resultUrls.length !== 0) updateBoardInput.images = resultUrls;

      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: String(props.router.query.boardId),
        },
      });

      void props.router.push(`/boards/${String(result.data?.updateBoard._id)}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardWriteUI
      imageUrls={imageUrls}
      fileRef={fileRef}
      isEdit={props.isEdit}
      data={props.data}
      contents={props.contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickImage={onClickImage}
      onChangeUploadFile={onChangeUploadFile}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
    />
  );
}
