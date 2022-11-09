# zlib
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const gzip = zlib.createGzip();             // gzip = for compressing               source is text file
    zlib.createDeflate();           zlib.createInflate();
    zlib.createBrotliCompress();    
const gunzip = zlib.createGunzip()          // gunzip = for decompressing           source is zip file


const sourceA = createReadStream(`sourcePath/file23.txt`);
const destinationA = createWriteStream(`destinationPath/file23.txt.zip`);
const sourceB = createReadStream(`sourcePath/file23.txt.zip`);
const destinationB = createWriteStream(`destinationPath/file23.txt`);

pipeline(sourceA, gzip, destinationA, (err, res) => { code for Callback fn() } )
pipeline(sourceB, gunzip, destinationB, (err, res) => { code for Callback fn() } )

- `gzip file23.txt` --------> is a linux command line utility... compresses & outputs `file23.txt.gz`