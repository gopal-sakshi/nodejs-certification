function add (a, b, callback) {
    for (var i=0; i<1e5; i++) {
        for (var j=0; j<1e5; j++) {}
    };
    callback(a + b);
}

console.log('before');
add(1, 2, function(result) {
    console.log('Result: ' + result);
});
console.log('after');
/***************************************************************************** */