class Storage {
  storage;
  constructor(
    getStorage = () =>
      typeof window !== 'undefined' ? window.localStorage : {}
  ) {
    this.storage = getStorage();
  }

  get(key: string) {
    return this.storage.getItem(key);
  }
  set(key: string, value: string) {
    return this.storage.setItem(key, value);
  }
  remove(key: string) {
    return this.storage.removeItem(key);
  }
  removeMultiple(keys: string[]) {
    keys.forEach((key: string) => this.remove(key));
  }
}

export const storage = {
  local: new Storage(),
};
