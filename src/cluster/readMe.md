Cluster :
 
* Each CPU has one process with an IPC to communicate.
* Clusters help when multiple servers are required to accept HTTP requests through a single port.
* The processes have separate memory because of being spanned in different CPUs leading to memory issues.

Worker Threads :
 
* Only a single process is there with multiple threads.
* Each Node contains one Node having most APIs accessible.
* The memory is shared with other threads.
* We can use this for CPU-intensive tasks.