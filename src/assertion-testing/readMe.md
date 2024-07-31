# assert 
import assert from 'assert';

assert.equal;                           '2' == 2
assert.strictEqual;                     '2' != 2
assert.deepStrictEqual;
assert.notEqual                 throws error when both params are same
assert.fail()                   throw error message by default without comparing anything


assert.equal ====> same as using a double equals in JavaScript:


## strict mode

import { strict as assert } from 'node:assert'
import assert from 'node:assert/strict';

In strict assertion mode
- non-strict methods behave like their corresponding strict methods. 
- assert.deepEqual() will behave like assert.deepStrictEqual()
- catch(err) ===> error messages for objects display a diff



`Deep equality`
- enumerable "own" properties of <child objects> are evaluated also:


https://stackoverflow.com/questions/16745855/difference-between-equal-deep-equal-and-strict-equal