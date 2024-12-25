import { HttpClientResponseType } from '../../services/http-client.types';
import { BaseModelParams } from '../model.types';

export type EssentialV2TextToImageParams = BaseModelParams & {
  style?: 'photorealism' | 'anime' | 'art';
  aspect_ratio?: '1:1' | '4:5' | '5:4' | '2:3' | '3:2' | '4:7' | '7:4';
};

export type EssentialV2TextToImageResponse = {
  cost?: number;
} & (
  | {
      url?: string;
    }
  | {
      image?: string;
    }
);

export interface IEssentialV2 {
  textToImage: (
    params: EssentialV2TextToImageParams,
  ) => Promise<HttpClientResponseType<EssentialV2TextToImageResponse>>;
}
