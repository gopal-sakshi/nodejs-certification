// HOW TO RUN
    // remove type:"module" from package.json
    // navigate till /nodejs-certification/src/child-processes$ 
    // run node example04_spawn_vs_fork.js


var {spawn, exec} = require('child_process');

    // 'node' is an executable command (can be executed without a shell) 
    // uses streams to transfer data (spawn.stout)  
var spawn = spawn('node', ['module.js']);     
spawn.stdout.on('data', function(msg){         
    console.log(msg.toString())
});

    // the 'node module.js' runs in the spawned shell 
    // transfered data is handled in the callback function 
var exec = exec('node module.js', function(err, stdout, stderr){
    console.log(stdout);
});