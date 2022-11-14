
import { Transform } from 'stream';
import fs from 'fs';

// const { Transform } = require('stream')
// const fs = require('fs')


const myTransformStream = new Transform({
  transform(chunk, encoding, done) {
    const str = chunk.toString() + "__en\n"
    this.push(str)
    done();
 }})
const myStream = fs.createReadStream(`src/stream23/hello.txt`, {
  highWaterMark: 4
});

myStream
.pipe(myTransformStream)
.pipe(process.stdout)