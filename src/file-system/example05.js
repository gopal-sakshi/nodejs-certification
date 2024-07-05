/**
 * Description: Read folder and file content with readdirSync and readFileSync functions.
 */


import fs from 'fs';
import path from 'path';


const __dirname = path.resolve();

const contentFolderSync = (pathName) => {
  try {
    const content = fs.readdirSync(`${__dirname}/src/file-system/${pathName}`);
    console.log('[contentFolderSync]', content);
  } catch (err) {
    console.error('[contentFolderSync] err', err);
  } finally {
    console.info('[contentFolderSync] finish');
  }
};

contentFolderSync('test');

const contentFileSync = (pathName) => {
  try {
    const content = fs.readFileSync(`${__dirname}/src/file-system/${pathName}`);
    console.log('[contentFileSync]', Buffer.from(content).toString());
  } catch (err) {
    console.error('[contentFileSync] err', err);
  } finally {
    console.info('[contentFileSync] finish');
  }
};

contentFileSync('test/file1.txt');
