/**
 * Description: Equal objects values and structure or not with strict.deepEqual method.
 */


import { strict } from 'assert';

const obj1 = { keyA: 1 };
const obj2 = { keyA: '1' };
const obj3 = { keyA: 'hi', keyB: 'bye' };
const obj4 = { keyA: 1 };

console.group('GROUP \n');

// These arrays NO contains equals values but has equal structure.
try {
    strict.deepEqual(obj1, obj2);
    console.info('[PASSED] Objects are equals!');
} catch (err) {
    console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// These objects NO contains equals structure.
try {
    strict.deepEqual(obj1, obj3);
    console.info('[PASSED] Objects are equals!');
} catch (err) {
    console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();