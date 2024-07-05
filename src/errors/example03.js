/**
 * Description: In callback functions.
 */


import { readFile } from 'fs';


readFile('/any.file', (err, data) => {
  if (err) {
    console.error('[withoutTryCatch]', 'There was an error', err);
    return;
  }
  console.log(data);
});
