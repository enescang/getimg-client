import { HttpClient } from '../../services/http-client';
import { IBaseModel } from '../model.types';
import {
  IEnhancements,
  EnhancementsUpscaleParams,
  EnhancementsGeneralResponse,
  EnhancementsFixFacesParams,
} from './model.types';

export class Enhancements implements IBaseModel, IEnhancements {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getModelName() {
    return `enhancements`;
  }

  upscale(params: EnhancementsUpscaleParams) {
    const path = `${this.getModelName()}/upscale`;
    return this.httpClient.post<EnhancementsGeneralResponse>(path, params);
  }

  fixFaces(params: EnhancementsFixFacesParams) {
    const path = `${this.getModelName()}/face-fix`;
    return this.httpClient.post<EnhancementsGeneralResponse>(path, params);
  }
}
