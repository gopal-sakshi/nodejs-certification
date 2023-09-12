/************************************************** */
myStream2.on('data', chunk44 => {});

/************************************************** */
for await(const chunk33 of myStream2) { 
    console.log(chunk33.toString());
}

/************************************************** */
inputStream23.pipe(outputStream23);

/************************************************** */

/* 
    Streams are collections of data — just like arrays or strings. 
    difference is that streams = 
        not available all at once
        they don’t have to fit in memory.
        data coming from external sources, one chunk at a time

    Readable streams
    - HTTP reqeust, response
    - fs, zlib, crypto
    - process.stdin

    writable streams
    - http request on client; 
    - http response on server       
        res.addHeader()
    - fs, zlib, crypto
    - process.stdout

*/

