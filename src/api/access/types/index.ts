export interface AccessToken {
  idClient: string;
  accessToken: string;
  paramName: string;
  paramValue: string;
  latitude: number;
  longitude: number;
  sourceQuery: number;
}
