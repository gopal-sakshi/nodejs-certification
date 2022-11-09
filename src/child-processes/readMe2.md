# Process vs Thread
- Both processes and threads are independent sequences of execution. 
- The typical difference is that threads (of the same process) run in a shared memory space, while processes run in separate memory spaces.

-----------------------------------------------------------------------------------------------------------
`Process`
- Each process provides the resources needed to execute a program. 
- A process has a 
    virtual address space, 
    executable code, 
    open handles to system objects, 
    a security context, 
    a unique process identifier, 
    environment variables, 
    a priority class, 
    minimum and maximum working set sizes, 
    at least one thread of execution. 
- Each process is started with a single thread, often called the primary thread, but can create additional threads from any of its threads.

`Thread`
- A thread is an entity within a process that can be scheduled for execution. 
- All threads of a process share its virtual address space and system resources. 
- In addition, each thread maintains 
    exception handlers, 
    a scheduling priority, 
    thread local storage, 
    a unique thread identifier,
    a set of structures the system will use to save the thread context until it is scheduled. 
- The thread context includes the 
    thread's set of machine registers, 
    the kernel stack, 
    a thread environment block, 
    a user stack in the address space of the thread's process. 
- Threads can also have their own security context, which can be used for impersonating clients.
-----------------------------------------------------------------------------------------------------------