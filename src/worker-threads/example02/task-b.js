/** Import generics dependences */
import { isMainThread } from 'worker_threads';

if (!isMainThread) {
  console.log('Worker B');
}
console.log(`this task-b.js file runs in the process ${process.pid}`);
