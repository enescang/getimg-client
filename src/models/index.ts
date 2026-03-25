import { HttpClient } from '../services/http-client';
import { Enhancements } from './enhancements';
import { EssentialV2 } from './essential-v2';
import { FluxSchnell } from './flux-schnell';
import { LatentConsistency } from './latent-consistency';
import { SeedreamV4 } from './seedream-v4';
import { StableDiffusion } from './stable-diffusion';
import { StableDiffusionXL } from './stable-diffusion-xl';

export class Models {
  private readonly seedreamV4Model: SeedreamV4;
  private readonly fluxSchnellModel: FluxSchnell;
  private readonly essentialV2Model: EssentialV2;
  private readonly stableDiffusionXlModel: StableDiffusionXL;
  private readonly stableDiffusionModel: StableDiffusion;
  private readonly latentConsistencyModel: LatentConsistency;
  private readonly enhancementsModel: Enhancements;

  constructor(private readonly httpClient: HttpClient) {
    this.seedreamV4Model = new SeedreamV4(httpClient);
    this.fluxSchnellModel = new FluxSchnell(httpClient);
    this.essentialV2Model = new EssentialV2(httpClient);
    this.stableDiffusionXlModel = new StableDiffusionXL(httpClient);
    this.stableDiffusionModel = new StableDiffusion(httpClient);
    this.latentConsistencyModel = new LatentConsistency(httpClient);
    this.enhancementsModel = new Enhancements(httpClient);
  }

  get seedreamV4() {
    return this.seedreamV4Model;
  }

  get fluxSchnell() {
    return this.fluxSchnellModel;
  }

  /** @deprecated This is a legacy endpoint. Consider using seedreamV4 or fluxSchnell instead. */
  get essentialV2() {
    return this.essentialV2Model;
  }

  /** @deprecated This is a legacy endpoint. Consider using seedreamV4 or fluxSchnell instead. */
  get stableDiffusionXL() {
    return this.stableDiffusionXlModel;
  }

  /** @deprecated This is a legacy endpoint. Consider using seedreamV4 or fluxSchnell instead. */
  get stableDiffusion() {
    return this.stableDiffusionModel;
  }

  /** @deprecated This is a legacy endpoint. Consider using seedreamV4 or fluxSchnell instead. */
  get latentConsistency() {
    return this.latentConsistencyModel;
  }

  /** @deprecated This is a legacy endpoint. Consider using seedreamV4 or fluxSchnell instead. */
  get enhancements() {
    return this.enhancementsModel;
  }
}
