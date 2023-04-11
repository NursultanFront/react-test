import { AxiosInstance } from "axios";
import { BasicRest } from "../basic-rest";
import { type AccessToken } from "./types";
import { AccessTokenResult } from "../types";

export class AccessTokenRest extends BasicRest {
  private urlName = "api/v3/clients/accesstoken";
  private accessKey = import.meta.env.VITE_ACCESS_KEY;
  private ClientID = import.meta.env.VITE_CLIENT_ID;
  private DeviceID = import.meta.env.VITE_DEVICE_ID;

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  getToken = () => {
    return this.postRequest<AccessTokenResult>(
      `${this.urlName}`,
      {
        accessToken: "",
        idClient: this.ClientID,
        latitude: 0,
        longitude: 0,
        paramName: "device",
        paramValue: this.DeviceID,
        sourceQuery: 0,
      },
      {
        headers: {
          AccessKey: this.accessKey,
        },
      }
    );
  };
}
