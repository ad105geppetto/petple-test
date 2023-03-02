import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const accessTokenState = atom({
  key: `accessTokenState/${uuidv4()}`,
  default: "",
});

export const currentPageState = atom({
  key: `currentPageState`,
  default: 1,
});

export const modalMessageState = atom({
  key: `modalMessageState/${uuidv4()}`,
  default: "",
});
