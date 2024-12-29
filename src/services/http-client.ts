import axios, { AxiosInstance, AxiosError } from 'axios';
import { HttpClientResponseType } from './http-client.types';

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.client = axios.create({ baseURL, headers });
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<HttpClientResponseType<T>> {
    try {
      const response = await this.client.get(url, { params });
      return { data: response.data, error: null };
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorResponse = this.handleErrorResponse(axiosError);
      return { data: null, error: errorResponse };
    }
  }

  async post<T>(url: string, data: any): Promise<HttpClientResponseType<T>> {
    try {
      const response = await this.client.post(url, data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorResponse = this.handleErrorResponse(axiosError);
      return { data: null, error: errorResponse };
    }
  }

  private handleErrorResponse(data: AxiosError) {
    const responseData = data?.response?.data as any;
    if (responseData?.error) {
      return responseData?.error;
    }
    return responseData;
  }
}
