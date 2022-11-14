import { Readable } from 'stream';

const content = [
  'Hi',
  'From',
  'Array',
];

const origin = Readable.from(content);

// // APPROACH I ------------------> data read is stored in chunk23 & chunk23 is logged onto console
// origin.on('data', (chunk23) => {
//   console.log(chunk23);
// });

// APPROACH II -----------------> data read is not directly given as input to console.log
origin.on('data', console.log);

origin.on('end', () => { console.log('iterable ended') });
origin.on('close', () => { console.log('iterable closed') });
origin.on('error', () => { console.log('iterable encountered error') });