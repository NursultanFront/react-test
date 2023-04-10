import { AxiosInstance } from "axios";
import { BasicRest } from "../../basic-rest";
import { BonusResult } from "../../types";

class BonusRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  private urlName = ":5003/api/v3/ibonus/generalInfo";

  getBonus = (token: string) => {
    return this.getRequest<BonusResult>(`${this.urlName}/${token}`);
  };
}
