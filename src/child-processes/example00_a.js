// const { spawn } = require('child_process');
import { spawn } from 'child_process';

// HOW TO RUN ==============> Ctrl+D twice
const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});