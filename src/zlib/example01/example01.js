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
const gunzip = zlib.createGunzip();
const gzip = zlib.createGzip();


// Define source and destination file.

/******************************************************************************************** */
// APPROACH I -------------------> /Desktop/backEnd/nodejs-certification$  node src/zlib/example01/example01.js 
const source1 = createReadStream(`${__dirname}/src/zlib/example01/origin.txt`);
const destination1 = createWriteStream(`${__dirname}/src/zlib/example01/origin.txt.gz`);

// const source1 = createReadStream(`${__dirname}/src/zlib/example01/photo.jpg`);
// const destination1 = createWriteStream(`${__dirname}/src/zlib/example01/photo.jpg.zip`);

/******************************************************************************************** */

/******************************************************************************************** */
// APPROACH II ------------------> /Desktop/backEnd/nodejs-certification/src/zlib/example01$   node example01.js 
// const source1 = createReadStream(`${__dirname}/origin.txt`);
// const destination1 = createWriteStream(`${__dirname}/origin.txt.gz`);
/******************************************************************************************** */




// /****************************** FIRST RUN COMPRESSION *********************************************** */
// pipeline(source1, gzip, destination1, (err, res) => {
//   if (err) {    // this is error 1st callback of NodeJs... 
//     console.error('Ups, an error:', err);
//     process.exitCode = 1;
//   } else 
//   console.log(`undefined... because successful compression doesnt return a value... only error returns a value --> ${res}`);
// });
// /*************************************************************************************************** */


/****************************** ONLY THEN DECOMPRESSION *********************************************** */
const source2 = createReadStream(`${__dirname}/src/zlib/example01/origin.txt.gz`);
const destination2 = createWriteStream(`${__dirname}/src/zlib/example01/new_origin.txt`);

// const source2 = createReadStream(`${__dirname}/src/zlib/example01/photo.jpg.zip`);
// const destination2 = createWriteStream(`${__dirname}/src/zlib/example01/new_photo.jpg`);

pipeline(source2, gunzip, destination2, (err, res) => {
  if (err) {    // this is error 1st callback of NodeJs... 
    console.error('Ups, an error:', err);
    process.exitCode = 1;
  } else 
  console.log(`undefined... because successful compression doesnt return a value... only error returns a value --> ${res}`);
});
/****************************************************************************************** */
