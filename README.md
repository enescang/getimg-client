<div align="center">

# getimg-client

**A TypeScript client for the [getimg.ai](https://getimg.ai) API.**  
Generate stunning images with the latest AI models — fully typed, zero hassle.

[![npm version](https://img.shields.io/npm/v/getimg-client)](https://www.npmjs.com/package/getimg-client)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Models](#models)
  - [Seedream 4.0](#seedream-40)
  - [FLUX.1 Schnell](#flux1-schnell)
- [API Reference](#api-reference)
  - [List All Models](#list-all-models)
  - [Retrieve a Model](#retrieve-a-model)
  - [Account Balance](#account-balance)
- [Legacy Endpoints](#legacy-endpoints)
- [Contributing](#contributing)

---

## Installation

```bash
npm install getimg-client
```

---

## Quick Start

```typescript
import { getimg } from 'getimg-client';

getimg.config({ key: 'YOUR_GETIMG_API_KEY' });

const result = await getimg.models.seedreamV4.textToImage({
  prompt: 'A futuristic city at sunset, cinematic lighting',
  aspect_ratio: '16:9',
  response_format: 'url',
});

console.log(result.data?.url);
```

---

## Models

### Seedream 4.0

> Generates 4K high-quality images from a text prompt.

```typescript
const result = await getimg.models.seedreamV4.textToImage({
  prompt: 'Astronaut riding a horse on Mars, photorealistic',
  aspect_ratio: '16:9',
  seed: 42,
  response_format: 'url', // 'url' | 'b64'
});
```

**Parameters**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `prompt` | `string` | — | Text description of the image _(required)_ |
| `aspect_ratio` | `string` | `1:1` | `1:1` · `16:9` · `9:16` · `3:2` · `2:3` · `3:4` · `4:3` · `21:9` |
| `seed` | `number` | — | Fix seed for reproducible results |
| `response_format` | `string` | `b64` | `url` or `b64` |

---

### FLUX.1 Schnell

> Fast, high-quality text-to-image generation.

```typescript
const result = await getimg.models.fluxSchnell.textToImage({
  prompt: 'A serene mountain lake at dawn',
  width: 1024,
  height: 1024,
  steps: 4,
  response_format: 'url',
});
```

**Parameters**

| Parameter | Type | Description |
|---|---|---|
| `prompt` | `string` | Text description of the image _(required)_ |
| `width` | `number` | Output image width in pixels |
| `height` | `number` | Output image height in pixels |
| `steps` | `number` | Number of diffusion steps |
| `seed` | `number` | Fix seed for reproducible results |
| `output_format` | `string` | `jpeg` or `png` |
| `response_format` | `string` | `url` or `b64` |

---

## API Reference

### List All Models

```typescript
// List all available models
const { data } = await getimg.listAllModels();

// Filter by family or pipeline
const { data } = await getimg.listAllModels({
  family: 'seedream-v4',
  pipeline: 'text-to-image',
});
```

<details>
<summary>Example response</summary>

```json
[
  {
    "id": "stable-diffusion-v1-5",
    "name": "Stable Diffusion v1.5",
    "family": "stable-diffusion",
    "pipelines": ["text-to-image", "image-to-image", "controlnet"],
    "base_resolution": { "width": 512, "height": 512 },
    "price": 0.00045,
    "created_at": "2023-05-23T18:51:22.297Z"
  }
]
```

</details>

### Retrieve a Model

```typescript
const { data } = await getimg.retrieveModel({ id: 'stable-diffusion-v1-5' });
console.log(data?.name);
```

### Account Balance

```typescript
const { data } = await getimg.account.retrieveBalance();
console.log(`Balance: $${data?.amount}`);
```

---

## Legacy Endpoints

> [!WARNING]
> The following model families are **deprecated** legacy endpoints. They remain functional but are no longer recommended. Migrate to [`seedreamV4`](#seedream-40) or [`fluxSchnell`](#flux1-schnell) for new projects.

<details>
<summary>View legacy models</summary>

#### StableDiffusion
`textToImage` · `imageToImage` · `controlNet` · `inpainting` · `instruct`

#### StableDiffusionXL
`textToImage` · `imageToImage` · `inpainting` · `ipAdapter`

#### EssentialV2
`textToImage`

#### LatentConsistency
`textToImage` · `imageToImage`

#### Enhancements
`upscale` · `fixFaces`

```typescript
// Legacy usage example
const result = await getimg.models.stableDiffusion.textToImage({
  prompt: 'A beautiful landscape',
});
```

</details>

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push and open a pull request