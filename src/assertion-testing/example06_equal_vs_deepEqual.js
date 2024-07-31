import assert from 'node:assert';


var a = [1,2,3]  
var b = a                               // As a and b both refer to the same object
console.log("01", a == b)                 // this is true
console.log("02", a === b)                // and this is also true

a = [1,2,3]             // here a and b have equivalent contents, but do not refer to the same Array object.
b = [1,2,3]         
console.log("03 ======> ", a==b);           // Thus this is false.


assert.deepEqual(a, b) // However this passes, as while a & b are not the same object, 
                        // they are still arrays containing 1, 2, 3

var X = function() {}
a = new X
b = new X
a == b                              // false, not the same object
assert.deepEqual(a, b)              // pass, both are unadorned X objects
b.foo = 'bar'

try {
    assert.deepEqual(a, b)              // fail!
} catch(err) {
    console.log("err @23 ", err.expected, err.actual)
}
