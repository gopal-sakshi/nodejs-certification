function asyncFn23(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    setTimeout(function () { callback(arg * 2); }, 1000);
}


function final() { console.log('Done', results); }

var items = [1, 2, 3, 4, 5, 6];
var results = [];
function series(item) {
    console.log(`item ===> ${item}`);
    if (item) {
        asyncFn23(item, function (result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final();
    }
}
// console.log(items.shift())
series(items.shift());                  // .shift() ====> removes the first element of the array & returns the removed element


/*
    serial execution of the asynchronous function calls. 
    Control is passed back to the Node event loop after each async I/O operation is completed, then returned back when the operation is completed.

    Runs a number of operations sequentially
    Only starts one async operation at a time (no concurrency)
    Ensures that the async function complete in order

    


*/