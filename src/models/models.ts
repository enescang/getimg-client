import { HttpClient } from '../services/http-client';
import { EssentialV2 } from './essential-v2';
import { FluxSchnell } from './flux-schnell';

export class Models {
  private readonly fluxSchnellModel: FluxSchnell;
  private readonly essentialV2Model: EssentialV2;

  constructor(private readonly httpClient: HttpClient) {
    this.fluxSchnellModel = new FluxSchnell(httpClient);
    this.essentialV2Model = new EssentialV2(httpClient);
  }

  get fluxSchnell() {
    return this.fluxSchnellModel;
  }

  get essentialV2() {
    return this.essentialV2Model
  }
}
