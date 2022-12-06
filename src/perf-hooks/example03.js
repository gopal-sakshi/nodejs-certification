/**
 * Description: Timer and timerify wrapper for Get all files from
 * specific folder with function with callback.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

function getAllFiles() {
  const files = fs.readdirSync(`${__dirname}/src`);
  files.forEach((file) => {
    // console.log(path.resolve(`${__dirname}/src/${file}`));
  });
  console.log('getAllFiles Done!');
  // for(let i=0; i<1e10; i++) { }                   // waits around 12 seconds
  for(let i=0; i<1e9; i++) { }                    // waits around 4-6 seconds
}

const wrapped = performance.timerify(getAllFiles);

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });
// obs.observe({ entryTypes: ['measure'], buffered: false });

wrapped();