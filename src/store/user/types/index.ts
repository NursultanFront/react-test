import { AccessTokenResult } from "../../../api/types";

export interface UserStore {
  isAuth: boolean;
  token: AccessTokenResult["accessToken"];
  loading: boolean;
  error: boolean;
  getToken(lat: number, lon: number): Promise<void>;
}
