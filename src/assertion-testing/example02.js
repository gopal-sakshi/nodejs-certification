/**
 * Description: Equal numbers or not with assert.strictEqual method.
 */


import assert from 'assert';


const obj1 = { keyA: 1 };
const obj4 = { keyA: 1 };

const obj12 = { a : { n: 0 } };
const obj13 = { a : { n: 0 } };
const obj14 = { a : { n: '0' } };


const obj31 = { a: { b: 1 } };
const obj32 = { a: { b: 2 } };
const obj33 = { a: { b: 1 } };
const obj34 = { __proto__: obj1 };

const obj54 = { a: { b: { c: 1 }}};
const obj55 = { a: { b: { c: 2 }}};

console.group('GROUP \n');

try {
    assert.deepEqual(obj31, obj32);
} catch(err) {
    console.log("deepEqual anta ===> ", err.expected, err.actual)
}

try {
    assert.equal(obj12, obj14);
} catch(err) {
    console.log("failuuu ===> ", err.expected, err.actual)
}

try {
    assert.equal(obj54, obj55);
    console.log("equal -- deep properties ni compare cheyyaledu, so testcase pass ayindi");
} catch(err) {
    console.log("equal222 ===> ", err.expected, err.actual)
}

try {
    assert.deepStrictEqual(obj1, obj4);
    console.info('both objects are equal');
} catch (err) {
    console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}


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

try {
    assert.notEqual('2', A);
    console.info("2 isnt equal to A; very good");
  } catch (err) {
    console.error(`2 & A -- rendu okate`);
  }

console.groupEnd();