import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const accessTokenState = atom({
  key: `accessTokenState/${uuidv4()}`,
  default: "",
});

export const modalMessageState = atom({
  key: `modalMessageState/${uuidv4()}`,
  default: "",
});
