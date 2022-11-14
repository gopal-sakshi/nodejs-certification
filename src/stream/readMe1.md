Some Commands
--------------------------------------------------------------
file = fs.createWriteStream('input.txt');

file.write('joker is played by heath ledger');
file.write('\n');
file.write('baahubali hero is prabhas');

file.end('------- end of data -------');

`need clarity when these events will be emitted`
file.on('open', () => {});
file.on('ready', () => {});
file.on('finish', () => {});
file.on('close', () => {});

--------------------------------------------------------------

import fs from 'fs';            // use type="module" in nearest package.json (or) use node16
var fs = require('fs');         // 

two ways to write to a file
(a) fs.writeFile('path', encodingType, cb23);
(b) fs.createWriteStream();     // returns file (on which we call -- write, on, end)

src/stream/example04.js ----> it seems createWriteStream() is slower 


--------------------------------------------------------
good practice
return new Promise((res, rej)=> { });

bad practice
var p23 = new Promise((res, rej) => { });
return p23;
--------------------------------------------------------


write vs writeStream vs writeFile

`fs.write`
- low-level access, similar to what you get when you code in C. 
- fs.open opens a file && fs.write writes to it.

`fs.WriteStream` (it seems WriteStream is createWriteStream)
- is a stream 
    that opens the file in the background and
    queues writes until the file is ready. 
- Also, as it implements the stream API, you can use it in a more generic way, just like a network stream or so. 
- You'll e.g. want this when a user uploads a file to your server - 
    take the incoming HTTP POST stream, pipe() it to the WriteStream. Very easy.

`fs.writeFile`
- high-level method for writing a bunch of data you have in RAM to a file. 
- It doesn't support streaming or so, so it's a bad idea for large files or performance-critical stuff. 
- You'll want this if you write out small JSON files or so in your code.
--------------------------------------------------------

import fs from 'fs';
import { createGzip } from 'zlib';

ipFile = fs.inputStream1(path);
opFile = fs.outputStream1(path);

ipFile
    .pipe(createGzip())
    .pipe(opFile);
--------------------------------------------------------
import { Transform } from 'stream';

transform23 = new Transform({

})

// know how transform works in stream - example06.js
--------------------------------------------------------
createReadStream('input23.txt')
    .pipe(createGzip())
    .pipe(response)             // browser will download it... how come ??

createReadStream('input23.txt')    
    .pipe(response)             // browser just displays contents of input23.txt
                                    // but no download... how come ??


inputStream1.pipe(inputStream2).pipe(inputStream3).pipe(outputStreamFinal)
--------------------------------------------------------

All modern browsers can handle a gzip encoded response. 
In fact, if you look at their requests, they'll have a header that says Accept-Encoding: gzip 
which is their way of saying to the server that they can handle gzipped responses.

The important part is 
your server can return both gzip and uncompressed responses depending on the existence and value of that header (Accept-Encoding). 
If a client doesn't send the Accept-Encoding header, you shouldn't compress it. 
If the client does send it, you can optionally encode the response using gzip.
--------------------------------------------------------
example09, example10, example11 ----------> iterators, generators


import { Writable, Readable } from 'stream';                
const origin = Readable.from(iterable23);                       // iterable23 = an array (or) something that can be iterated
origin.on('data', (data23) => { console.log(data23) });

