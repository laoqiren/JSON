# JSON
json decoder &amp; encoder


## Usage

```js
const assert = require('assert');
const {encode,decode} = require('../main.js');

const json = {
    string: 'hello world',
    number: 100,
    arr: [1,6,"hello"],
    date: new Date(),
    buf: new Buffer('hello world')
};
  
const jsonStr = encode(json);
const obj = decode(jsonStr);

assert.deepEqual(json,obj);
```


## test

```
$ npm run test
```