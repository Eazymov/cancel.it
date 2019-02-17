import { Callback } from './types.d';

declare class Cancelable<R> extends Promise<R> {
  public static from<_R>(promise: Promise<_R>): Cancelable<_R>;

  public readonly token: string;

  constructor(callback: Callback<R>);

  public cancel(): void;

  public isCanceled(): boolean;
}

export default Cancelable;
