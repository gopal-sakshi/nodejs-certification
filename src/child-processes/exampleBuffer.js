import { spawn } from 'child_process';

const fncSpawn = () => {
    const bat = spawn('pwd');
    bat.stdout.on('data', (data) => { 
      console.log('buffer ===> ', data); 
      console.log('buffer ===> ', Buffer.from(data).toString()); 
    });
    bat.stderr.on('data', (data) => { console.error('[fncSpawn] stderr > data', data); });
    bat.on('exit', (code) => { console.info(`exit ayyanroy, code ==> ${code}`); });
};

fncSpawn();