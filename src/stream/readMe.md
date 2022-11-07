Some Commands
--------------------------------------------------------------
file = fs.createWriteStream('input.txt');

file.write('joker is played by heath ledger');
file.write('\n');
file.write('baahubali hero is prabhas');

file.end('------- end of data -------');

`need clarity when these events will be emitted`
file.on('open', () => {});
file.on('ready', () => {});
file.on('finish', () => {});
file.on('close', () => {});



--------------------------------------------------------------