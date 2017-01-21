import expect from 'expect';
import Immutable from 'immutable';


/**
 * Check if the object is an immutable iterable.
 *
 * @param {Object} object
 * @throws in case collection is not an instance of Immutable.Iterable
 */
function ensureIterable(object) {
  expect.assert(
    Immutable.Iterable.isIterable(object),
    'Expected %s to be an Immutable Iterable',
    object
  );
}

/**
 * Check if the objects have the same constructor.
 *
 * @param {Immutable.Iterable} actual
 * @param {Immutable.Iterable} iterable
 * @throws in case constructors are different
 */
function ensureSameType(actual, iterable) {
  expect.assert(
    actual.constructor.name === iterable.constructor.name,
    `Expected ${actual} and ${iterable} to be of the same type`
  );
}

/**
 * Methods to extend the `expect` class.
 *
 * @type {Object.<string, function>}
 */
const api = {
  /**
   * Compares two objects using `Immutable.is` method.
   *
   * @param {Immutable.Iterable} iterable
   * @throws in case collections are not equal
   */
  toEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);
    ensureSameType(this.actual, iterable);

    expect.assert(
      Immutable.is(this.actual, iterable),
      `Expected ${this.actual} to equal ${iterable}`
    );
  },

  /**
   * Compares two objects using `Immutable.is` method.
   *
   * @param {Immutable.Iterable} iterable
   * @throws in case collections are equal
   */
  toNotEqualImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);

    expect.assert(
      !Immutable.is(this.actual, iterable),
      `Expected ${this.actual} not to equal ${iterable}`
    );
  },

  /**
   * Recursively compares if `expected` object is a superset of the comparable
   * using `.isSuperset` method.
   *
   * @param {Immutable.Iterable} iterable
   * @throws if .isSuperset returns false
   */
  toBeSupersetImmutable(iterable) {
    ensureIterable(this.actual);
    ensureIterable(iterable);
    ensureSameType(this.actual, iterable);

    expect.assert(
      this.actual.isSuperset(iterable),
      `Expected ${this.actual} to contain ${iterable}`
    );
  },

  /**
   * Recursively compares if `expected` object is a subset of the comparable
   * using `.isSubset` method.
   *
   * @param {Immutable.Iterable} iterable
   * @throws if .isSubset returns false
   */
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
