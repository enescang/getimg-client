import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams, ImageOrUrl } from '../model.types';

export type StableDiffusionXLGeneralResponse = ImageOrUrl & {
  seed?: number;
  cost?: number;
};

export type StableDiffusionXLTextToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  prompt_2?: string;
  negative_prompt_2?: string;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: string;
  scheduler?: 'euler';
};

export type StableDiffusionXLImageToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  prompt_2?: string;
  negative_prompt_2?: string;
  /**
   * Base64 encoded image that will be used as the a starting point for the generation.
   * Maximum size in each dimension is 1536px.
   */
  image: string;
  strength?: number;
  steps?: number;
  guidance?: number;
  seed?: number;
  scheduler?: 'euler';
};

export type StableDiffusionXLInpaintingParams = BaseModelParams & {
  model?: string; 
  negative_prompt?: string;
  prompt_2?: string;
  negative_prompt_2?: string;
  /**
   * Base64 encoded image that will be inpainted. Parts of the image that are masked out with a mask_image will be repainted according to prompt.
   * Maximum size in each dimension is 1536px.
   */
  image: string;
  /**
   * Base64 encoded image mask. White pixels in the mask will be repainted, while black pixels will be preserved.
   * Maximum size in each dimension is 1536px.
   */
  mask_image: string;
  strength?: number;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: number;
  scheduler?: 'euler';
};

export type StableDiffusionXLIpAdapterParams = BaseModelParams & {
  model?: string;
  adapter: 'content' | 'style' | 'face';
  negative_prompt?: string;
  prompt_2?: string;
  negative_prompt_2?: string;
  /**
   * Base64 encoded image used as a reference for the adapter. 
   * With ip-adapter pipeline image aspect ratio does not need to match the output aspect ratio.
   * Maximum size in each dimension is 1536px.
   */
  image: string;
  strength?: number;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: number;
  scheduler?: 'euler';
};

export interface IStableDiffusionXL {
  textToImage: (
    params: StableDiffusionXLTextToImageParams,
  ) => Promise<HttpClientResponseType<StableDiffusionXLGeneralResponse>>;

  imageToImage: (
    params: StableDiffusionXLImageToImageParams,
  ) => Promise<HttpClientResponseType<StableDiffusionXLGeneralResponse>>;

  inpainting: (
    params: StableDiffusionXLInpaintingParams,
  ) => Promise<HttpClientResponseType<StableDiffusionXLGeneralResponse>>;

  ipAdapter: (
    params: StableDiffusionXLIpAdapterParams,
  ) => Promise<HttpClientResponseType<StableDiffusionXLGeneralResponse>>;
}
