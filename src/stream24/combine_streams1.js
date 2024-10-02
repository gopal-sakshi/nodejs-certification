// RUN THIS File like this ---> "node combine_streams1.js"      for fs path to WORK
import { PassThrough, Readable } from 'stream';
import * as fs from 'fs';

const merge = (...streams) => {
    let pass = new PassThrough()
    for (let stream of streams) {
        const end = stream == streams.at(-1);
        pass = stream.pipe(pass, { end })
    }
    return pass
}
/*****************************************************************/
var club23 = { name: 'Real Madrid', manager: "Carlo Ancelotti", stadium: "Santiago Bernabeu" };
var stream44 = new Readable();
stream44.push(JSON.stringify(club23));
stream44.push(null);


var stream45 = fs.createReadStream("./input23.txt");
/*****************************************************************/

var output23 = fs.createWriteStream("./output23.txt");
merge(stream44, stream45).pipe(output23);
/*****************************************************************/