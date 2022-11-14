import { Readable, Writable } from 'stream';
import path from 'path';
import fs from 'fs';


// import { fs } from 'fs';                 // WRONG
// import fs from 'fs';                     // RIGHT



const __dirname = path.resolve();

const originArray1 = ['Hello', 'doctor', 'heart', 'miss', 'aaye'];
const someStream23 = fs.createWriteStream(`${__dirname}/src/stream/example11_a_23.txt`);

const originStream1 = Readable.from(originArray1);
originStream1.pipe(someStream23);