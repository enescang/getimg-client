import { GetimgService } from "./services/get-img";

const API = `https://api.getimg.ai/v1`;
const getimg = new GetimgService({ api: API });

export { getimg };
