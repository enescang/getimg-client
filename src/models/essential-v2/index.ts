import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  IEssentialV2,
  EssentialV2TextToImageParams,
  EssentialV2TextToImageResponse,
} from './model.types';

export class EssentialV2 implements IBaseModel, IEssentialV2 {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `essential-v2`;
  }

  textToImage(params: EssentialV2TextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<EssentialV2TextToImageResponse>(path, params);
  }
}
