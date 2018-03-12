const assert = require('assert');
const {encode,decode} = require('../main.js');

const json = {
    string: 'hello world',
    number: 100,
    date: new Date(),
    buf: new Buffer('hello world')
};
  
const jsonStr = encode(json);
const obj = decode(jsonStr);

assert.deepEqual(json,obj);