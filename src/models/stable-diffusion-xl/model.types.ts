import { HttpClientResponseType } from "../../services/http-client.types";
import { BaseModelParams, ImageOrUrl } from "../model.types";

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

export type StableDiffusionXLTextToImageResponse = ImageOrUrl & {
  seed?: number;
  cost?: number;
}

export interface IStableDiffusionXL {
  textToImage: (
    params: StableDiffusionXLTextToImageParams,
  ) => Promise<HttpClientResponseType<StableDiffusionXLTextToImageResponse>>;

}
