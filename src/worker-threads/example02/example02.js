/* eslint-disable no-new */
/**
 * Description: Create Worker with differents files for create two parallels tasks.
 * All workers =======> same process-id
 */
import { Worker } from 'worker_threads';
import path from 'path';

var __dirname = path.resolve();

const workerA = new Worker(`${__dirname}/src/worker-threads/example02/task-a.js`);
const workerB = new Worker(`${__dirname}/src/worker-threads/example02/task-b.js`);
const workerC = new Worker(`${__dirname}/src/worker-threads/example02/task-c.js`);
