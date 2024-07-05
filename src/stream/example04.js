/**
 * Description: .
 */


import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const writeFile = () => new Promise((resolve, reject) => {
  let data = '';


/*
  writeFile
    data = a very very long long string (repetetive HalaMadrid)
    data = data + 'HalaMadrid\n';
    we create a very big "data23 object" & write this "data23 object" directly into file

  createWriteStream
    file.write('HalaMadrid\n')
*/
  
  for (let i = 0; i <= 1000000; i += 1) {
    data += "HalaMadrid\n";
  }
  fs.writeFile(`${__dirname}/src/stream/stream-big-example04-writeFile.txt`, data, 'utf8', (err) => {
    if (err) reject(err);
    resolve();
  });
});


// writeFile() can also be written like this...
function writeFileAnotherWay() {
  const promise23 = new Promise((res, rej) => {
    let data = '';
    for (let i = 0; i <= 1000000; i += 1) {
      data += "HalaMadrid\n";
    }
    fs.writeFile(`${__dirname}/src/stream/stream-big-example04-writeFile.txt`, data, 'utf8', (err) => {
      if (err) reject(err);
      resolve();
    });
  });
  return promise23;
}



const file = fs.createWriteStream(`${__dirname}/src/stream/stream-big-example04-createWriteStream.txt`);

const createWriteStream = () => new Promise((resolve, reject) => {
  for (let i = 0; i <= 1000000; i += 1) {
    file.write("HalaMadrid\n");
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
