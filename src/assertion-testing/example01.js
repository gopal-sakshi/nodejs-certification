/**
 * Description: Equal numbers or not with assert.strictEqual method.
 */


import assert from 'assert';


console.group('GROUP \n');

// These two numbers are strict equal.
try {
  assert.strictEqual(2, 2);
  console.info('[PASSED1] Number 2 is equal 2!');
} catch (err) {
  console.error(`[FAIL1] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// One 2 is type string and the other is type number.
try {
  assert.strictEqual('2', 2);
  console.info('[PASSED2] Number 2 is equal 2!');
} catch (err) {
  console.error(`[FAIL2] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// These two numbers are diferents.
try {
  assert.strictEqual(3, 2);
  console.info('[PASSED3] Number 3 is equal 2!');
} catch (err) {
  console.error(`[FAIL3] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();
