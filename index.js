import expect from 'expect';
import { Iterable, is } from 'immutable';

function ensureIterable(object) {
  expect.assert(
    Iterable.isIterable(object),
    'Expected %s to be an Immutable Iterable',
    object
  );
}

function ensureSameType(actual, iterable) {
  expect.assert(
    actual.toString().split(' ')[0] === iterable.toString().split(' ')[0],
    `Expected ${actual} and ${iterable} to be of the same type`
  );
}

const api = {
  toEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);
    ensureSameType(this.actual, iterable);

    expect.assert(
      is(this.actual, iterable),
      `Expected ${this.actual} to equal ${iterable}`
    );
  },

  toNotEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);

    expect.assert(
      !is(this.actual, iterable),
      `Expected ${this.actual} not to equal ${iterable}`
    );
  },

  toBeSupersetImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);
    ensureSameType(this.actual, iterable);

    expect.assert(
      this.actual.isSuperset(iterable),
      `Expected ${this.actual} to contain ${iterable}`
    );
  },

  toBeSubsetImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);
    ensureSameType(this.actual, iterable);

    expect.assert(
      this.actual.isSubset(iterable),
      `Expected ${this.actual} to be contained by ${iterable}`
    );
  }
};

export default api;
