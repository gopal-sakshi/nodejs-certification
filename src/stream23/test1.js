/*********************************             used callbacks to consume a stream         *******************************/


import fs from 'fs';
const myStream1 = fs.createReadStream(`src/stream23/hello.txt`)
const myStream2 = fs.createReadStream(`src/stream23/hello.txt`, {highWaterMark: 4 })        // Change our stream buffers length to 4 bytes

// myStream1.on('data', console.log)                                    // prints as Buffer
// myStream1.on('data', (data23) => console.log(data23))                // prints as Buffer
// myStream1.on('data', chunk23 => console.log(chunk23.toString()))     // prints as string     "Hello World"

myStream2.on('data', chunk44 => { console.log('cb called '); console.log(chunk44.toString()) });

/* 

The string “Hello world” fits in a single Buffer with the default size
- but the whole point of streams is to have your .on ‘data’ callback called multiple times, 
- letting the Node.js garbage collector free up the ram of your chunks of data between callback executions.

To have our .on ‘data’ being callback multiple time we can :
- pasting more text in our file so its length is more than 64kb.
- simply split “Hello World” in chunks by changing our stream buffer size, overwriting the default of 64kb parameter.

*/

