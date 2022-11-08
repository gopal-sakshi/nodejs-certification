// Since the exec function uses a shell to execute the command, we can use the shell syntax directly

// const { exec } = require('child_process');
import { exec } from 'child_process';

exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});

/*
    shell syntax comes at a security risk 
    - if you’re executing any kind of dynamic input provided externally. 
    - A user can simply do a command injection attack using shell syntax characters like ; and $ 
    - for example, command + ’; rm -rf ~’ 

    The exec function is a good choice if you need to use the shell syntax and if the size of the data expected from the command is small

*/