import { atom } from "recoil";

export const imageState = atom<File | undefined>({
  key: "imageState",
  default: undefined,
});
