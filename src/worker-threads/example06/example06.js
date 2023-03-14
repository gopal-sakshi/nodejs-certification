export function runWorker(path, cb23, workerData) {
    const worker = new Worker(path, { workerData });
    worker.on('message', cb23.bind(null, null));
    worker.on('error', cb23);
    worker.on('exit', (exitCode) => {
        if (exitCode === 0) { return null; }
        return cb23(new Error(`Worker has stopped with code ${exitCode}`));
    });
    return worker;
}