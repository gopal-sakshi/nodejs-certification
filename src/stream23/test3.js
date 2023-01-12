
import { Transform } from 'stream';
import fs from 'fs';

// const { Transform } = require('stream')
// const fs = require('fs')

const transformObj = {
  transform(chunk, encoding, done) {
    const str = chunk.toString() + "__en\n"
    this.push(str)
    done();
  }
};
const myTransformStream = new Transform(transformObj)
const myStream1 = fs.createReadStream(`src/stream23/hello.txt`, {
  highWaterMark: 4
});
const myStream2 = fs.createWriteStream(`src/stream23/output23.txt`);

myStream1
.pipe(myTransformStream)
.pipe(process.stdout)
// .pipe(myStream2)

// SYNTAX
// inputStream23.pipe(outputStream23)