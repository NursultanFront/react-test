import axios from "axios";
import { AccessTokenRest } from "./access";
import { BonusRest } from "./bonus";

class Api {
  private readonly endpointClient;
  private readonly endpointBonus;
  public accessToken;
  public bonusToken;

  public constructor() {
    this.endpointClient = Api.createEndpointClient();
    this.endpointBonus = Api.createEndpointBonus();
    this.accessToken = new AccessTokenRest(this.endpointClient);
    this.bonusToken = new BonusRest(this.endpointBonus);
  }

  private static createEndpointClient() {
    return axios.create({
      baseURL: import.meta.env.VITE_ACCESS_TOKEN_API,
      headers: {
        "Content-Type": "application/json",
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : "{}")],
    });
  }

  private static createEndpointBonus() {
    return axios.create({
      baseURL: import.meta.env.VITE_BONUS_TOKEN_API,
      headers: {
        "Content-Type": "application/json",
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : "{}")],
    });
  }
}

export const api = new Api();
