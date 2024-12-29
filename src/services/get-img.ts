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

  _models: Models;
  _account: Account;

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

  get models(){
    if(!this.isInitialized){
      throw new Error(`GetImg Service is not initialized`);
    }
    return this._models;
  }

  get account(){
    if(!this.isInitialized){
      throw new Error(`GetImg Service is not initialized`);
    }
    return this._account;
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
