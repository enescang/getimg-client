import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  FluxSchnellTextToImageParams,
  FluxSchnellTextToImageResponse,
  IFluxSchnell,
} from './model.types';

export class FluxSchnell implements IBaseModel, IFluxSchnell {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `flux-schnell`;
  }

  async textToImage(params: FluxSchnellTextToImageParams) {
    const path = `${this.getModelName()}/text-to-image`;
    return this.httpClient.post<FluxSchnellTextToImageResponse>(path, params);
  }
}
