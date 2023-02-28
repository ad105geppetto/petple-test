import { type NextRouter } from "next/router";
import { type ChangeEvent, type MutableRefObject } from "react";
import { type IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
  router: NextRouter;
  contents: string;
  setContents: any;
}

export interface IBoardWriteUIProps {
  imageUrls: string[];
  fileRef: MutableRefObject<HTMLInputElement[] | null[]>;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  contents: string;
  writer: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (value: string) => void;
  onClickImage: (index: number) => () => void;
  onChangeUploadFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
}
