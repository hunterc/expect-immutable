import Immutable from 'immutable';
import expect from 'expect';
import expectImmutable from './index';

expect.extend(expectImmutable);

describe('expect immutable', () => {
  context('api', () => {
    it('has toEqualImmutable', () =>
      expect(expect().toEqualImmutable).toBeA('function')
    );
    it('has toNotEqualImmutable', () =>
      expect(expect().toNotEqualImmutable).toBeA('function')
    );
  });

  context('toEqualImmutable', () => {
    it('throws when called on a non-iterable', () => {
      expect(() =>
        expect({}).toEqualImmutable(Immutable.Map())
      ).toThrow(
        'Expected {} to be an Immutable Iterable'
      );
    });

    it('throws when called with a non-iterable', () => {
      expect(() =>
        expect(Immutable.Map()).toEqualImmutable({})
      ).toThrow(
        'Expected {} to be an Immutable Iterable'
      );
    });

    it('throws when Maps are different', () => {
      expect(() =>
        expect(Immutable.Map({})).toEqualImmutable(Immutable.Map({ a: 1 }))
      ).toThrow(
        'Expected {} to equal { a: 1 }'
      );
    });

    it('does not throw when empty Maps are compared', () => {
      expect(Immutable.Map({})).toEqualImmutable(Immutable.Map({}));
    });

    it('does not throw when Maps are the same', () => {
      expect(Immutable.Map({ a: 1 })).toEqualImmutable(Immutable.Map({ a: 1 }));
    });

    it('throws when Lists are different', () => {
      expect(() =>
        expect(Immutable.List([])).toEqualImmutable(Immutable.List([1]))
      ).toThrow(
        'Expected [] to equal [ 1 ]'
      );
    });

    it('does not throw when empty Lists are compared', () => {
      expect(Immutable.List([])).toEqualImmutable(Immutable.List([]));
    });

    it('does not throw when Lists are the same', () => {
      expect(Immutable.List([1])).toEqualImmutable(Immutable.List([1]));
    });
  });

  context('toNotEqualImmutable', () => {
    it('throws when called on a non-iterable', () => {
      expect(() =>
        expect({}).toEqualImmutable(Immutable.Map())
      ).toThrow(
        'Expected {} to be an Immutable Iterable'
      );
    });

    it('throws when called with a non-iterable', () => {
      expect(() =>
        expect(Immutable.Map()).toEqualImmutable({})
      ).toThrow(
        'Expected {} to be an Immutable Iterable'
      );
    });

    it('does not throw when Maps are different', () => {
      expect(Immutable.Map({})).toNotEqualImmutable(Immutable.Map({ a: 1 }));
    });

    it('throws when Maps are the same', () => {
      expect(() =>
        expect(Immutable.Map({ a: 1 })).toNotEqualImmutable(Immutable.Map({ a: 1 }))
      ).toThrow(
        'Expected { a: 1 } to not equal { a: 1 }'
      );
    });

    it('does not throw when Lists are different', () => {
      expect(Immutable.List([1])).toNotEqualImmutable(Immutable.List([]));
    });

    it('throws when Lists are the same', () => {
      expect(() =>
        expect(Immutable.List([1])).toNotEqualImmutable(Immutable.List([1]))
      ).toThrow(
        'Expected [ 1 ] to not equal [ 1 ]'
      );
    });
  });
});
