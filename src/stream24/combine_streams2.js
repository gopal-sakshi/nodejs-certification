async function* concatStreams23(readables) {
    // console.log("readables ===> ", JSON.stringify(readables, null, 2))
    for (const readable of readables) {
        for await (const chunk of readable) { 
            console.log("chunk ===> ", chunk.toString())
            yield chunk 
        }
    }
}


import * as fs from 'fs';
import { Readable } from "stream";

const files = ['file1.txt', 'file2.txt', 'file3.txt']
const iterable = concatStreams23(files.map(f => fs.createReadStream(f)))

// convert the async iterable to a readable stream
const mergedStream = new Readable.from(iterable)

var output24 = fs.createWriteStream("./output24.txt");
mergedStream.pipe(output24);