four different ways to create a child process in Node
- spawn()
- fork()
- exec()
- execFile()


# spawn
const { spawn } = require('child_process');     // `destructure the spawn function` out of child_process module -------> <DESTRUCTURE>
const child23 = spawn('pwd');                   // 1st argument ====> any OS command
child23.stdout.on('data', {});                  // listen on the data event of stdout readable stream... for the o/p of 'pwd' command

const child = spawn('find', ['.', '-type', 'f']);           // translates to ====> `find . -type f`     (array of all arguments)

child.on('on', cb1);
child.on('exit', cb2);                          // register handler (cb2) for `exit` event on child object.
child.on('disconnect', cb3);                    // register handler (cb3) for `disconnect` event on child object
child.on('close', cb4);
child.on('error', cb5); 

disconnect event is emitted =====> when the parent process manually calls the child.disconnect function.
error event is emitted ==========> if the process could not be spawned or killed.
close event is emitted ==========> when the stdio streams of a child process get closed.
message event is emitted ========> when the child process uses the process.send() function to send messages. 
                                    This is how parent/child processes can communicate with each other

Every child process also gets the three standard stdio streams
- child.stdin ========== child.stdout ========== child.stderr
- Unlike in a normal process though, in a child process
    the stdout/stderr streams are readable streams
    while the stdin stream is a writable one.



A child process stdin is a writable stream. 
We can use it to send a command some input. 
Just like any writable stream, the easiest way to consume it is using the pipe function. 
We simply pipe a readable stream into a writable stream.
Since the main process stdin is a readable stream, we can pipe that into a child process stdin stream

By default, the `spawn function does not create a shell` to execute the command we pass into it. 
This makes it slightly more efficient than the `exec function, which does create a shell`
The exec function has one other major difference. 
It <buffers the command’s generated output> and passes the whole output value to a callback function (instead of using streams, which is what spawn does)


----------------------------------------------------------------------------------------------------------------

