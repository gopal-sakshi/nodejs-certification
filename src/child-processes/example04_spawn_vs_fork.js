// HOW TO RUN
    // remove type:"module" from package.json
    // navigate till /nodejs-certification/src/child-processes$ 
    // run node example04_spawn_vs_fork.js


var {spawn, exec} = require('child_process');
// import { spawn, spawnSync, exec } from 'child_process';

    // 'node' is an executable command (can be executed without a shell) 
    // uses streams to transfer data (spawn.stout)  
var spawn23 = spawn('node', ['module.js']);     
spawn23.stdout.on('data', function(msg){  
    // console.log(msg.toString())
    console.log(msg)
});

    // the 'node module.js' runs in the spawned shell 
    // transfered data is handled in the callback function 
var exec23 = exec('node module.js', function(err, stdout, stderr){
    console.log(stdout);
});