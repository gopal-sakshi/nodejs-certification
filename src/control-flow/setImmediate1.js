// Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.


/*

    Differences between 

    setImmediate()                      // A setTimeout, setImmediate callback is added to macrotask queue
    setTimeout(() => {}, 0)             // very similar to setImmediate()... run in the next iteration of the event loop
    process.nextTick()                  // executed on the current iteration of the event loop, after the current operation ends
                                            // process.nextTick callback is added to process.nextTick queue
    Promise.then()                      // Promise.then() callback is added to promises microtask queue


    EventLoop Order executes tasks in this order
    - Event loop in process.nextTick queue 
    - then executes promises microtask queue, and then executes macrotask queue.

*/


