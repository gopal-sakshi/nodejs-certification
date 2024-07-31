let flag = false
function doSomething() {
    flag = true
    // More code (that doesn't change `flag`)...

    // We can be sure that `flag` here is true.
    // There's no way another code block could have changed
    // `flag` since this block is synchronous.
}

/********************************************************************************/

db.findOne('SELECT ... LIMIT 1', function(err, result) {
    if (err) return console.error(err)
    console.log(result)
});

console.log('Running query');

setTimeout(function() {
    console.log('Hey there')
}, 1000);
/********************************************************************************/

db.findAll('SELECT ...', function(err, results) {
    if (err) return console.error(err)

    // Heavy computation and many results ---> SYNC TASK; JS will be blocked
    for (const encrypted of results) {
        const plainText = decrypt(encrypted)
        console.log(plainText)
    }
});
/********************************************************************************/
