# expect-immutable

immutable.js extension for [mjackson/expect](https://github.com/mjackson/expect)

## setup

`npm install expect-immutable`

## api

* expect(ImmutableIterable).toEqualImmutable(ImmutableIterable)
* expect(ImmutableIterable).toNotEqualImmutable(ImmutableIterable)

## usage

```js
import { Map, List } from 'immutable';
import expect from 'expect'
import expectImmutable from 'expect-immutable';

expect.extend(expectImmutable);

describe('expect-immutable', () => {
  it('will work', () => {
    expect(Map({ a: 1 })).toEqualImmutable(Map({ a: 1 }));
    expect(Map({ a: 1 })).toNotEqualImmutable(Map({ a: 2 }));

	expect(List([1])).toEqualImmutable(List([1]));
	expect(List([1])).toNotEqualImmutable(List([1, 2]));
  });
});
```

## todo

Currently, only `Map` and `List` are supported by test cases, but any Immutable Iterable should work.

## thanks

Thanks to [mjackson](https://github.com/mjackson) for writing the awesome [expect library](https://github.com/mjackson/expect).

Thanks to [algolia/expect-jsx](https://github.com/algolia/expect-jsx) who I based heavily off of.
