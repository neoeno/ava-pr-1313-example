import test from 'ava';

const fn = () => () => doesnotexist;

test("some test", t => {
  fn()();
});
