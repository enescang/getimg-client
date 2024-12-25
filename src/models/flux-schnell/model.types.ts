import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams } from '../model.types';

export type FluxSchnellTextToImageParams = BaseModelParams & {
  width?: number;
  height?: number;
  steps?: number;
  seed?: number;
};

export type FluxSchnellTextToImageResponse = {
  seed?: number;
  cost?: number;
} & (
  | {
      url?: string;
    }
  | {
      image?: string;
    }
);

export interface IFluxSchnell {
  textToImage: (
    params: FluxSchnellTextToImageParams,
  ) => Promise<HttpClientResponseType<FluxSchnellTextToImageResponse>>;
}
