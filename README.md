# Demo of unhelpful stacktrace cleaning in AVA

```
npm install
ava test.js
```

Output:

```
$ ava test.js

  1 failed

  some test
  /Users/kay/Code/libs/tester/test.js:6

   5: test("some test", t => {
   6:   fn()();
   7: });

  Error:

    [ReferenceError: doesnotexist is not defined]

  Error thrown in test
```

(Line 6 gets highlighted.)

I'd expect line 3 to get highlighted and to be in the stacktrace.

## Output after #1313

[Link to PR](https://github.com/avajs/ava/pull/1313)

```
$ ava test.js

  1 failed

  some test
  /Users/kay/Code/libs/tester/test.js:3

   2:
   3: const fn = () => () => doesnotexist;
   4:

  Error:

    [ReferenceError: doesnotexist is not defined]

  Error thrown in test

  test.js:3:24
  Test.t [as fn] (test.js:6:3)
```

(Line 3 gets highlighted.)