import { Callback } from './types.d';

declare class Cancelable<R> extends Promise<R> {
  public static from<T>(promise: Promise<T>): Cancelable<T>;

  public readonly token: string;

  constructor(callback: Callback<R>);

  public cancel(): void;

  public isCanceled(): boolean;
}

export default Cancelable;
