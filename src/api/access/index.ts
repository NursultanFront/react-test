import { AxiosInstance } from "axios";
import { BasicRest } from "../basic-rest";
import { type AccessToken } from "./types";
import { AccessTokenResult } from "../types";

export class AccessTokenRest extends BasicRest {
  private urlName = "api/v3/clients/accesstoken";
  private accessKey = "891cf53c-01fc-4d74-a14c-592668b7a03c";
  private ClientID = "2c44d8c2-c89a-472e-aab3-9a8a29142315";
  private DeviceID = "7db72635-fd0a-46b9-813b-1627e3aa02ea";

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  getToken = () => {
    return this.postRequest<AccessTokenResult>(`${this.urlName}`, {
      accessToken: this.accessKey,
      idClient: this.ClientID,
      latitude: 0,
      longitude: 0,
      paramName: "device",
      paramValue: this.DeviceID,
      sourceQuery: 0,
    } as AccessToken);
  };
}
