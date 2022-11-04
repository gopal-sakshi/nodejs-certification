/**
 * Description: .
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const writeFile = () => new Promise((resolve, reject) => {
  let data = '';
  for (let i = 0; i <= 1000000; i += 1) {
    data += "HalaMadrid\n";
  }
  fs.writeFile(`${__dirname}/src/stream/stream-big-example04-writeFile.txt`, data, 'utf8', (err) => {
    if (err) reject(err);
    resolve();
  });
});

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-big-example04-createWriteStream.txt`);
const createWriteStream = () => new Promise((resolve, reject) => {
  for (let i = 0; i <= 1000000; i += 1) {
    file.write("LosBlancos\n");
  }
  file.end('done writing data');
  file.on('finish', () => resolve());
  file.on('error', (err) => reject(err));
});

(async () => {
  try {
    // Show timer for write file with fs.writeFile function.
    console.time('writeFile');
    await writeFile();
    console.timeEnd('writeFile');

    // Show timer for write file with fs.createWriteStream function.
    console.time('createWriteStream');
    await createWriteStream();
    console.timeEnd('createWriteStream');
  } catch (err) {
    console.log(err);
  }
})();
