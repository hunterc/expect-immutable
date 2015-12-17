import expect from 'expect';
import { Iterable } from 'immutable';

function ensureIterable(object) {
  expect.assert(
    Iterable.isIterable(object),
    'Expected %s to be an Immutable Iterable',
    object
  );
}

const api = {
  toEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);

    expect(this.actual.toJS()).toEqual(iterable.toJS());
  },

  toNotEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);

    expect(this.actual.toJS()).toNotEqual(iterable.toJS());
  }
};

export default api;
