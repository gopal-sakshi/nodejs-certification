import { Worker, parentPort } from 'worker_threads';

const workerA = new Worker(someNodeJsFile_A.js);
workerA.on('message', callBackFunction23);            // listen for messages
workerA.on('error', () => { });
workerA.postMessage({data23: 'ss'});                            // post messages


parentPort.on('message', cb23);
parentPort.postMessage(err.message || 'finished');

/*
    NodeJs
    - 1 main thread managed by eventloop
    - several auxiliary threads in the worker pool.
    - all the threads run in same process.pid
    - 

*/