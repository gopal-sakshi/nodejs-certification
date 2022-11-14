function asyncFn24(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    setTimeout(function () { callback(arg * 2); }, 1000);
}
function final() { console.log('Done', results); }

var items = [1, 2, 3, 4, 5, 6];
var results = [];

items.forEach(function (item) {
    asyncFn24(item, function (result) {
        results.push(result);
        if (results.length == items.length) {
            final();
        }
    })
});


/*
    We take every item in the items array and start async operations for each of the items immediately. 
    The async() function is passed a function that stores the result and then checks whether the number of results is equal to the number of items to process. 
        If it is, then we call the final() function.

    Since this means that all the I/O operations are started in parallel immediately, we need to be careful not to exhaust the available resources. 
    For example, you probably don't want to start 1000's of I/O operations, 
        since there are operating system limitations for the number of open file handles.

    Runs a number of operations in parallel
    Starts all async operations in parallel (full concurrency)
    No guarantee of order, only that all the operations have been completed

*/