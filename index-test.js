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
        'Expected Map {} to equal Map { "a": 1 }'
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
          'Expected List [] to equal List [ 1 ]'
      );
    });

    it('does not throw when empty Lists are compared', () => {
      expect(Immutable.List([])).toEqualImmutable(Immutable.List([]));
    });

    it('does not throw when Lists are the same', () => {
      expect(Immutable.List([1])).toEqualImmutable(Immutable.List([1]));
    });

    it('throws when object types are different', () => {
      expect(() =>
        expect(Immutable.List()).toEqualImmutable(Immutable.Seq())
      ).toThrow(
        'Expected List [] and Seq [] to be of the same type'
      );
    });

    it('throws when Map keys are of different type', () => {
      expect(() =>
        expect(Immutable.Map().set(1, 2)).toEqualImmutable(Immutable.Map().set('1', 2))
      ).toThrow(
        'Expected Map { 1: 2 } to equal Map { "1": 2 }'
      );
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
        'Expected Map { "a": 1 } not to equal Map { "a": 1 }'
      );
    });

    it('does not throw when Lists are different', () => {
      expect(Immutable.List([1])).toNotEqualImmutable(Immutable.List([]));
    });

    it('throws when Lists are the same', () => {
      expect(() =>
        expect(Immutable.List([1])).toNotEqualImmutable(Immutable.List([1]))
      ).toThrow(
        'Expected List [ 1 ] not to equal List [ 1 ]'
      );
    });
  });

  context('toBeSupersetImmutable', () => {
    it('throws when each List has unique values', () => {
      expect(() => {
        const pseudoSuperset = Immutable.List([1, Immutable.List([2, 3])]);
        const pseudoSubset = Immutable.List([1, Immutable.List([2, 4])]);
        expect(pseudoSuperset).toBeSupersetImmutable(pseudoSubset);
      }).toThrow(
        'Expected List [ 1, List [ 2, 3 ] ] to contain List [ 1, List [ 2, 4 ] ]'
      );
    });

    it('throws when types are different', () => {
      expect(() =>
        expect(Immutable.List([1, 2])).toBeSupersetImmutable(Immutable.Seq([1]))
      ).toThrow(
        'Expected List [ 1, 2 ] and Seq [ 1 ] to be of the same type'
      );
    });

    it('does not throw when first List is superset of the other', () => {
      expect(Immutable.List([1, 2])).toBeSupersetImmutable(Immutable.List([1]));
    });

    it('does not throw when Lists are equal', () => {
      expect(Immutable.List([1])).toBeSupersetImmutable(Immutable.List([1]));
    });
  });

  context('toBeSubsetImmutable', () => {
    it('throws when each List has unique values', () => {
      expect(() => {
        const pseudoSuperset = Immutable.List([1, Immutable.List([2, 3])]);
        const pseudoSubset = Immutable.List([1, Immutable.List([2, 4])]);
        expect(pseudoSuperset).toBeSubsetImmutable(pseudoSubset);
      }).toThrow(
        'Expected List [ 1, List [ 2, 3 ] ] to be contained by List [ 1, List [ 2, 4 ] ]'
      );
    });

    it('throws when types are different', () => {
      expect(() =>
        expect(Immutable.List([1, 2])).toBeSubsetImmutable(Immutable.Seq([1]))
      ).toThrow(
        'Expected List [ 1, 2 ] and Seq [ 1 ] to be of the same type'
      );
    });

    it('does not throw when first List is superset of the other', () => {
      expect(Immutable.List([1])).toBeSubsetImmutable(Immutable.List([1, 2]));
    });

    it('does not throw when Lists are equal', () => {
      expect(Immutable.List([1])).toBeSubsetImmutable(Immutable.List([1]));
    });
  });
});
