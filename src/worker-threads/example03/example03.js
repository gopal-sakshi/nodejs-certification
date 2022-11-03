/* eslint-disable no-new */
/**
 * Description: Create two Worker and send messages with parent.
 */

/** Import generics dependences */
import { Worker } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

// Define two Workers with differents files.
const workerA = new Worker(`${__dirname}/src/worker-threads/example03/task-a.js`);
const workerB = new Worker(`${__dirname}/src/worker-threads/example03/task-b.js`);

console.log(`threadId of workerA ===> ${workerA.threadId}`);
console.log(`threadId of workerB ===> ${workerB.threadId}`);

workerA.on('message', (data) => {
  console.log(`Message from workerA -> ${data}`);
});

workerB.on('message', (data) => {
  console.log(`Message from workerB -> ${data}`);
});
