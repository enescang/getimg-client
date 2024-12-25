export type BaseModelParams = {
  prompt: string;
  output_format: 'jpeg' | 'png';
  response_format: 'url' | 'b64';
};

export interface IBaseModel {
  getModelName: () => string;
}

export type ImageOrUrl = { url?: string } | { image?: string };
