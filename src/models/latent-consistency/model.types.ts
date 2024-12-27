import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams, ImageOrUrl } from '../model.types';

export type LatentConsistencyGeneralResponse = ImageOrUrl & {
  seed?: number;
  cost?: number;
}

export type LatentConsistencyTextToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  width?: number;
  height?: number;
  steps?: number;
  seed?: number;
};

export type LatentConsistencyImageToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  /**
   * Base64 encoded image that will be used as the a starting point for the generation.
   * 
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  strength?: string;
  steps?: number;
  seed?: number;
}

export interface ILatentConsistency {
  textToImage: (
    params: LatentConsistencyTextToImageParams,
  ) => Promise<HttpClientResponseType<LatentConsistencyGeneralResponse>>;

  imageToImage: (
    params: LatentConsistencyImageToImageParams,
  ) => Promise<HttpClientResponseType<LatentConsistencyGeneralResponse>>;
}
