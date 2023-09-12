import fs from 'fs';

const file1 = fs.createWriteStream('file23.txt');   // good approach
file1.write('stuff23');
file1.end();

const file2 = fs.writeFile('file24.txt', data);     // bad approach

/********************************************************* */

import { Readable } from 'stream';
const stream22 = Readable.from(content);            // stream22 = readable stream
stream22.on('data', console.log);

