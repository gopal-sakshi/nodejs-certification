import { exec } from 'child_process';

exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) { console.error(`exec error: ${err}`); return; }
  console.log(`Number of files23 ==> ${stdout}`);
});


// find . -type f | wc -l                   // returns number of files in current directory
// find src/buffer -type f | wc -l          // lists down filesCount in src/buffer directory
// find src/buffer -type f                  // lists down all files in src/buffer directory




// Since the exec function uses a shell to execute the command, we can use the shell syntax directly
  // shell syntax comes at a security risk 
  // if you're executing any kind of dynamic input provided externally. 
  // command injection attack using shell syntax characters like ; and $   + ’; rm -rf ~’ 
// exec function is a good choice if you need to use the shell syntax and if the size of the data expected from the command is small

