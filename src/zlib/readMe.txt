import zlib from 'zlib';
import { pipeline } from 'stream';

const gzip = zlib.createGzip();
const source = createReadStream(`${__dirname}/origin.txt`);
const destination = createWriteStream(`${__dirname}/origin.txt.zip`);

pipeline(source, gzip, destination, (err, res) => {})       
    // source           = source file path       (origin.txt)
    // gzip             = compression method
    // destination      = destination file path  (origin.zip)


Something wrong...
I was able to compress into zip (or) gz... use gz 
But I was unable to decompress from gz to txt (or) jpg --> in example01.js
but its working in example02.js
---------------------------------------------------------------------------------------------------------------
How Compression works
- finding similar strings within a text file
- replacing those strings with a temporary binary representation 
- to make the overall file size smaller


cost (in time & battery usage) of compressing & decompressing data
- should be balanced against the gains in transport efficiency
- (OR) compressing text files under 850 bytes --> extra overhead and is not worth the effort

Summary
- Most image formats (especially JPEGs) do not benefit from compression, but SVG does;
- Most other media formats (e.g. audio, video) do not benefit from compression;
- Very small files (e.g. <1k) generally do not benefit from compression."
---------------------------------------------------------------------------------------------------------------

