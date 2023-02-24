export class Api {
  private baseUrl: string;
  private headers: Headers;

  protected constructor(baseUrl: string, headers: Headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  public async fetchJson<T>(
    path: string,
    options: {},
    onCancel: T
  ): Promise<T> {
    try {
      console.log(path, options);
      const response = await fetch(this.baseUrl + path, {
        headers: this.headers,
        ...options,
      });
      console.log(response);
      if (response.status === 204) {
        return onCancel;
      }
      const payload = await response.json();
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }
}
