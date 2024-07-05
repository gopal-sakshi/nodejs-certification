/**
 * Description: Equal numbers or not with assert.strictEqual method.
 */


import assert from 'assert';


console.group('GROUP \n');

// These two numbers are strict equal.
try {
  assert.equal(2, 2);
  console.info('[PASSED] Number 2 is equal 2!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// One 2 is type string and the other is type number but equals.
try {
  assert.equal('2', 2);
  console.info('[PASSED] String 2 is equal Number 2!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// Number 2 is type string and different of String A.
try {
  assert.equal('2', 'A');
  console.info('[PASSED] String 2 is equal string A!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();

assert.equal('2', 'A');