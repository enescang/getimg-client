import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  ILatentConsistency,
  LatentConsistencyGeneralResponse,
  LatentConsistencyImageToImageParams,
  LatentConsistencyTextToImageParams,
} from './model.types';

export class LatentConsistency implements IBaseModel, ILatentConsistency {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `latent-consistency`;
  }

  textToImage(params: LatentConsistencyTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<LatentConsistencyGeneralResponse>(path, params);
  }

  imageToImage(params: LatentConsistencyImageToImageParams) {
    const path = `${this.getModelName()}/image-to-image`;
    return this.httpClient.post<LatentConsistencyGeneralResponse>(path, params);
  }
}
