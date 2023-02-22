import { type ChangeEvent, type MutableRefObject } from "react";

export interface IBoardWriteProps {
  imageUrls: string[];
  fileRef: MutableRefObject<HTMLInputElement[] | null[]>;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onClickImage: (index: number) => () => void;
  onChangeUploadFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
