
/*
    Use node 16.10.0
    node src/stream/example01.js 

*/

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-${Date.now()}.txt`);

file.write('joker is played by heath ledger');
file.write('\n');       // adds new line
file.write('baahubali hero is prabhas');
file.end('------- end of data -------');