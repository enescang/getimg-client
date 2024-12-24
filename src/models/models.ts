import { HttpClient } from '../services/http-client';
import { FluxSchnell } from './flux-schnell';

export class Models {
  private readonly fluxSchnellModel: FluxSchnell;
  constructor(private readonly httpClient: HttpClient) {
    this.fluxSchnellModel = new FluxSchnell(httpClient);
  }

  get fluxSchnell() {
    return this.fluxSchnellModel;
  }
}
