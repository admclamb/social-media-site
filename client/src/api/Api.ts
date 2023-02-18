export abstract class Api {
  static readonly backendUrl: string =
    process.env.BACKEND_URL || 'http://localhost:5000';

  public static async fetchJson(route: string, options: {}, onCancel: any) {
    try {
      const response = await fetch(Api.backendUrl + route, options);
      if (response.status === 204) {
        return null;
      }
      const payload = await response.json();
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== 'AbortError') {
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }
}
