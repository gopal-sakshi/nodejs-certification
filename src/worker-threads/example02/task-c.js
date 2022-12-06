import { isMainThread } from 'worker_threads';

if (!isMainThread) {
    var count = 44
    for(let i=0; i<1e9; i++) { }
    console.log(`task C nunchi ===> `, count, `processId = ${process.pid}`);
}