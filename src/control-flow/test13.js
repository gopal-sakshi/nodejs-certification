function asyncFn25(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    setTimeout(function () { callback(arg * 2); }, 1000);
}
function final() { console.log('Done', results); }

var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        asyncFn25(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running == 0) {
                final();
            }
        });
        running++;
    }
}

launcher();


/*
    We start new async() operations until we reach the limit (2). 
    Each async() operation 
        gets a callback which stores the result, 
        decrements the number of running operations, 
        and then check whether there are items left to process. 
            If yes, then laucher() is run again. 
            If there are no items to process and the current operation was the last running operation, then final() is called.
    

*/