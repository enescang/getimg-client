import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  ISeedreamV4,
  SeedreamV4TextToImageParams,
  SeedreamV4TextToImageResponse,
} from './model.types';

export class SeedreamV4 implements IBaseModel, ISeedreamV4 {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `seedream-v4`;
  }

  textToImage(params: SeedreamV4TextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<SeedreamV4TextToImageResponse>(path, params);
  }
}
