# GetImg Client

A TypeScript client for interacting with the GetImg API. This library provides methods to manage models, generate images, and query account details.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [List All Models](#list-all-models)
  - [Retrieve a Model](#retrieve-a-model)
  - [Models and Their Methods](#models-and-their-methods)
  - [Account](#account)
- [Contributing](#contributing)

---

## Installation

```bash
npm install getimg-client
```

---

## Configuration

To set up the client, configure it with your API key. Optionally, you can override the default API endpoint.

```typescript
import getimg from 'getimg-client';

getimg.config({ key: 'YOUR_GETIMG_KEY' });

// Optionally override the API endpoint
getimg.config({ api: 'https://custom-api-endpoint.com' });
```

---

## Usage

### List All Models

Retrieve a list of all available models:

```typescript
const models = await getimg.listAllModels();
console.log(models);
```

Example response of the models:
```json
[
    {
    "id": "stable-diffusion-v1-5",
    "name": "Stable Diffusion v1.5",
    "family": "stable-diffusion",
    "pipelines": [
      "text-to-image",
      "image-to-image",
      "controlnet"
    ],
    "base_resolution": {
      "width": 512,
      "height": 512
    },
    "price": 0.00045,
    "created_at": "2023-05-23T18:51:22.297Z"
  }
]
```

### Retrieve a Model

Retrieve details of a specific model by its ID:

```typescript
const model = await getimg.retrieveModel({ id: 'MODEL_ID' });
console.log(model);
```

### Models and Their Methods

The `getimg.models` object provides access to various models and their capabilities. Each model includes a `getModelName()` method to retrieve its name.

#### Enhancements
- **fixFaces**
- **upscale**

#### EssentialV2
- **textToImage**

#### FluxSchnell
- **textToImage**

#### LatentConsistency
- **textToImage**
- **imageToImage**

#### StableDiffusion
- **textToImage**
- **controlNet**
- **imageToImage**
- **inpainting**
- **instruct**

#### StableDiffusionXL
- **textToImage**
- **imageToImage**
- **inpainting**
- **ipAdapter**

Example usage:

```typescript
const modelName = getimg.models.stableDiffusion.getModelName();
console.log(modelName);

const result = await getimg.models.stableDiffusion.textToImage({ prompt: 'A beautiful landscape' });
console.log(result);
```

### Account

Retrieve account balance details:

```typescript
const balance = await getimg.account.retrieveBalance();
console.log(balance);
```

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.