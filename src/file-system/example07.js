/**
 * Description: Get file list of folder and content files with Sync.
 */


import fs from 'fs';
import path from 'path';
// 

const __dirname = path.resolve();

const contentFolder = (pathName) => {
  const content = fs.readdirSync(`${__dirname}/src/file-system/${pathName}`);
  Object.entries(content).forEach(([key, fileName]) => {
    console.log(key, fileName);
    const file = fs.readFileSync(`${__dirname}/src/file-system/${pathName}/${fileName}`);
    console.info(Buffer.from(file).toString());
  });
};

contentFolder('test');
