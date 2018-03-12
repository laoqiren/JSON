# JSON
json decoder &amp; encoder


## Usage

```js
const assert = require('assert');
const {encode,decode} = require('./main.js');

const obj = {
  str: 'hello world',
  num: 100,
  arr: [1,5,8],
  date: new Date(),
  buf: new Buffer('hello world')
};

const jsonStr = encode(obj);
const newObj = decode(jsonStr);

assert.deepEqual(obj, newObj);
```
