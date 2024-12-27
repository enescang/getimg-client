import { HttpClient } from '../services/http-client';
import { Enhancements } from './enhancements';
import { EssentialV2 } from './essential-v2';
import { FluxSchnell } from './flux-schnell';
import { LatentConsistency } from './latent-consistency';
import { StableDiffusion } from './stable-diffusion';
import { StableDiffusionXL } from './stable-diffusion-xl';

export class Models {
  private readonly fluxSchnellModel: FluxSchnell;
  private readonly essentialV2Model: EssentialV2;
  private readonly stableDiffusionXlModel: StableDiffusionXL;
  private readonly stableDiffusionModel: StableDiffusion;
  private readonly latentConsistencyModel: LatentConsistency;
  private readonly enhancementsModel: Enhancements;

  constructor(private readonly httpClient: HttpClient) {
    this.fluxSchnellModel = new FluxSchnell(httpClient);
    this.essentialV2Model = new EssentialV2(httpClient);
    this.stableDiffusionXlModel = new StableDiffusionXL(httpClient);
    this.stableDiffusionModel = new StableDiffusion(httpClient);
    this.latentConsistencyModel = new LatentConsistency(httpClient);
    this.enhancementsModel = new Enhancements(httpClient);
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

  get stableDiffusion() {
    return this.stableDiffusionModel;
  }

  get latentConsistency() {
    return this.latentConsistencyModel;
  }

  get enhancements() {
    return this.enhancementsModel;
  }
}
