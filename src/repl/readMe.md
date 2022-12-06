# define commands

const replServer = repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});

- replServer.defineCommand();
- this.close();
- this.displayPrompt();
- this.clearBufferedCommand();
-------------------------------------------------------------------------------------------------