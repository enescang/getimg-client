import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  IStableDiffusionXL,
  StableDiffusionXLImageToImageParams,
  StableDiffusionXLGeneralResponse,
  StableDiffusionXLTextToImageParams,
  StableDiffusionXLInpaintingParams,
  StableDiffusionXLIpAdapterParams,
} from './model.types';

export class StableDiffusionXL implements IBaseModel, IStableDiffusionXL {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `stable-diffusion-xl`;
  }

  textToImage(params: StableDiffusionXLTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<StableDiffusionXLGeneralResponse>(path, params);
  }

  imageToImage(params: StableDiffusionXLImageToImageParams) {
    const path = `${this.getModelName()}/image-to-image`;
    return this.httpClient.post<StableDiffusionXLGeneralResponse>(path, params);
  }

  inpainting(params: StableDiffusionXLInpaintingParams) {
    const path = `${this.getModelName()}/inpaint`;
    return this.httpClient.post<StableDiffusionXLGeneralResponse>(path, params);
  }

  ipAdapter(params:StableDiffusionXLIpAdapterParams) {
    const path = `${this.getModelName()}/ip-adapter`;
    return this.httpClient.post<StableDiffusionXLGeneralResponse>(path, params);
  }
}
