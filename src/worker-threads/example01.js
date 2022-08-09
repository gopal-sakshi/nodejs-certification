/* eslint-disable no-new */
/**
 * Description: Create Worker with the same file.
 */

/** Import generics dependences */
import { Worker, isMainThread } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  console.log('hello I am Main thread');
  new Worker(`${__dirname}/src/worker-threads/example01.js`);
} else {
  console.log('Inside Worker thread!');
  console.log(isMainThread); // Prints 'false'.
}