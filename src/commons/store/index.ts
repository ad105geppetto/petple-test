import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const isLoginState = atom({
  key: `isLoginState/${uuidv4()}`,
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
