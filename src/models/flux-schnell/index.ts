import { HttpClient } from "../../services/http-client";
import { IBaseModel } from "../model.types";
import { FluxSchnellTextToImageParams, IFluxSchnell } from "./model.types";

export class FluxSchnell implements IBaseModel, IFluxSchnell {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `flux-schnell`;
  }

  async textToImage(params: FluxSchnellTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post(path, params);
  }
}
