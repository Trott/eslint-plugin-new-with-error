# Require `throw new Error()` rather than `throw Error()` (new-with-error)

This is a style requirement of Node.js core code. Perhaps you will find it useful too.


## Rule Details

This rule aims to make sure that there is consistency with how Errors are thrown.

The following patterns are considered warnings:

```js

throw Error('foo');

```

The following patterns are not warnings:

```js

throw new Error('foo');

```

### Options

You can include an array of Error types you want checked (SyntaxError, ReferenceError, etc.). Or don't provide it and you'll just get checks on Error.

## When Not To Use It

If you don't care if there's a mix of `throw Error()` and `throw new Error()` in your code, then this is not the rule for you.

## Further Reading

* https://github.com/nodejs/node/pull/3714
