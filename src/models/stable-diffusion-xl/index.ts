import { HttpClient } from "../../services/http-client";
import { IBaseModel } from "../model.types";
import {IStableDiffusionXL, StableDiffusionXLTextToImageParams } from "./model.types";

export class StableDiffusionXL implements IBaseModel, IStableDiffusionXL {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `stable-diffusion-xl`;
  }

  async textToImage(params: StableDiffusionXLTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post(path, params);
  }
}
