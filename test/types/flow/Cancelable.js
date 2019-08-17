/* @flow strict */
import Cancelable from '@';

let promise: Promise<void> = new Cancelable(() => {});

promise = Cancelable.from(new Promise(() => {}));
promise = Cancelable.from(promise);
promise = new Promise(() => {});

let cancelable: Cancelable<void> = Cancelable.from(promise);

cancelable.cancel();
cancelable.isCanceled();

cancelable.then((res: void) => res).cancel();
cancelable.then((res: void) => res).isCanceled();

cancelable.catch((thrown: mixed) => thrown).cancel();
cancelable.catch((thrown: mixed) => thrown).isCanceled();

cancelable.finally(() => {}).cancel();
cancelable.finally(() => {}).isCanceled();

Cancelable.resolve().cancel();
Cancelable.resolve().isCanceled();

Cancelable.reject().cancel();
Cancelable.reject().isCanceled();

Cancelable.all([]).cancel();
Cancelable.all([]).isCanceled();

Cancelable.race([]).cancel();
Cancelable.race([]).isCanceled();
