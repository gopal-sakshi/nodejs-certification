import { Readable, Writable } from 'stream';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

const originArray1 = ['Hello', 'doctor', 'heart', 'miss', 'aaye'];
const someInputStream23 = Readable.from(originArray1.map((item) => { item + '__en'}));
// const someInputStream24 = Readable.from(someInputStream23.map((item) => { item + '__te__'}));
const someOutputStream23 = fs.createWriteStream(`${__dirname}/src/stream/example11_b_23.txt`);

const originStream1 = Readable.from(originArray1);
originStream1.pipe(someInputStream23).pipe(someOutputStream23);
// originStream1.pipe(someOutputStream23);