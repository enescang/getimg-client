import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  IStableDiffusion,
  StableDiffusionImageToImageParams,
  StableDiffusionGeneralResponse,
  StableDiffusionTextToImageParams,
  StableDiffusionInpaintingParams,
  StableDiffusionControlNetParams,
  StableDiffusionInstructParams,
} from './model.types';

export class StableDiffusion implements IBaseModel, IStableDiffusion {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `stable-diffusion`;
  }

  textToImage(params: StableDiffusionTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<StableDiffusionGeneralResponse>(path, params);
  }

  imageToImage(params: StableDiffusionImageToImageParams) {
    const path = `${this.getModelName()}/image-to-image`;
    return this.httpClient.post<StableDiffusionGeneralResponse>(path, params);
  }

  controlNet(params: StableDiffusionControlNetParams) {
    const path = `${this.getModelName()}/controlnet`;
    return this.httpClient.post<StableDiffusionGeneralResponse>(path, params);
  }

  inpainting(params: StableDiffusionInpaintingParams) {
    const path = `${this.getModelName()}/inpaint`;
    return this.httpClient.post<StableDiffusionGeneralResponse>(path, params);
  }

  instruct(params: StableDiffusionInstructParams) {
    const path = `${this.getModelName()}/instruct`;
    return this.httpClient.post<StableDiffusionGeneralResponse>(path, params);
  }
}
