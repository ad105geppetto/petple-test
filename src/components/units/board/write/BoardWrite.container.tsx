import { useRef, useState, type ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import {
  type IMutationUpdateBoardArgs,
  type IMutation,
  type IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.querys";
import { type IBoardWriteProps } from "./BoardWrite.types";
import axios from "axios";
import { FETCH_BOARD } from "../detail/BoardDetail.querys";
import { modalMessageState } from "../../../../commons/store";
import { useSetRecoilState } from "recoil";

export default function BoardWrite(props: IBoardWriteProps) {
  const fileRef = useRef<HTMLInputElement[] | null[]>([null, null, null]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const setModalMessage = useSetRecoilState(modalMessageState);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD, {
    refetchQueries: () => [
      {
        query: FETCH_BOARD,
        variables: { boardId: String(props.router.query.boardId) },
      },
    ],
  });

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
        setIsOpen(true);
        setModalMessage("파일이 없습니다.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setIsOpen(true);
        setModalMessage("파일 용량이 너무 큽니다.(제한: 5MB)");
        return;
      }

      if (
        !file.type.includes("jpeg") &&
        !file.type.includes("jpg") &&
        !file.type.includes("png")
      ) {
        setIsOpen(true);
        setModalMessage("이미지 파일 확장자는 png 또는 jpg, jpeg 여야 합니다.");
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
    if (!writer) {
      setIsOpen(true);
      setModalMessage("작성자를 입력해주세요.");
      return;
    }
    if (!password) {
      setIsOpen(true);
      setModalMessage("비밀번호를 입력해주세요.");
      return;
    }
    if (!title) {
      setIsOpen(true);
      setModalMessage("제목을 입력해주세요.");
      return;
    }
    if (!props.contents) {
      setIsOpen(true);
      setModalMessage("내용을 입력해주세요.");
      return;
    }

    try {
      const resultFiles = await Promise.all(
        files.map((el) => {
          const formData = new FormData();
          formData.append("image", el);
          return axios.post("http://localhost:8080/upload", formData);
        })
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
    } catch (error) {
      if (error instanceof Error) {
        setIsOpen(true);
        setModalMessage("잘못된 요청입니다.");
      }
    }
  };

  const onClickEdit = async () => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!title && !props.contents && !isChangedFiles) {
      setIsOpen(true);
      setModalMessage("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      setIsOpen(true);
      setModalMessage("비밀번호를 확인해주세요.");
      return;
    }

    try {
      const resultFiles = await Promise.all(
        files.map((el) => {
          const formData = new FormData();
          formData.append("image", el);
          return axios.post("http://localhost:8080/upload", formData);
        })
      );
      const resultUrls = resultFiles.map((el) =>
        el.data ? el.data?.uploadFile.url : ""
      );

      const updateBoardInput: any = {};
      if (title) updateBoardInput.title = title;
      if (props.contents) updateBoardInput.contents = props.contents;
      if (isChangedFiles) updateBoardInput.images = resultUrls;

      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: String(props.router.query.boardId),
        },
      });

      void props.router.push(`/boards/${String(result.data?.updateBoard._id)}`);
    } catch (error) {
      if (error instanceof Error) {
        setIsOpen(true);
        setModalMessage("잘못된 요청입니다.");
      }
    }
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <BoardWriteUI
      imageUrls={imageUrls}
      fileRef={fileRef}
      isEdit={props.isEdit}
      data={props.data}
      contents={props.contents}
      writer={writer}
      isOpen={isOpen}
      onCancel={onCancel}
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
