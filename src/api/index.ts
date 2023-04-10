import axios from "axios";
import { AccessTokenRest } from "./access";

class Api {
  private readonly endpoint;
  public accessToken;

  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.accessToken = new AccessTokenRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: "http://84.201.188.117",
      headers: {
        "Content-Type": "application/json",
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : "{}")],
    });
  }
}

export const api = new Api();
