/* @flow strict */
import Cancelable from '@';
import type { Callback } from '@/types';

function throwCallback() {
  throw new Error("Shouldn't be fired");
}

function testWithCreator(
  cancelableCreator: (cb: Callback<*>) => Cancelable<*>,
) {
  test('creates promise-compatible instance', () => {
    const cancelable = cancelableCreator(resolve => resolve());

    expect(cancelable).toBeInstanceOf(Promise);
  });

  test('cancelable resolves without cancellation', () => {
    return cancelableCreator(resolve => resolve());
  });

  test("then callback doesn't fire after cancellation", done => {
    const cancelable = cancelableCreator(resolve => setTimeout(resolve, 10));

    cancelable.cancel();
    cancelable.then(throwCallback);

    setTimeout(done, 100);
  });

  test("catch callback doesn't fire after cancellation", done => {
    const cancelable = cancelableCreator((_, reject) => setTimeout(reject, 10));

    cancelable.cancel();
    cancelable.catch(throwCallback);

    setTimeout(done, 100);
  });

  test("finally callback doesn't fire after cancellation", done => {
    const cancelable = cancelableCreator(resolve => setTimeout(resolve, 10));

    cancelable.cancel();
    cancelable.finally(throwCallback);

    setTimeout(done, 100);
  });

  test('Cancelable.prototype.isCanceled returns false if instance is not canceled', () => {
    const cancelable = cancelableCreator(resolve => resolve());

    expect(cancelable.isCanceled()).toBe(false);
  });

  test('Cancelable.prototype.isCanceled returns true if instance is canceled', () => {
    const cancelable = cancelableCreator(resolve => resolve());

    cancelable.cancel();

    expect(cancelable.isCanceled()).toBe(true);
  });

  test('promise returned by canceled.then is also cancelable', () => {
    const cancelable = cancelableCreator(resolve => resolve()).then(() => true);

    expect(cancelable).toBeInstanceOf(Cancelable);
  });
}

describe('Cancelable', () => {
  describe('created with constructor', () => {
    testWithCreator(cb => new Cancelable(cb));
  });

  describe('created with Cancelable.from', () => {
    testWithCreator(cb => Cancelable.from(new Promise(cb)));
  });
});
