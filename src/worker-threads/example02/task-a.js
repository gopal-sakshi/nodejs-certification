
import { isMainThread } from 'worker_threads';

if (!isMainThread) {
  console.log('Wwwworker A');
}
console.log(`this task-a.js file runs in the process ${process.pid}`);

