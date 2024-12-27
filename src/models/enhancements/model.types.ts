import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams, ImageOrUrl } from '../model.types';

export type EnhancementsGeneralResponse = ImageOrUrl & {
  cost: number;
};

export type EnhancementsUpscaleParams = Omit<BaseModelParams, 'prompt'> & {
  model?: string;
  /**
   * Base64 encoded image that will be upscaled.
   * 
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  scale?: number;
};

export type EnhancementsFixFacesParams = BaseModelParams & {
  model?: string;
  /**
   * Base64 encoded image that will be upscaled.
   * 
   * Maximum size in each dimension is 1024px.
   */
  image: string;
}

export interface IEnhancements {
  upscale: (
    params: EnhancementsUpscaleParams,
  ) => Promise<HttpClientResponseType<EnhancementsGeneralResponse>>;

  fixFaces: (
    params: EnhancementsFixFacesParams,
  ) => Promise<HttpClientResponseType<EnhancementsGeneralResponse>>;
}
