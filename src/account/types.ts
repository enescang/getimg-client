import { HttpClientResponseType } from '../services/http-client.types';

export type AccountRetrieveBalanceResponse = {
  /**
   * Balance amount returned in USD.
   */
  amount: number;
};

export interface IAccount {
  retrieveBalance: () => Promise<HttpClientResponseType<AccountRetrieveBalanceResponse>>;
}
