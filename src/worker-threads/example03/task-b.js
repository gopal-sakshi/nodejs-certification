/** Import generics dependences */
import { isMainThread, parentPort } from 'worker_threads';

if (!isMainThread) { console.log('Worker B'); }
console.log('Task B');
console.log(`Task B Process: ${process.pid}`);

setTimeout(() => { parentPort.postMessage('Hi from Worker B'); }, 10000);
