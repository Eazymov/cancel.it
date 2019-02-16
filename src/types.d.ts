export type Resolve<R> = (result: R) => void;

export type Reject = (thrown: unknown) => void;

export type Callback<R> = (resolve: Resolve<R>, reject: Reject) => unknown;
