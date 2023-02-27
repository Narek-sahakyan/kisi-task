import { createApi } from "unsplash-js";
import { ACCESS_KEY } from "./constants";

export const unsplashAPI = createApi({
  accessKey: ACCESS_KEY as string,
});
