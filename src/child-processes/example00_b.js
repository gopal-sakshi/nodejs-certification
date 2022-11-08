// const { spawn } = require('child_process');
import { spawn } from 'child_process';



const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);
// exec('find . -type f | wc -l', () => {})         =========> because exec function uses a shell to execute the command
//                                                  =========> we can use the shell syntax directly here making use of the shell pipe feature.


// pipe the standard input/output of multiple processes on each other
find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});