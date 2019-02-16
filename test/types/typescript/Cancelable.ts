import Cancelable from '@';

let promise: Promise<void> = new Cancelable(() => {});

promise = Cancelable.from(new Promise(() => {}));
promise = Cancelable.from(promise);
promise = new Promise(() => {});

let cancelable: Cancelable<void> = Cancelable.from(promise);

cancelable.then((res: void) => res);

cancelable.catch((thrown: unknown) => thrown);

cancelable.finally(() => {});
