import readline from 'readline';

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('question', () => { });
rl.on('close', () => { });
rl.on('SIGINT', () => { });
rl.on('line', () => { });
rl.on('pause', () => { });
rl.on('resume', () => { });

The 'line' event is emitted 
    whenever the input stream receives an end-of-line input
    if new data has been read from a stream and that stream ends without a final end-of-line marker.

pause event emitted
    when input stream is paused
    say input stream ---> fs.createReadStream('urls.txt');

Case 01         urls.txt < 64Kb
    entire file is being read in at once and by the time you pause(), there's nothing left to read.
    all of the lines in from input file are logged to the console
Case 02         urls.txt < 64Kb


------------------------------------------------------------------------
process.stdin.on('keypress', (s, key) => {
  // console.log('keypress', s, key);
});
------------------------------------------------------------------------

rl = readline.createInterface({
    input: fs.createReadStream('input23.txt),
    output: process.stdout,
});

readline.moveCursor() ??????

