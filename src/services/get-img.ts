import { Models } from '../models/models';
import { BaseConfig } from './get-img.types';
import { HttpClient } from './http-client';

export class GetimgService {
  private baseConfig: BaseConfig;
  models: Models;

  constructor(params: Partial<BaseConfig>) {
    this.initializeModels(params);
  }

  config(params: Partial<BaseConfig>) {
    this.initializeModels(params);
  }

  private initializeModels(params: Partial<BaseConfig>) {
    if (params.api) {
      this.baseConfig.api = params.api;
    }
    if (params.key) {
      this.baseConfig.key = params.key;
    }
    if (this.baseConfig.api && this.baseConfig.key) {
      const httpClient = new HttpClient(this.baseConfig.api, {
        Authorization: `Bearer ${this.baseConfig.key}`,
      });
      this.models = new Models(httpClient);
    }
  }
}
