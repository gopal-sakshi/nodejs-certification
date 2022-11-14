import fs from 'fs';
import path from 'path';
import { Writable, Readable } from 'stream';

const __dirname = path.resolve();
const originArray = ['Hi', 'From', 'Array'];
const destinationArray = [];
const destinationFile = fs.createWriteStream(`${__dirname}/src/stream/example12/destination-text.txt`);
destinationFile.on('finish', () => {
  fs.readFile(`${__dirname}/src/stream/example12/destination-text.txt`, (err, data) => {
    if (err) console.error(err);
    console.log('destinationFile -> ', data.toString());
  });
});

const myWritable = new Writable({
  write(chunk, encoding, next) {
    setTimeout(() => {
      console.log('write');
      destinationArray.push(chunk.toString());
      next();
    }, 100);
  },
});

myWritable.on('finish', () => {
  console.log('destinationArray -> ', destinationArray);
});

const origin = Readable.from(originArray.map((item) => `${item} `));

origin.pipe(destinationFile);
origin.pipe(myWritable);

origin.on('data', (chunk) => {
  console.log('data chunk -> ', chunk);
});

origin.on('end', () => {
  console.log('end');
});