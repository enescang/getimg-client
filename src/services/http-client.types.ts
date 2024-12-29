type GenericResponseType<T, T2> = {
  data?: T;
  error?: T2;
};

export type BaseModelErrorResponse = {
  type?: 'invalid_request_error' | 'api_error';
  code?: string;
  message?: string;
  param?: string;
  doc_url?: string;
};

export type HttpClientResponseType<T> = Promise<GenericResponseType<T, BaseModelErrorResponse>>;
