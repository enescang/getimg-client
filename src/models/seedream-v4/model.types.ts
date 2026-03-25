import { HttpClientResponseType } from '../../services/http-client.types';
import { ImageOrUrl } from '../model.types';

export type SeedreamV4TextToImageParams = {
  prompt: string;
  aspect_ratio?: '1:1' | '16:9' | '9:16' | '3:2' | '2:3' | '3:4' | '4:3' | '21:9';
  seed?: number;
  response_format?: 'url' | 'b64';
};

export type SeedreamV4TextToImageResponse = {
  seed?: number;
  cost?: number;
} & ImageOrUrl;

export interface ISeedreamV4 {
  textToImage: (
    params: SeedreamV4TextToImageParams,
  ) => Promise<HttpClientResponseType<SeedreamV4TextToImageResponse>>;
}
