// Pipe does not propagate errors. Two ways to handle errors
    // by adding an on error handler to each stream
    // using the “pipelines” function to replace .pipe




import { Transform } from 'stream';
import fs from 'fs';

const myTransformStream = new Transform( {
    transform(chunk, encoding, done) {
    const str = chunk.toString() + " \n"
    this.push(str)
    done()
    }
});
fs.createReadStream(`src/stream23/hello.txt`)
.on('error', console.log)
.pipe(myTransformStream)
.on('error', console.log)
.pipe(process.stdout)
.on('error', console.log)