/**
 * Description: Create listener for get if change the folder and files content.
 */


import fs from 'fs';
import path from 'path';


const __dirname = path.resolve();

// Declare watch for create listener of folder.
const watch = (folderName) => {
  fs.watch(`${__dirname}/src/file-system/${folderName}`, (eventType, fileName) => {
    console.log('[watch] eventType', eventType);
    console.log('[watch] fileName', fileName);
  });
};
watch('test-watch');
