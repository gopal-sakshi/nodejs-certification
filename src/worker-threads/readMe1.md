# How to Run
- open terminal
- `change node version to 16.10.0` ----> otherwise 'cant use import statement outside module'
- node src/worker-threads/example01.js
------------------------------------------------------------------------------------------------------------------------


import { 
    Worker, 
    isMainThread,
    parentPort
} from 'worker_threads';

`main file`
if(isMainThread) {                                                      // if it is main thread ===> we will create two workerThreads
    const workerA = new Worker(someNodeJsFile_A.js);
    const workerB = new Worker(someNodeJsFile_B.js);
}
workerA.on('message', callBackFunction23);                  // parent subscribing to messages from workerThread
workerB.on('message', callBackFunction24);                  // parent subscribing to messages from workerThread

workerA.postMessage

`worker file`
parentPort.postMessage(data);                               // when parent sends 'data' to worker
parentPort.on('message', async (data) => {});               // when worker receives 'data' object from parent (or) 
                                                                // worker subscribing to messages from parentPort

// Note: all 3 threads ----> 1 main thread, workerA, workerB =====> all run on same process.pid

------------------------------------------------------------------------------------------------------------------------
# Worker Threads
- useful for performing heavy JavaScript tasks. 
- With the help of threads, Worker makes it easy to run javascript codes in parallel 
    making it much faster and efficient. 
    We can do heavy tasks without even disturbing the main thread
- 

# How NodeJs really works
- Node.js uses two kinds of threads: 
    a main thread handled by the event loop 
    and several auxiliary threads in the worker pool.
- The event loop is the mechanism that takes callbacks (functions) & registers them to be executed at some point in the future. 
- It operates in the same thread as the proper JavaScript code. 
    When a JavaScript operation blocks the thread, the event loop is blocked as well.
- The worker pool is an execution model that spawns & handles separate threads, 
    which then synchronously perform the task and return the result to the event loop. 
    The event loop then executes the provided callback with said result.
- In short, it takes care of asynchronous I/O operations — primarily, interactions with the system’s disk and network. 
- It is mainly used by modules such as fs (I/O-heavy) or crypto (CPU-heavy). 
- Worker pool is implemented in libuv, 
    which results in a slight delay whenever Node needs to communicate internally between JavaScript & C++, but this is hardly noticeable.

# Intro
- Backend languages, which generally support multithreading, 
    have all kinds of mechanisms for syncing values between threads and other thread-oriented features. 
- To add support for such things to JavaScript would require changing the entire language, 
    which wasn’t really Ryan Dahl’s (NodeJs creator) goal



# Issue 1
- what if we need to synchronously execute some complex operation: 
    any function that takes too long to run will block the thread
    AI, machine learning, big data
    this was the case until Node 10.5.0 came out... In Node 10.5.0 ----> worker threads were introduced
    Users can themselves multiple threads and achieve faster processing
- A `thread worker` is a piece of code (usually taken out of a file) spawned in a separate thread.
- In threads, we use callback & not promises because
    a worker thread can emit/dispatch many message events
- Note that whether you use JavaScript itself or something that transpiles to JavaScript (TypeScript), 
    the path should always refer to files with either .js or .mjs extensions.

# common worker events
- worker.on('error', (error) => {});
    The error event is emitted whenever there’s an uncaught exception inside the worker
- worker.on('exit', (exitCode) => {});
    exit is emitted whenever a worker exits. 
    If process.exit() was called inside the worker, exitCode would be provided to the callback. 
    If the worker was terminated with worker.terminate(), the code would be 1.
- worker.on('online', () => {});
    online is emitted whenever a worker stops parsing the JavaScript code and starts the execution
- worker.on('message', (data) => {});
    message is emitted whenever a worker sends data to the parent thread.

https://blog.logrocket.com/a-complete-guide-to-threads-in-node-js-4fa3898fe74f/
------------------------------------------------------------------------------------------------------------------------





