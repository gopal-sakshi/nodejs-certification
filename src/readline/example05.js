/**
 * Description: Use line, close, pause and resume of readline for get events.
 */

/** Require generics dependences */
import fs from 'fs';
import readline from 'readline';

import path from 'path';
const __dirname = path.resolve();

const rl = readline.createInterface({
  input: process.stdin,
  input: fs.createReadStream(`${__dirname}/src/readline/bigInput.txt`),
  output: process.stdout,
});
var lineCount = 0;
console.log('To exit this process you just have to press <ctrl> + C');

// Active prompt and wait any data.
// rl.prompt();

// If you write in prompt and push enter you can see this log.
rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
  lineCount += lineCount;
});

rl.on('close', () => {
  console.log('Readline closed.');
  console.log(lineCount);
});

rl.on('pause', () => {
  console.log('Readline paused.');
});

rl.on('resume', () => {
  console.log('Readline resumed.');
});

// The 'SIGINT' event is emitted whenever the input stream receives a <ctrl>-C input.
rl.on('SIGINT', () => {
  console.log('Event SIGINT.');
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

// The 'SIGTSTP' event is emitted when the input stream receives a <ctrl>-Z input.
rl.on('SIGTSTP', () => {
  console.log('Event SIGTSTP.');
});
