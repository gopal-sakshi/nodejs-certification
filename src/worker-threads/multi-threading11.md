`single threaded`
- only one set of instructions is executed at any time in the same process

https://blog.logrocket.com/multithreading-node-js-worker-threads/

JS
- originally -- only for browser interaction, form validation

NodeJS
- single-threaded (sort of)
- we can run things in parallel... but <WE DONT> create threads (or) sync them
- (or) everything runs in parallel except for our JavaScript code


Solution 01
    split into smaller synchronous tasks with setImmediate()
Solution 02
    run parallel processes in background without threads
    CPU's multi-core == listen to music && browse internet
    but multiple processes == more meory; threads are very lightweight compared to processes

Solution 03 (worker threads)
    Worker threads are designed for parallelizing CPU-bound tasks. 
    As mentioned earlier, worker threads work in isolated contexts and therefore have no effect on the main thread.
    