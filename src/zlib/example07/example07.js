/*
    Till now, we have seen
    - pipeline( source, zlib.createDeflate, destination)            // to decompress use createInflate()
    - pipeline( source, zlib.createGzip, destination)               // to decompress use createGunzip()
    - pipeline( source, zlib.createBrotli, destination)

    Now, we will see
    - 
*/

import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

/********************************* USING PIPE, instead of pipeline() ******************************************** */
//RUN THIS FIRST
// const input1 = createReadStream(`/home/vsspl/Desktop/backEnd/nodejs-certification/src/zlib/example07/realMadrid.txt`);
// const output1 = createWriteStream(`/home/vsspl/Desktop/backEnd/nodejs-certification/src/zlib/example07/realMadrid.txt.gzip`);
// const gzip23 = zlib.createGzip();
// input1.pipe(gzip23).pipe(output1);

// AFTER RUNNING FIRST, RUN THIS...
// const input2 = createReadStream(`/home/vsspl/Desktop/backEnd/nodejs-certification/src/zlib/example07/realMadrid.txt.gzip`);
// const output2 = createWriteStream(`/home/vsspl/Desktop/backEnd/nodejs-certification/src/zlib/example07/realMadrid_new.txt`);
// const gunzip23 = zlib.createGunzip();
// input2.pipe(gunzip23).pipe(output2);
/******************************************************************************************************* */


/************************************** USING zlib.gzip(), instead of zlib.createGzip() *************************** */
const input3 = 'Input must be buffer (or) Unit8Array';
const output3 = Buffer.from('H4sIAAAAAAAAA/PMKygtUcgtLS5RSEpVSCpNS0stUtDIL9JUCM3LLLFwLCpKrAQArqP/7SQAAAA=');

zlib.gzip(input3, (err, buffer) => {
    if(err) { console.log(err); process.exit(1); }
    else {
        zlib.gunzip(buffer, (err, blah23) => { console.log(blah23.toString('hex')); })        
        // console.log(buffer);
        const stringifiedZip23 = buffer.toString('base64');
        console.log(stringifiedZip23);
    };    
});
// zlib.gunzip(output3, (err, buffer) => {
//     if(err) { console.log(err); process.exit(1); }
//     else {
//         console.log(buffer);
//         const unzipped23 = buffer.toString('base64');
//         console.log(unzipped23);
//     }
// })

/********************************************************************************************** */