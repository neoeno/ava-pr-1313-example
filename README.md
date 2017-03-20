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
   7: })

  Error: doesnotexist is not defined
```

(Line 6 gets highlighted.)

I'd expect line 3 to get highlighted and to be in the stacktrace.