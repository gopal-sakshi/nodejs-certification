----------------------------------------------------------------------------------
import { spawn } from 'child_process';
import { spawn, spawnSync } from 'child_process';

const listFiles1 = spawn('ls');             // command 'ls' ===> list all files

listFiles1.stdout.on('data', (daataa) => {
    console.log(`${Buffer.from(daataa).toString()}`);
});

const bat = spawnSync('sh', [
      `${__dirname}/src/child-processes/test.sh`,
]);
----------------------------------------------------------------------------------
import { exec, execSync } from 'child_process';

exec('ls', (error, stdout, stderr) => {

})

----------------------------------------------------------------------------------
exec vs execSync

`execSync`
execSync which would be blocking 
execSync blocks the creating process until the child_process created using execSync returns.

`exec`
exec would be non-blocking.
exec immediately returns and will return a value if there is one later on and won't block the creating parent process.

`async.waterfall`
a control flow mechanism
guarantees that operations are executed in order 
chain return values from the <first function in the chain> to the <last function in the chain>. 
If one of the functions passed to async.waterfall contains code that would be blocking then async.waterfall would also be blocked. 
async.waterfall doesn't make the guarantee that all code executed inside it will be async.
----------------------------------------------------------------------------------

`Read this`

use of child_process means that this will be executed on a separate process and not on the main process being executed using node. 
You <shouldn't use child_process for control flow> as there is overhead associated with creating and destroying a new child process. 
Unless you're doing some CPU intensive tasks or have a need for a separate process you should avoid this.

If <you want to execute things synchronously> you can <wrap all of your code in a try-catch block> but I would definitely say don't use child_process for control flow.

From a performance perspective, 
    both of these approaches are bad as they create a child_process 
    but, exec() would be better as it at least returns immediately to the creating process allowing other code to continue executing. 
    
    
`Whenever blocking code is used in Node`, you're `eliminating the primary benefit` of using Node. 
There are situations where blocking is necessary, like requiring modules, but in most scenarios there is a non-blocking alternative.

As an aside, if you're trying to copy a file you can use the fs module and pipe the original file into a new file in a new destination with a new name. The below approach is async, and doesn't require any external dependencies or control flow library. Additionally, it should be more performant than any of the code you've implemented above.
----------------------------------------------------------------------------------

Ways to create child processes
- spawn
- spawnSync
- exec
    will spawn a subshell and execute the command in that shell
    execFile & spawn ====> accept arguments
    exec ======> does not accept arguments, because exec allows us to execute more than one command on a shell. 
            ===> When using exec, if we need to pass arguments to the command, they should be part of the whole command string.
    `use cases` ==> when we need to utilize shell functionality such as pipe, redirects, backgrounding
- execSync
- execFile
    when we just need to execute an application and get the output.
    run an image-processing application like ImageMagick to convert an image from PNG to JPG format
- execFileSync
- 

`Theory`
- 4 ways to create child process ====> exec, spawn, execFile, fork
- all four are asynchronous ====> they return an object which is an instance of child_process class
- 

----------------------------------------------------------------------------------

# spawn vs exec

`spawn`
is more suitable for long-running processes with huge output. 
That's because spawn streams input/output with a child process.
child process created by spawn()
    does not spawn a shell
    streams the data returned by the child process (data flow is constant)
    has no data transfer size limit
    

`exec` buffers output in a small (by default 200K) buffer. 
exec first spawns a subshell, and then tries to execute your process
child process created by exec()
    does spawn a shell in which the passed command is executed
    buffers the data (waits till the process closes and transfers the data in on chunk)
    maximum data transfer up to Node.js v.12.x was 200kb (by default), but since Node.js v.12x was increased to 1MB (by default)


exec(`sh ${__dirname}/src/child-processes/test.sh`, () => {} );                     // data is accessed in callback function
const bat = spawn('sh', [`${__dirname}/src/child-processes/test.sh`,]);             // data is accessed at bat.stdout.on('data', () => {} )

----------------------------------------------------------------------------------

`fork`
- special case of child_process.spawn() 
- used specifically to spawn new Node.js processes. 
- Like child_process.spawn(), a ChildProcess object is returned. 
- The returned ChildProcess will have an additional communication channel built-in 
    which allows messages to be passed back and forth between the parent and child.
- The fork method will open an IPC channel allowing message passing between Node processes:
    On the child process, `process.on(‘message’)` and `process.send(‘message to parent’)` can be used to receive and send data
    On the parent process, `child.on(‘message’)` and `child.send(‘message to child’)` are used
    Each process has it’s <own memory>, with <their own V8 instances> assuming at least 30ms start up and 10mb each.


