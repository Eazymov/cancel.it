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

class Cancelable<T> extends Promise<T> {
  static from<T>(promise: Promise<T>): Cancelable<T> {
    return new Cancelable((resolve, reject) => {
      promise.then(resolve).catch(reject);
    });
  }

  +token: string;

  constructor(callback: Callback<T>) {
    const token = getToken();

    canceledTokens[token] = false;

    super((resolve: Resolve<T>, reject: Reject) => {
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
