function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
        console.log(result);
        // requires callback to `return` result
    });
}

initiate();


// The initiator style / input is the first function in the sequence (accept the original input)
// A middleware function will return another function
// The terminator function will invoke the callback