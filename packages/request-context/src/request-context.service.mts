import { AsyncLocalStorage } from 'node:async_hooks';

export class RequestContextService<T> {
  private store: AsyncLocalStorage<T>;
  constructor() {
    this.store = new AsyncLocalStorage<T>();
  }

  public set(value: T): void {
    return this.store.enterWith(value);
  }

  public get(): T {
    return this.store.getStore();
  }

  public has(): boolean {
    return typeof this.store.getStore() !== 'undefined';
  }

  public delete(): void {
    return this.store.enterWith(undefined);
  }
}
