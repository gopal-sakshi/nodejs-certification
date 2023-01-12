A buffer is an area of memory. 
Most JavaScript developers are much less familiar with this concept, compared to programmers using a system programming languages
    (like C, C++, or Go), which interact directly with memory every day.

Buffer
- represents a fixed-size chunk of memory (can't be resized) `allocated outside of the V8 JavaScript engine`
- buffers = not related to the concept of buffering data. 
- we need buffer because = when a stream processor receives data faster than it can digest.


create a buffer
- Buffer.from()
    Buffer.from() uses UTF-8
- Buffer.alloc(), 
- Buffer.allocUnsafe() 
- Buffer created by alloc will be initialized with zeroes
- Buffer created by allocUnsafe will be uninitialized.
    This means that allocUnsafe would be quite fast... but also may contain old data (could be sensitive)
---------------------------------------------------------------------------------------------------------------

const buf23 = Buffer.from('Hey!')

`some methods`
- console.log(buf23.toString());
    print the full content of the buffer
- buf23.length()
- iterate the buffer
    for (const item of buf) {
        console.log(item)                   //72 101 121 33                 Hey! represented as 72 101 121 33
    }
- write
    const buf24 = Buffer.alloc(4)
    buf24.write('Hey!')
    buf24[1] = 111              ---> now buf24 changes from Hey! to Hoy!
- subarray() 
    to slice a buffer
    slice isnt a copy... original buffer is still source of truth, if that changes, slice also changes
    buf.subarray(0, 2)          // 0,2 = starting & ending positions
- copy a buffer = set method
    const buf = Buffer.from('Hey!')
    const bufcopy = Buffer.alloc(4) //allocate 4 bytes
    bufcopy.set(buf)
-       const buf = Buffer.from('Hey?')
        const bufcopy = Buffer.from('Moo!')
        bufcopy.set(buf.subarray(1, 3), 1)              
        bufcopy.toString() //'Mey!'

----------------------------------------------------------------

why buffers
- Node.js can’t control the speed or time of data arrival, the speed of the stream. 
- It only can decide when it’s time to send out the data.
- If it’s not yet time, Node.js will put them in the buffer —
    the "waiting area" — a small location in the RAM, until it’s time to send them out for processing.
- streaming a video online
    player reads from buffer... if net is fast, buffer is filled... if net is slow, buffer will be empty & loading icon displayed

