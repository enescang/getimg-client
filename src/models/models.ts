import { HttpClient } from '../services/http-client';
import { EssentialV2 } from './essential-v2';
import { FluxSchnell } from './flux-schnell';
import { StableDiffusionXL } from './stable-diffusion-xl';

export class Models {
  private readonly fluxSchnellModel: FluxSchnell;
  private readonly essentialV2Model: EssentialV2;
  private readonly stableDiffusionXlModel: StableDiffusionXL;

  constructor(private readonly httpClient: HttpClient) {
    this.fluxSchnellModel = new FluxSchnell(httpClient);
    this.essentialV2Model = new EssentialV2(httpClient);
    this.stableDiffusionXlModel = new StableDiffusionXL(httpClient);
  }

  get fluxSchnell() {
    return this.fluxSchnellModel;
  }

  get essentialV2() {
    return this.essentialV2Model;
  }

  get stableDiffusionXL() {
    return this.stableDiffusionXlModel;
  }
}
