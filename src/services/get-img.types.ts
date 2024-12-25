export type BaseConfig = {
  api: string;
  key?: string;
};

// #region List all models and retrieve a model types
type ModelPipelines = 'text-to-image' | 'image-to-image' | 'controlnet' | 'inpaint' | 'instruct' | 'upscale' | 'face-fix';
export type ListAllModelsParams = {
  family?: 'stable-diffusion' | 'enhancements';
  pipeline?: ModelPipelines;
};

export type RetrieveModelParams = {
  id: string;
}

export type RetrieveModelResponse = {
  id: string;
  name: string;
  family: string;
  pipelines: ModelPipelines[];
  base_resolution: {
    width: number;
    height: number;
  };
  price: number;
  created_at: string;
};

export type ListAllModelsResponse = RetrieveModelResponse[];
// #endregion List all models and retrieve a model types
