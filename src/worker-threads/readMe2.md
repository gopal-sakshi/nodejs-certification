# Worker Threads
- import { 
    Worker,                     new Worker(`workerTask23.js`);
    isMainThread,               true only for mainthread... evaluates to false in case of worker threads
    parentPort                  once worker_thread's task is completed ---> parentPort.postMessage()
} from 'worker_threads';

methods on worker23 thread... worker23 instance is availble @ parent thread level only... 
- worker23.on('message', callBackFn() )
    // other than 'message' ---> we can use error, exit, messageerror, online
- worker23.threadId;
- worker23.addListener()