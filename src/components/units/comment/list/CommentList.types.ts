import { type IQuery } from "../../../../commons/types/generated/types";
import { type Dispatch, type SetStateAction } from "react";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  editCommentId: string;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setEditCommentId: Dispatch<SetStateAction<string>>;
  onClickEdit: (boardCommentId: string) => () => void;
  onClickDelete: (boardCommentId: string) => () => void;
}
