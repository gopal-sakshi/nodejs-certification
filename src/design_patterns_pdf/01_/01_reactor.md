I/O is slow
- I/O is definitely the slowest among the fundamental operations of a computer.
- Accessing the RAM is in the order of nanoseconds (10e-9 seconds)
    while accessing data on the disk is in the order of milliseconds (10e-3 seconds)

the traditional approach to handle concurrency in web servers 
- is to kick off a thread or a process for each concurrent connection
- when a thread blocks for an I/O operation 
    it will not impact the availability of the other requests, 
    because they are handled in separate threads. 
- but C10k problem
    there is a maximum limit of number of threads than can be created

---------------------------------------------------------------------------------------------------
In addition to `blocking I/O`, most modern operating systems support another mechanism to access resources, called `non-blocking I/O`. 
In this operating mode, the system call always returns immediately without waiting for the data to be read or written. 
If no results are available at the moment of the call, the function will simply return a predefined constant
    indicating that there is no data available to return at that moment.

Now Question is `how to access non-blocking I/O`

busy-waiting
- most basic pattern
- to actively poll the resource within a loop until some actual data is returned 
-  it is possible to handle different resources in the same thread, but it's still not efficient

Event demultiplexing
- 


how concurrency works in a single-threaded application using 
    <synchronous event demultiplexer> 
    and <non-blocking IO>
We can see that using only one thread 
    does not impair our ability to run multiple I/O bound tasks concurrently. 
The <tasks are spread over time, instead of being spread across multiple threads>

`reactor pattern`
- The main idea behind it is to have a handler associated with each I/O operation
- the handler will be invoked as soon as an event is produced & processed by the event loop
- In Node.js, the handler is represented by a callback function


Each operating system has its own interface for the Event Demultiplexer:
- epoll on Linux
- kqueue on Mac OS X
- I/O Completion Port API (IOCP) on Windows.


All these inconsistencies across & within the different OS 
required a higher-level abstraction to be built for the Event Demultiplexer. 
This is exactly why the Node.js core team created a C library called libuv
to make Node.js compatible with all the major platforms 
and normalize the non-blocking behavior of the different types of resource; 
libuv today represents the low-level I/O engine of Node.js.
Besides abstracting the underlying system calls, libuv also 
    implements the reactor pattern, thus providing an API for creating event loops, 
    managing the event queue,
    running asynchronous I/O operations,
    queuing other types of tasks.
----------------------------------------------------------------------------------------------------------

Node.js recipe
- reactor pattern 
- libuv
- set of bindings responsible for wrapping & exposing libuv and other low-level functionality to JavaScript.
- V8 (JS engine)
- A core JavaScript library (called node-core) that implements the high-level Node.js API
----------------------------------------------------------------------------------------------------------