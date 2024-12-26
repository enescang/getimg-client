import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams, ImageOrUrl } from '../model.types';

export type StableDiffusionGeneralResponse = ImageOrUrl & {
  seed?: number;
  cost?: number;
};

export type StableDiffusionTextToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: string;
  scheduler?: 'euler_a' | 'euler' | 'lms' | 'ddim' | 'dpmsolver++' | 'pndm';
};

export type StableDiffusionImageToImageParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  /**
   * Base64 encoded image that will be used as the a starting point for the generation.
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  strength?: number;
  steps?: number;
  guidance?: number;
  seed?: number;
  scheduler?: 'euler_a' | 'euler' | 'lms' | 'ddim' | 'dpmsolver++' | 'pndm';
};

export type StableDiffusionInpaintingParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  /**
   * Base64 encoded image that will be inpainted.
   * Parts of the image that are masked out with a mask_image will be repainted according to prompt.
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  /**
   * Base64 encoded image mask. White pixels in the mask will be repainted, while black pixels will be preserved.
   * Maximum size in each dimension is 1024px.
   */
  mask_image: string;
  strength?: number;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: number;
  scheduler?: 'euler_a' | 'euler' | 'lms' | 'ddim' | 'dpmsolver++' | 'pndm';
};

export type StableDiffusionControlNetParams = BaseModelParams & {
  model?: string;
  controlnet:
    | 'canny-1.1'
    | 'softedge-1.1'
    | 'mlsd-1.1'
    | 'normal-1.1'
    | 'depth-1.1'
    | 'openpose-1.1'
    | 'openpose-full-1.1'
    | 'scribble-1.1'
    | 'lineart-1.1'
    | 'lineart-anime-1.1'
    | 'mediapipeface';
  prompt: string;
  negative_prompt?: string;
  /**
   * Base64 encoded image that will be used as the ControlNet input condition.
   * Control image is automatically resized to fit the width and height.
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  strength?: number;
  width?: number;
  height?: number;
  steps?: number;
  guidance?: string;
  seed?: number;
  scheduler?: 'euler_a' | 'euler' | 'lms' | 'ddim' | 'dpmsolver++' | 'pndm';
};

export type StableDiffusionInstructParams = BaseModelParams & {
  model?: string;
  negative_prompt?: string;
  /**
   * Base64 encoded image that edit according to prompt instruction.
   *
   * Maximum size in each dimension is 1024px.
   */
  image: string;
  image_guidance?: number;
  steps?: number;
  guidance?: string;
  seed?: number;
  scheduler?: 'euler_a' | 'euler' | 'lms' | 'ddim' | 'dpmsolver++';
};

export interface IStableDiffusion {
  textToImage: (
    params: StableDiffusionTextToImageParams,
  ) => Promise<HttpClientResponseType<StableDiffusionGeneralResponse>>;

  imageToImage: (
    params: StableDiffusionImageToImageParams,
  ) => Promise<HttpClientResponseType<StableDiffusionGeneralResponse>>;

  controlNet: (
    params: StableDiffusionControlNetParams,
  ) => Promise<HttpClientResponseType<StableDiffusionGeneralResponse>>;

  inpainting: (
    params: StableDiffusionInpaintingParams,
  ) => Promise<HttpClientResponseType<StableDiffusionGeneralResponse>>;

  instruct: (
    params: StableDiffusionInstructParams,
  ) => Promise<HttpClientResponseType<StableDiffusionGeneralResponse>>;
}
