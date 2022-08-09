import assert from 'assert';

var obj1 = { a: 1 };
var obj2 = { b: '1' };


try {
    assert.strictEqual(obj1, obj2);
} catch (error) {
    console.log(error.expected, error.actual);
}

try {
    assert.deepStrictEqual(obj1, obj2);
} catch (error) {
    console.log(error.expected, error.actual);
}

try {
    assert.doesNotMatch('I will fail', /fail/);
} catch(err) {
    console.log(err.expected);
    console.log('failed');
}