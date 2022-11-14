/******************* 2nd way to consume streams ====> Streams provide async iterables you can use in “for await of” loop ****************** */

        // myStream.on(‘data’...                            APPROACH I
        // for await(const chunk of myStream){              APPROACH II



import fs from 'fs';
const myStream2 = fs.createReadStream(`src/stream23/hello.txt`, {highWaterMark: 4 });
for await(const chunk33 of myStream2) { 
    console.log(chunk33.toString());
}


