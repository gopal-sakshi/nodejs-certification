function addAsync(a, b, callback) {
    setTimeout(function () { callback(a + b); }, 1000);
}

console.log('before');
// we are invoking/calling addAsync() with 3 params
addAsync(1, 2, function(result) {
    console.log('Result: ' + result);
});
console.log('after');