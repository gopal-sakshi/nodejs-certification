/**
 * Description: Create Readable with iterate function with yield.
 */


import { Readable } from 'stream';

async function* generate() {
  yield 'Hi';
  yield 'From';
  yield 'Generate';
}

const origin = Readable.from(generate());

origin.on('data', (chunk) => {
  console.log(chunk);
});
