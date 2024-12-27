import { Models } from '../models';
import {
  BaseConfig,
  ListAllModelsParams,
  ListAllModelsResponse,
  RetrieveModelParams,
  RetrieveModelResponse,
} from './get-img.types';
import { HttpClient } from './http-client';

export class GetimgService {
  private baseConfig: BaseConfig;
  private httpClient: HttpClient;

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
      this.httpClient = httpClient;
      this.models = new Models(httpClient);
    }
  }

  listAllModel(params: ListAllModelsParams) {
    const path = `/models`;
    return this.httpClient.get<ListAllModelsResponse>(path, params);
  }

  retrieveModel(params: RetrieveModelParams) {
    const path = `/models/${params.id}`;
    return this.httpClient.get<RetrieveModelResponse>(path);
  }
}
