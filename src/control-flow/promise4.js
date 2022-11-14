var p1 = Promise.resolve("p1")
/*******************************************************************************************/
// APPROACH I =============> console order will be "p2" "p1"
var p2 = Promise.resolve(Promise.resolve("p2")); 

// APPROACH II ============> console order will be "p2" "p1"
var p2 = Promise.resolve(new Promise(function(resolve, reject){
  resolve("p2")
}));

 
// APPROACH III ===========> console order will be "p1" "p2"
var p2 = new Promise(function(resolve, reject){
    resolve(Promise.resolve("p2"));
});
/*******************************************************************************************/
p2.then(function(value){
  console.log(value);
});
p1.then(function(value){
  console.log(value);
});


/*

    promise.then's callback won't be appended to the microtask queue until the promise is in the status of settled (resolved or rejected). 
    Microtask will be executed sequentially from queue, ie "First In, First Out".

    once p1 created, it is always in the status of resolved. 
    p2 in APPROACH I & APPROACH II ====> in the status of resolved, 
    while p2 in APPROACH III ==========> in the status of pending.

    Therefore, in APPROACH I & APPROACH II
        p2.then's callback is appended to the microtask queue first and executed first. 
    In APPROACH III, 
        although p2.then is executed first, it appends the callback to the microtask queue in the future, 
        since the promise is still in the status of pending. So p1.then's callback executed first.

*/