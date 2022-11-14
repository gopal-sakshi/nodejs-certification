import {  Transform, pipeline } from 'stream';
import fs from 'fs';

const myTransformStream33 = new Transform( {
    transform(chunk, encoding, done) {
    const str = chunk.toString() + " \n"
    this.push(str)
    done()
    }
});

const myErrorHandler1 = (err) => {
    if(err) { console.log(`jc error =========> ${err}`) }
}

// pipeline(
//   fs.createReadStream(`src/stream23/hello2.txt`),
//   myTransformStream33,
//   process.stdout,
//   myErrorHandler1
// );

pipeline(
    fs.createReadStream(`src/stream23/hello.txt`),
    myTransformStream33,
    process.stdout,
    (err) => { 
        if (err) { console.log(`jc =====>`, err) }              // prints error in multiple lines
        // if (err) { console.log(`jc =====> ${err}`) }            // prints error only in 1 line
        else { console.log('pipe line successey') }
    }
);