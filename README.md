# expect-immutable

immutable.js extension for [mjackson/expect](https://github.com/mjackson/expect)

## api

* expect(ImmutableIterable).toEqualImmutable(ImmutableIterable)
* expect(ImmutableIterable).toNotEqualImmutable(ImmutableIterable)
* expect(ImmutableIterable).toBeSupersetImmutable(ImmutableIterable)
* expect(ImmutableIterable).toBeSubsetImmutable(ImmutableIterable)

## usage

```js
import { Map, List } from 'immutable';
import expect from 'expect'
import expectImmutable from 'expect-immutable';

expect.extend(expectImmutable);

describe('expect-immutable', () => {
  it('will work', () => {
    expect(Map().set(1, 2)).toEqualImmutable(Map().set(1, 2));
    expect(Map().set(1, 2)).toNotEqualImmutable(Map().set("1", 2));
    expect(Map({1: 2, 3: 4})).toBeSupersetImmutable(Map({1: 2}));
    expect(Map({1: 2})).toBeSubsetImmutable(Map({1: 2, 3: 4}));
  });
});
```

## TODO

Prettify the error messages to make them similar to **expect** library.

## thanks


Thanks to [mjackson](https://github.com/mjackson) for [expect library](https://github.com/mjackson/expect).

Thanks to [hunterc](https://github.com/hunterc), this library is a fork of his [expect-immutable](https://github.com/hunterc/expect-immutable).
