/*
    HOW TO RUN THIS FILE
    a) vsspl@vsspl-GA-78LMT-USB3:~/Desktop/backEnd/nodejs-certification/src/zlib/example08$ node example08.js 
    
    b) (node:11119) Warning: require() of ES modules is not supported.
    require() of /home/vsspl/Desktop/backEnd/nodejs-certification/src/zlib/example08/example08.js is an ES module file 
    as it is a .js file whose nearest parent package.json contains "type": "module" 
    which defines all .js files in that package scope as ES modules.
    Instead 
        rename example08.js to end in .cjs, 
        change the requiring code to use import(), or 
        remove "type": "module" from /home/vsspl/Desktop/backEnd/nodejs-certification/package.json
*/


const zlib = require("zlib");
const fs = require('fs');
  
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');
const gzip = zlib.createGzip();
  
inp.pipe(gzip).pipe(out);
console.log("Gzip created!");
