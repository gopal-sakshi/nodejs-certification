// const { spawn } = require('child_process');
import { spawn } from 'child_process';


const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

// HOW TO RUN ==============> 
  //          type something in the prompt...   Ctrl+D twice
  //          cat src/child-processes/exampleWordCount.js | wc
  //          node src/child-processes/exampleWordCount.js 