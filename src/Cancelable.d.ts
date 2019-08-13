type Resolve<R> = (result: R) => void;

type Reject = (thrown: unknown) => void;

type Callback<R> = (resolve: Resolve<R>, reject: Reject) => unknown;

declare class Cancelable<T> extends Promise<T> {
  static readonly prototype: Cancelable<any>;

  static from<T>(promise: Promise<T>): Cancelable<T>;

  static resolve<T>(value: T | PromiseLike<T>): Cancelable<T>;

  static resolve(): Cancelable<void>;

  static reject<T = never>(reason?: any): Cancelable<T>;

  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>,
      T10 | PromiseLike<T10>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>,
      T9 | PromiseLike<T9>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

  static all<T1, T2, T3, T4, T5, T6, T7, T8>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>,
      T8 | PromiseLike<T8>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5, T6, T7, T8]>;

  static all<T1, T2, T3, T4, T5, T6, T7>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>,
      T7 | PromiseLike<T7>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5, T6, T7]>;

  static all<T1, T2, T3, T4, T5, T6>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>,
      T6 | PromiseLike<T6>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5, T6]>;

  static all<T1, T2, T3, T4, T5>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>,
      T5 | PromiseLike<T5>
    ],
  ): Cancelable<[T1, T2, T3, T4, T5]>;

  static all<T1, T2, T3, T4>(
    values: [
      T1 | PromiseLike<T1>,
      T2 | PromiseLike<T2>,
      T3 | PromiseLike<T3>,
      T4 | PromiseLike<T4>
    ],
  ): Cancelable<[T1, T2, T3, T4]>;

  static all<T1, T2, T3>(
    values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>],
  ): Cancelable<[T1, T2, T3]>;

  static all<T1, T2>(
    values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>],
  ): Cancelable<[T1, T2]>;

  static all<T>(values: (T | PromiseLike<T>)[]): Cancelable<T[]>;

  static race<T>(
    values: T[],
  ): Cancelable<T extends PromiseLike<infer U> ? U : T>;

  static race<T>(
    values: Iterable<T>,
  ): Cancelable<T extends PromiseLike<infer U> ? U : T>;

  public readonly token: string;

  constructor(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  );

  cancel(): void;

  isCanceled(): boolean;

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Cancelable<TResult1 | TResult2>;

  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Cancelable<T | TResult>;

  finally(onfinally?: (() => void) | undefined | null): Cancelable<T>;
}

export default Cancelable;
