/**
 * Description: Compress to zip destination file from txt file how source.
 */

/** Import generics dependences */
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();
console.log(__dirname);
// Define gzip with createGzip method, this create other stream.
const gzip = zlib.createGzip();

// Define source and destination file.

// USE THIS -------------------> /Desktop/backEnd/nodejs-certification$  node src/zlib/example01/example01.js 
// const source = createReadStream(`${__dirname}/src/zlib/example01/origin.txt`);
// const destination = createWriteStream(`${__dirname}/src/zlib/example01/destination.txt.zip`);

// USE THIS ------------------> /Desktop/backEnd/nodejs-certification/src/zlib/example01$   node example01.js 
const source = createReadStream(`${__dirname}/origin.txt`);
const destination = createWriteStream(`${__dirname}/destination.txt.zip`);

// Define pipeline with streams and gzip method (other stream).
pipeline(source, gzip, destination, (err, res) => {
  if (err) {    // this is error 1st callback of NodeJs... 
    console.error('Ups, an error:', err);
    process.exitCode = 1;
  } else 
  console.log(res);   // undefined... because successful compression doesnt return a value... only error returns a value
});
