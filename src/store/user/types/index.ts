import { AccessTokenResult } from "../../../api/types";

export interface UserStore {
  isAuth: boolean;
  token: AccessTokenResult["accessToken"];
  loading: boolean;
  error: boolean;
  getToken(): Promise<void>;
}
