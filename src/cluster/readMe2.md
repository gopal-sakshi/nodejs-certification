When you run a Node.js program on a system with multiple CPUs
it creates a process that uses only a single CPU to execute by default. 
process.pid =====> gives the node process
node can add two numbers (or) start a httpServer (then, it'll listen on a port)

Node.js uses a single thread to execute your JavaScript code
all the requests to the application have to be handled by that thread running on a single CPU. 

If the application has CPU-intensive tasks
the OS has to schedule the tasks to share a single CPU until completion.
-----------------------------------------------------------------------

When you run the index.js file with the node command
the OS creates a process. 
A process is an abstraction the OS makes for a running program. 
The OS <allocates memory> for the program and <creates an entry> in a process list containing all OS processes. 
That entry is a <process ID>
The program binary is then located and <loaded into the memory> allocated to the process. 
From there, the program starts executing. As it runs
    it has no awareness of other processes in the system
    anything that happens in the process does not affect other processes.
-----------------------------------------------------------------------

Node.js introduced the cluster module
It creates multiple copies of the <same application> on <same machine> running at <same time>
but <different processIds>
It also comes with a load balancer = evenly distributes the load among the processes (round-robin algorithm)
If a single instance crashes, users can be served by the remaining processes that are still running.
-----------------------------------------------------------------------


see `cluster23.js` in testing_backend