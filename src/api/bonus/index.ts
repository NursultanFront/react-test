import { AxiosInstance } from "axios";
import { BasicRest } from "../basic-rest";
import { BonusResult } from "../types";

export class BonusRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  private urlName = "api/v3/ibonus/generalInfo";
  private accessKey = import.meta.env.VITE_ACCESS_KEY;

  getBonus = (token: string) => {
    return this.getRequest<BonusResult>(`${this.urlName}/${token}`, {
      headers: {
        AccessKey: this.accessKey,
      },
    });
  };
}
