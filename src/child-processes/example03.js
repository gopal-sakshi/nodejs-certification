/**
 * Description: spawn and spawnSync functions with custom sh file.
 */

/** Import generics dependences */
import { spawn, spawnSync } from 'child_process';
import path from 'path';

const __dirname = path.resolve();

// Launch spawn function to execute sh file.
const fncSpawn = () => {
  console.time('[fncSpawn] sh');

  // USES SINGLE sh file --------------------------------->
  const bat = spawn('sh', [
    `${__dirname}/src/child-processes/test.sh`,
  ]);
  console.log('child_proc ', bat.pid);
  console.log('pppp ', process.pid);
  // USES MULTIPLE sh files ----------------- DID NOT WORK -------------->
  // const bat = spawn('sh', [
  //   `${__dirname}/src/child-processes/test1.sh`,
  //   `${__dirname}/src/child-processes/test2.sh`,
  // ]);

  bat.stdout.on('data', (data) => {
    console.log('[fncSpawn] sh stdout > data (buffer)', Buffer.from(data).toString());
  });
  bat.stderr.on('data', (data) => {
    console.error('[fncSpawn] sh stderr > data', Buffer.from(data).toString());
  });
  bat.on('exit', () => {
    console.timeEnd('[fncSpawn] sh');
  });
};
fncSpawn();
console.log('----------------------------------------');
console.log('spawn in non-blocking... so code goes to next line');
console.log('spawnSync in blocking... code wont move further');
console.log('----------------------------------------');
// Launch spawnSync function to execute sh file.
const fncSpawnSync = () => {  
  try {
    const bat = spawnSync('sh', [
      `${__dirname}/src/child-processes/test.sh`,
    ]);
    console.log('[fncSpawnSync] sh stdout > data (buffer)', Buffer.from(bat.stdout).toString());    
  } catch (err) {
    console.error('[fncSpawnSync] sh stderr > err', err);
    console.timeEnd('[fncSpawnSync] sh');
  }
};
fncSpawnSync();



