import { HttpClient } from '../services/http-client';
import { HttpClientResponseType } from '../services/http-client.types';
import { AccountRetrieveBalanceResponse, IAccount } from './types';

export class Account implements IAccount {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  retrieveBalance() {
    const path = `account/balance`;
    return this.httpClient.get<AccountRetrieveBalanceResponse>(path);
  }
}
