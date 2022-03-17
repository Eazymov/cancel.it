/* @flow strict */
import type { Tokens, Reject, Resolve, Callback } from './types';

const canceledTokens: Tokens = {};

let lastToken = 0;

function getToken(): string {
  lastToken += 1;

  return lastToken.toString();
}

function isTokenCanceled(token: string): boolean {
  return canceledTokens[token] === true;
}

function wrapAction<A>(handler: A => void, token: string): A => void {
  return arg => {
    if (isTokenCanceled(token)) {
      return;
    }

    handler(arg);
  };
}

class Cancelable<R> extends Promise<R> {
  static from<T>(promise: Promise<T>): Cancelable<T> {
    return new Cancelable((resolve, reject) => {
      promise.then(resolve).catch(reject);
    });
  }

  static resolve<T>(value: Promise<T> | T): Cancelable<T> {
    const promise = Promise.resolve(value);

    return Cancelable.from(promise);
  }

  // flowlint-next-line unclear-type:off
  static reject<T>(error: any): Cancelable<T> {
    const promise = Promise.reject(error);

    return Cancelable.from(promise);
  }

  static all<T: Iterable<mixed>>(
    promises: T,
  ): Cancelable<$TupleMap<T, typeof $await>> {
    const promise = Promise.all(promises);

    return Cancelable.from(promise);
  }

  static race<T, Elem: Promise<T> | T>(
    promises: Iterable<Elem>,
  ): Cancelable<T> {
    const promise = Promise.race(promises);

    return Cancelable.from(promise);
  }

  +token: string;

  constructor(callback: Callback<R>) {
    const token = getToken();

    canceledTokens[token] = false;

    super((resolve: Resolve<R>, reject: Reject) => {
      callback(wrapAction(resolve, token), wrapAction(reject, token));
    });

    this.token = token;
  }

  cancel(): void {
    canceledTokens[this.token] = true;
  }

  isCanceled(): boolean {
    return isTokenCanceled(this.token);
  }
}

export default Cancelable;
