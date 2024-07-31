/*
    zlib === 3 compression methods
    - gzip
    - deflate
    - brotli

    associated methods to compress & decompress ===> 
        createGzip, createGunzip
        createDeflate, createInflate
        createBrotliCompress, createBrotliDecompress

*/


import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
const srcStream23 = createReadStream('path23.txt');
const destStream23 = createWriteStream('path23.txt.gz');

pipeline(srcStream23, method23, destStream23, (err, res) => { console.log('compression done'); })
