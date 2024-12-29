import { Account } from '../account';
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
  private isInitialized = false;

  private _models: Models;
  private _account: Account;

  constructor(params: Partial<BaseConfig>) {
    this.baseConfig = {} as BaseConfig;
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
      this.isInitialized = true;
      this.httpClient = httpClient;
      this._models = new Models(httpClient);
      this._account = new Account(httpClient);
    }
  }

  get models() {
    this.checkInitializeStatus();
    return this._models;
  }

  get account() {
    this.checkInitializeStatus();
    return this._account;
  }

  listAllModels(params?: ListAllModelsParams) {
    const path = `/models`;
    return this.httpClient.get<ListAllModelsResponse>(path, params);
  }

  retrieveModel(params: RetrieveModelParams) {
    const path = `/models/${params.id}`;
    return this.httpClient.get<RetrieveModelResponse>(path);
  }

  private checkInitializeStatus() {
    if (!this.isInitialized) {
      // Check if the API URL or Authorization Key is missing
      if (!this.baseConfig?.api) {
        console.error('API URL is missing. Use getimg.config({ api: "YOUR_API_URL" }); to set it.');
        throw new Error('GetImg Service Initialization Error: API URL is required.');
      }

      if (!this.baseConfig?.key) {
        console.error(
          'Authorization key is missing. Use getimg.config({ key: "YOUR_API_KEY" }); to set it.',
        );
        throw new Error('GetImg Service Initialization Error: API key is required.');
      }

      // Catch-all for any unhandled errors
      console.error('Unhandled error. Please create an issue on GitHub.');
      throw new Error('GetImg Service Initialization Error: Unhandled case.');
    }

    return true;
  }
}
