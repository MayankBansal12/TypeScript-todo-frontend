import { atom } from "recoil";

export interface AuthState {
  token: string | null;
  username: string | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: { token: null, username: null },
});
