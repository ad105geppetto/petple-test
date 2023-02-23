import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";

export interface ICommentWriteProps {
  isEdit: boolean;
  boardCommentId: string;
  editWriter: string;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setEditCommentId: Dispatch<SetStateAction<string>>;
}

export interface ICommentWriteUIProps {
  writer: string;
  password: string;
  contents: string;
  isEdit: boolean;
  editWriter: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}
