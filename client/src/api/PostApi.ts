import { User } from "@/ts/types/User";
import { Profile } from "@/ts/types/Profile";
import { Api } from "./Api";
import { Post } from "@/ts/types/Post";

export class PostApi extends Api {
  private static instance: PostApi;

  private constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";
    if (!baseUrl) {
      throw new Error("No base url has been provided");
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    super(baseUrl, headers);
  }

  public static getInstance(): PostApi {
    if (!PostApi.instance) {
      PostApi.instance = new PostApi();
    }
    return PostApi.instance;
  }

  public async list(
    param: string,
    abortController: AbortController
  ): Promise<Post> {
    const path = `/posts${param && `?query=${param}`}`;
    const options = {
      singal: abortController.signal,
    };
    return this.fetchJson<Post[]>(path, options, []);
  }

  public async create(post: Post) {
    const path = "/posts";
    const options = {
      method: "POST",
      body: JSON.stringify({ data: post }),
    };
    return this.fetchJson(path, options, {});
  }
}
