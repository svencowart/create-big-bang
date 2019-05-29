import * as R from 'ramda';

const objA = {
  a: 'a',
};
const objB = {
  b: 'b',
};
const objC = R.mergeAll([objA, objB]);
const objD = {
  d: {
    ...objC,
  },
};

console.log(objD);
