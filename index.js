import expect from 'expect';
import { Iterable } from 'immutable';

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

function ensureIterable(object) {
  expect.assert(
    Iterable.isIterable(object),
    'expected %s to be an Immutable Iterable',
    object
  );
}

export default api;
